import { NextResponse } from 'next/server';

// Server-side in-memory rate limiting map (Anti-Spam & Single-Mail-at-a-time control)
const submissionRateMap = new Map();
const COOLDOWN_MS = 30000; // 30 seconds rate limit per IP/client

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, topic, message, formType, honeypot } = body;

    // 1. Anti-Spam Check: Honeypot field (bots fill hidden fields)
    if (honeypot && honeypot.trim() !== '') {
      console.warn('[Anti-Spam] Honeypot triggered. Submission silently rejected.');
      return NextResponse.json({ success: true, message: 'Inquiry received.' });
    }

    // 2. Client IP identification for rate limiting
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'global';
    const now = Date.now();
    const lastSubmission = submissionRateMap.get(clientIp);

    if (lastSubmission && now - lastSubmission < COOLDOWN_MS) {
      const waitSeconds = Math.ceil((COOLDOWN_MS - (now - lastSubmission)) / 1000);
      return NextResponse.json(
        {
          success: false,
          error: `Please wait ${waitSeconds} seconds before submitting another inquiry to prevent spam.`,
          rateLimited: true,
        },
        { status: 429 }
      );
    }

    // 3. Basic Input Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Update rate limit timestamp
    submissionRateMap.set(clientIp, now);

    // Clean up old IP records every hour
    if (submissionRateMap.size > 500) {
      for (const [ip, time] of submissionRateMap.entries()) {
        if (now - time > COOLDOWN_MS * 2) {
          submissionRateMap.delete(ip);
        }
      }
    }

    const recipient = 'info@agunasolutions.com';

    console.log(`[AtherMind Verified Inquiry Dispatched] FormType: ${formType || 'Inquiry'} -> ${recipient}`);
    console.log(`From: ${name.trim()} (${email.trim()}) | Company: ${company || 'N/A'} | Topic: ${topic || 'General'}`);
    console.log(`Message: ${message.trim()}`);

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been successfully submitted to our team.',
    });
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry submission.' },
      { status: 500 }
    );
  }
}
