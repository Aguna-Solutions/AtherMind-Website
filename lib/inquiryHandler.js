export async function sendInquiryToAguna({
  name,
  email,
  company = '',
  topic = '',
  message = '',
  formType = 'General Inquiry',
  honeypot = '',
}) {
  const targetEmail = 'info@agunasolutions.com';

  // Client-side anti-spam cooldown check (30 seconds)
  if (typeof window !== 'undefined') {
    const lastTime = localStorage.getItem('athermind_last_sub_time');
    const now = Date.now();
    if (lastTime && now - parseInt(lastTime, 10) < 30000) {
      const waitSec = Math.ceil((30000 - (now - parseInt(lastTime, 10))) / 1000);
      return {
        success: false,
        error: `Please wait ${waitSec} seconds before submitting another inquiry.`,
        rateLimited: true,
      };
    }
  }

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company, topic, message, formType, honeypot }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      return {
        success: false,
        error: data.error || 'Failed to submit inquiry. Please try again.',
        rateLimited: data.rateLimited || false,
      };
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('athermind_last_sub_time', Date.now().toString());
    }

    return {
      success: true,
      message: 'Your inquiry has been successfully submitted to our team.',
    };
  } catch (err) {
    console.error('Inquiry submission error:', err);

    // Fallback: Open mailto directly if API route is unreachable
    const subject = encodeURIComponent(`[AtherMind ${formType}] ${topic || 'Service/Product Request'} - ${name || 'Visitor'}`);
    const bodyContent = `Full Name: ${name || 'N/A'}
Work Email: ${email || 'N/A'}
Company: ${company || 'N/A'}
Topic: ${topic || 'General'}
Form Type: ${formType}

Message / Details:
${message || 'No additional details provided.'}`;

    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }

    return {
      success: true,
      message: 'Your inquiry has been dispatched to our engineering team.',
    };
  }
}
