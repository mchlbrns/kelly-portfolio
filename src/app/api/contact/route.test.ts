import { describe, it } from 'node:test';
import assert from 'node:assert';
import { POST } from './route';

describe('POST /api/contact', () => {
  it('should return 500 if an error occurs', async () => {
    // We create a mock request object
    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({}),
    });

    // Override the json method to throw an error to trigger the catch block
    req.json = async () => {
      throw new Error('Simulated error');
    };

    // Silence console.error for clean test output
    const originalConsoleError = console.error;
    console.error = () => {};

    try {
      const response = await POST(req);

      assert.strictEqual(response.status, 500);

      const data = await response.json();
      assert.deepStrictEqual(data, { error: 'Internal server error' });
    } finally {
      // Restore console.error
      console.error = originalConsoleError;
    }
  });

  it('should return 400 if required fields are missing', async () => {
    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: 'Test' }), // Missing email and message
    });

    // We need to provide json method since Next.js Request extends standard Request
    // and standard Request reads stream only once.
    req.json = async () => ({ name: 'Test' });

    const response = await POST(req);

    assert.strictEqual(response.status, 400);
    const data = await response.json();
    assert.deepStrictEqual(data, { error: 'Missing required fields' });
  });

  it('should return 200 on success (no external calls made if missing env variables)', async () => {
    // Temporarily unset env variables to avoid real fetch calls
    const originalResendApiKey = process.env.RESEND_API_KEY;
    const originalWebhookUrl = process.env.CONTACT_WEBHOOK_URL;
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_WEBHOOK_URL;

    // Silence console.log for clean test output
    const originalConsoleLog = console.log;
    console.log = () => {};

    try {
      const req = new Request('http://localhost/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test',
          email: 'test@example.com',
          message: 'Hello'
        }),
      });

      req.json = async () => ({
        name: 'Test',
        email: 'test@example.com',
        message: 'Hello'
      });

      const response = await POST(req);

      assert.strictEqual(response.status, 200);
      const data = await response.json();
      assert.deepStrictEqual(data, { message: 'Message sent successfully' });
    } finally {
      // Restore
      if (originalResendApiKey) process.env.RESEND_API_KEY = originalResendApiKey;
      if (originalWebhookUrl) process.env.CONTACT_WEBHOOK_URL = originalWebhookUrl;
      console.log = originalConsoleLog;
    }
  });
});
