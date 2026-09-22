import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // 4. Resolve Target Recipient Email
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'info@agunasolutions.com';
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanCompany = company ? company.trim() : 'Not specified';
    const cleanTopic = topic ? topic.trim() : 'General Technical Inquiry';
    const cleanMessage = message.trim();
    const cleanFormType = formType || 'Booking & Inquiry';

    // 5. Send Real Email via SMTP if credentials exist
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        const subjectLine = `[AtherMind Website] New ${cleanFormType} from ${cleanName} (${cleanCompany})`;

        const htmlBody = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b1120; color: #f8fafc; margin: 0; padding: 24px; }
              .card { max-width: 600px; margin: 0 auto; background-color: #111c30; border-radius: 12px; border: 1px solid rgba(85, 164, 255, 0.25); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
              .header { background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%); padding: 24px; text-align: left; }
              .header h2 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; }
              .header p { margin: 4px 0 0 0; color: #bfdbfe; font-size: 13px; }
              .content { padding: 28px 24px; }
              .row { margin-bottom: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 12px; }
              .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #55a4ff; margin-bottom: 4px; }
              .value { font-size: 15px; color: #ffffff; font-weight: 500; }
              .value a { color: #22d3ee; text-decoration: none; }
              .message-box { background-color: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 16px; margin-top: 20px; }
              .message-text { font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; margin: 0; }
              .footer { padding: 16px 24px; background-color: #070d18; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid rgba(255,255,255,0.06); }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h2>AtherMind Enterprise Inquiry</h2>
                <p>Submitted via Website Contact & Booking Form</p>
              </div>
              <div class="content">
                <div class="row">
                  <div class="label">Full Name</div>
                  <div class="value">${cleanName}</div>
                </div>
                <div class="row">
                  <div class="label">Work Email</div>
                  <div class="value"><a href="mailto:${cleanEmail}">${cleanEmail}</a></div>
                </div>
                <div class="row">
                  <div class="label">Company / Organization</div>
                  <div class="value">${cleanCompany}</div>
                </div>
                <div class="row">
                  <div class="label">Inquiry Focus / Selected Service</div>
                  <div class="value">${cleanTopic}</div>
                </div>
                <div class="message-box">
                  <div class="label">Project Requirements & Scope</div>
                  <p class="message-text">${cleanMessage}</p>
                </div>
              </div>
              <div class="footer">
                AtherMind by Aguna Solutions Pvt. Ltd. • Client IP: ${clientIp}
              </div>
            </div>
          </body>
          </html>
        `;

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"AtherMind Portal" <${smtpUser}>`,
          to: recipient,
          replyTo: cleanEmail,
          subject: subjectLine,
          text: `New Inquiry from ${cleanName} (${cleanEmail})\nCompany: ${cleanCompany}\nFocus: ${cleanTopic}\n\nMessage:\n${cleanMessage}`,
          html: htmlBody,
        });

        console.log(`[AtherMind Email Sent] Successfully dispatched email to ${recipient}`);
      } catch (mailError) {
        console.error('[AtherMind Email Delivery Error]:', mailError);
        return NextResponse.json({ success: false, error: mailError.message || 'Email delivery failed.' }, { status: 500 });
      }
    } else {
      console.warn(
        `[AtherMind Simulation] SMTP credentials not set in environment variables. ` +
        `To deliver real emails to ${recipient}, add your SMTP credentials to .env.local`
      );
      console.log(`[Inquiry Logged] From: ${cleanName} (${cleanEmail}) | Company: ${cleanCompany} | Topic: ${cleanTopic}`);
      console.log(`Message: ${cleanMessage}`);
    }

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
