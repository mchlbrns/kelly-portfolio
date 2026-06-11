import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { POST } from './route';

// Mock Next.js NextResponse
vi.mock('next/server', () => {
  return {
    NextResponse: {
      json: vi.fn((body, init) => {
        return new Response(JSON.stringify(body), {
          status: init?.status || 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }),
    },
  };
});

describe('Contact API POST Route', () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    vi.clearAllMocks();
    originalEnv = process.env;
    // Clear global fetch mock if any
    global.fetch = vi.fn();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  const createMockRequest = (body: any) => {
    return new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  describe('Validation Error Paths', () => {
    it('should return 400 when missing name field', async () => {
      const req = createMockRequest({
        email: 'test@example.com',
        message: 'Hello world',
      });

      const res = await POST(req);
      const data = await res.json();

      expect(res.status).toBe(400);
      expect(data).toEqual({ error: 'Missing required fields' });
    });

    it('should return 400 when missing email field', async () => {
      const req = createMockRequest({
        name: 'John Doe',
        message: 'Hello world',
      });

      const res = await POST(req);
      const data = await res.json();

      expect(res.status).toBe(400);
      expect(data).toEqual({ error: 'Missing required fields' });
    });

    it('should return 400 when missing message field', async () => {
      const req = createMockRequest({
        name: 'John Doe',
        email: 'test@example.com',
      });

      const res = await POST(req);
      const data = await res.json();

      expect(res.status).toBe(400);
      expect(data).toEqual({ error: 'Missing required fields' });
    });

    it('should return 400 when body is empty', async () => {
      const req = createMockRequest({});

      const res = await POST(req);
      const data = await res.json();

      expect(res.status).toBe(400);
      expect(data).toEqual({ error: 'Missing required fields' });
    });
  });

  describe('Happy Path', () => {
    it('should return 200 when all required fields are present', async () => {
      // Setup successful fetch mock
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
      });

      const req = createMockRequest({
        name: 'John Doe',
        email: 'test@example.com',
        message: 'Hello world',
        projectType: 'Web Development',
      });

      const res = await POST(req);
      const data = await res.json();

      expect(res.status).toBe(200);
      expect(data).toEqual({ message: 'Message sent successfully' });
    });
  });
});
