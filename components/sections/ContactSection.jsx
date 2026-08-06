'use client';

import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="cta" id="contact" style={{ paddingTop: '36px', paddingBottom: '36px' }}>
      <div className="container">
        <div className="contact-wrapper" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div className="contact-info-card" style={{ padding: '24px 20px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Aguna Solutions | <span className="gradient-text">AtherMind</span></h3>
            <p style={{ fontSize: '0.85rem', marginBottom: '16px' }}>Connect with our engineering and 24/7 NOC / SOC operations teams.</p>

            <div className="contact-detail-item" style={{ marginBottom: '12px' }}>
              <div>
                <strong>Address</strong>
                <p style={{ fontSize: '0.82rem' }}>Aguna Solutions Pvt. Ltd.<br />7th Floor, Eco Tower, Sector 125, Noida, UP, India</p>
              </div>
            </div>

            <div className="contact-detail-item" style={{ marginBottom: '12px' }}>
              <div>
                <strong>Official Email</strong>
                <p style={{ fontSize: '0.82rem' }}><a href="mailto:info@agunasolutions.com" style={{ color: '#22d3ee', textDecoration: 'none', fontWeight: 700 }}>info@agunasolutions.com</a></p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div>
                <strong>Operations Phone</strong>
                <p style={{ fontSize: '0.82rem' }}><a href="tel:+919871146003">+91 98711 46003</a> • <a href="tel:+917838521294">+91 78385 21294</a></p>
              </div>
            </div>
          </div>

          <div className="contact-form-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '16px 16px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '6px' }} className="gradient-text">
              Have a Service or Product Inquiry?
            </h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '0.8rem', lineHeight: '1.4', maxWidth: '360px', marginBottom: '12px' }}>
              Submit custom project requirements, managed service bookings, or demo requests directly to our team.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 20px',
                borderRadius: '20px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '0.82rem',
              }}
            >
              <span>Go to Inquiry & Booking Form →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
