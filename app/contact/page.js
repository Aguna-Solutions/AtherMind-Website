'use client';

import { useState } from 'react';
import { sendInquiryToAguna } from '../../lib/inquiryHandler';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: '',
    message: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    const result = await sendInquiryToAguna({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      topic: formData.topic,
      message: formData.message,
      formType: 'Booking & Inquiry',
      honeypot: formData.honeypot,
    });

    setIsSubmitting(false);

    if (result && !result.success) {
      setErrorMsg(result.error || 'Submission failed. Please try again.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="cta" id="contact">
        <div className="container">
          <header className="section-head">
            <h1 className="hero-title">
              <span className="hero-line">Company & Engineering</span>
              <span className="hero-line"><span className="gradient-text">Contact Details.</span></span>
            </h1>
            <p className="hero-sub">
              Get in touch with our engineering and 24/7 NOC / SOC operations teams.
            </p>
          </header>

          <div className="contact-wrapper">
            <div className="contact-info-card">
              <h3>Aguna Solutions | <span className="gradient-text">AtherMind</span></h3>
              <p>Connect with our engineering and 24/7 NOC / SOC operations teams.</p>
              <div className="contact-detail-item" style={{ marginBottom: '12px' }}>
                <div>
                  <strong>Address</strong>
                  <p style={{ fontSize: '0.82rem' }}>Aguna Solutions Pvt. Ltd.<br />7th Floor, Eco Tower, Sector 125, Noida, Uttar Pradesh, India</p>
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

            <div className="contact-form-card">
              <h3>Inquiry & <span className="gradient-text">Booking Form</span></h3>

              {errorMsg && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    color: '#f87171',
                    fontSize: '0.85rem',
                    marginBottom: '16px',
                    fontWeight: 600,
                  }}
                >
                  ⚠️ {errorMsg}
                </div>
              )}

              {submitted ? (
                <div
                  style={{
                    padding: '24px',
                    borderRadius: '16px',
                    background: 'rgba(20, 184, 166, 0.15)',
                    border: '1px solid rgba(20, 184, 166, 0.4)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>✅</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2dd4bf', marginBottom: '8px' }}>
                    Inquiry Submitted Successfully
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                    Thank you, <strong>{formData.name}</strong>! Your booking inquiry for <strong>"{formData.topic}"</strong> has been received. Our engineering team will review your message and respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMsg('');
                      setFormData({ name: '', email: '', company: '', topic: '', message: '', honeypot: '' });
                    }}
                    className="btn btn-outline btn-sm"
                    style={{ marginTop: '16px' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="quote-form" onSubmit={handleSubmit}>
                  {/* Anti-Spam Hidden Honeypot Input */}
                  <input
                    type="text"
                    name="website_url_hp"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }}
                  />

                  <div className="form-row">
                    <div className="form-field">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label>Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your work email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Company / Organization</label>
                      <input
                        type="text"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label>Select Service / Product Booking *</label>
                      <select
                        required
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      >
                        <option value="" disabled hidden>Select a Service or Query Type...</option>
                        <option value="Book Service: 24/7 Managed SOC">Book Service: 24/7 Managed SOC</option>
                        <option value="Book Service: 24/7 Managed NOC">Book Service: 24/7 Managed NOC</option>
                        <option value="Book Service: Web & Mobile App Development">Book Service: Web & Mobile App Development</option>
                        <option value="Book Service: Cloud Native & DevSecOps">Book Service: Cloud Native & DevSecOps</option>
                        <option value="Book Service: VAPT Security Assessment">Book Service: VAPT Security Assessment</option>
                        <option value="Book Product: AtherMind IntelliDAM (Zero-Trust DB)">Book Product: AtherMind IntelliDAM (Zero-Trust DB)</option>
                        <option value="Book Product: Metronik PDM (AI Digital Twin)">Book Product: Metronik PDM (AI Digital Twin)</option>
                        <option value="Book Product: AeroPulse Aviation AI">Book Product: AeroPulse Aviation AI</option>
                        <option value="General Technical Inquiry">General Technical Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-field">
                    <label>Message / Requirements *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your query, technical requirements, or project details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-lg width-full">
                    <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
