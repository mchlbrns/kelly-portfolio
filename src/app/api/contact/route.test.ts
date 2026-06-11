import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { POST } from './route';
import { NextResponse } from 'next/server';

// Mock NextResponse
vi.mock('next/server', () => ({
  NextResponse: {
    json: vi.fn().mockImplementation((body, init) => {
      return {
        status: init?.status || 200,
        json: async () => body,
      };
    }),
  },
}));

describe('Contact API Route', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.clearAllMocks();
    // Create a new copy of process.env for each test
    process.env = { ...originalEnv };

    // Mock global fetch
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => 'OK',
    });

    // Mock console.error and console.log to keep test output clean
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore process.env after each test
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  const createMockRequest = (body: any) => {
    return {
      json: async () => body,
    } as Request;
  };

  it('should return 400 if required fields are missing', async () => {
    const req = createMockRequest({ name: 'John', email: 'john@example.com' }); // Missing message
    const response: any = await POST(req);
    const responseBody = await response.json();

    expect(response.status).toBe(400);
    expect(responseBody).toEqual({ error: 'Missing required fields' });
    expect(NextResponse.json).toHaveBeenCalledWith(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  });

  it('should return 200 and log on success if no external APIs are configured', async () => {
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_WEBHOOK_URL;

    const validBody = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      projectType: 'Web App',
      message: 'Hello, I want a web app!',
    };
    const req = createMockRequest(validBody);

    const response: any = await POST(req);
    const responseBody = await response.json();

    expect(response.status).toBe(200);
    expect(responseBody).toEqual({ message: 'Message sent successfully' });
    expect(console.log).toHaveBeenCalledWith('Form submission received:', validBody);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('should return 200 and call Resend API if RESEND_API_KEY is configured', async () => {
    process.env.RESEND_API_KEY = 'test_resend_key';
    process.env.CONTACT_EMAIL_TO = 'test@example.com';
    delete process.env.CONTACT_WEBHOOK_URL;

    const validBody = {
      name: 'Alice',
      email: 'alice@example.com',
      message: 'Hello there',
    };
    const req = createMockRequest(validBody);

    const response: any = await POST(req);

    expect(response.status).toBe(200);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://api.resend.com/emails', expect.objectContaining({
      method: 'POST',
      headers: {
        'Authorization': `Bearer test_resend_key`,
        'Content-Type': 'application/json',
      },
    }));
  });

  it('should return 200 and call webhook if CONTACT_WEBHOOK_URL is configured', async () => {
    delete process.env.RESEND_API_KEY;
    process.env.CONTACT_WEBHOOK_URL = 'https://webhook.site/test';

    const validBody = {
      name: 'Bob',
      email: 'bob@example.com',
      message: 'Testing webhook',
    };
    const req = createMockRequest(validBody);

    const response: any = await POST(req);

    expect(response.status).toBe(200);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://webhook.site/test', expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }));
  });

  it('should return 500 if an unexpected error occurs', async () => {
    // Force an error by causing json() to throw
    const req = {
      json: async () => { throw new Error('Invalid JSON'); },
    } as Request;

    const response: any = await POST(req);
    const responseBody = await response.json();

    expect(response.status).toBe(500);
    expect(responseBody).toEqual({ error: 'Internal server error' });
    expect(console.error).toHaveBeenCalled();
  });
});
