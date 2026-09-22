'use client';

import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="section-spacing contact-section-root" id="contact">
      <div className="container">
        <div className="card-dark contact-card-wrapper">
          <div className="contact-ambient-glow" />
          
          <div className="contact-section-grid">
            <div className="contact-main-col">
              <span className="badge-pill badge-pill-dark contact-badge">
                START YOUR TRANSFORMATION
              </span>
              
              <h2 className="contact-headline">
                Ready to Secure and Scale Your Enterprise Operations?
              </h2>
              
              <p className="contact-lead">
                Connect directly with our senior systems architects and cybersecurity engineers. Schedule an architecture review, request a live platform demonstration, or explore managed NOC/SOC coverage.
              </p>

              <div className="contact-actions-group">
                <Link href="/contact" className="btn btn-primary btn-lg contact-btn-main">
                  <span>Schedule Consultation &amp; Demo</span>
                  <span className="btn-arrow">→</span>
                </Link>
                <a
                  href="mailto:info@agunasolutions.com"
                  className="btn btn-secondary btn-lg contact-btn-secondary"
                >
                  <span>Email Engineering Team</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Info Box */}
            <div className="contact-info-panel">
              <h3 className="contact-info-title">
                Direct Operations Link
              </h3>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="info-label">
                    Corporate Headquarters
                  </div>
                  <div className="info-val-primary">
                    Aguna Solutions Pvt. Ltd. (AtherMind)
                  </div>
                  <div className="info-val-sub">
                    7th Floor, Eco Tower, Sector 125, Noida, UP, India
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-label">
                    Direct Email
                  </div>
                  <a
                    href="mailto:info@agunasolutions.com"
                    className="info-email-link"
                  >
                    info@agunasolutions.com
                  </a>
                </div>

                <div className="contact-info-item">
                  <div className="info-label">
                    24/7 Operations Desk
                  </div>
                  <div className="info-val-primary">
                    +91 98711 46003 · +91 78385 21294
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section-root {
          background-color: var(--bg-page);
          position: relative;
          width: 100%;
          overflow: hidden;
          padding-top: clamp(2.5rem, 5vw, 5rem);
          padding-bottom: clamp(2.5rem, 5vw, 5rem);
        }

        .contact-card-wrapper {
          border-radius: var(--radius-lg);
          padding: clamp(1.75rem, 4.5vw, 4rem);
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #111c30 0%, #0c1424 100%);
          border: 1px solid rgba(85, 164, 255, 0.22);
          box-shadow: var(--shadow-xl);
        }

        .contact-ambient-glow {
          position: absolute;
          top: -40%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(85, 164, 255, 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .contact-section-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: center;
        }

        .contact-badge {
          margin-bottom: 1.15rem;
        }

        .contact-headline {
          font-size: clamp(1.5rem, 3.2vw + 0.5rem, 2.75rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          line-height: 1.22;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .contact-lead {
          font-size: clamp(0.92rem, 1vw + 0.3rem, 1.05rem);
          color: var(--text-light-muted, #cbd5e1);
          line-height: 1.65;
          margin-bottom: 2rem;
          max-width: 560px;
        }

        .contact-actions-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .contact-btn-secondary {
          background-color: transparent;
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .contact-btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.6);
        }

        .contact-info-panel {
          background-color: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(85, 164, 255, 0.18);
          border-radius: var(--radius-md);
          padding: clamp(1.25rem, 2.5vw, 2rem);
          backdrop-filter: blur(8px);
        }

        .contact-info-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.25rem;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .info-label {
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--brand-blue);
          text-transform: uppercase;
        }

        .info-val-primary {
          font-size: 0.9rem;
          color: #ffffff;
          margin-top: 2px;
          font-weight: 600;
        }

        .info-val-sub {
          font-size: 0.84rem;
          color: var(--text-light-muted, #94a3b8);
          margin-top: 2px;
          line-height: 1.45;
        }

        .info-email-link {
          font-size: 0.92rem;
          color: #22d3ee;
          text-decoration: none;
          font-weight: 700;
          display: inline-block;
          margin-top: 2px;
          transition: color 0.2s ease;
        }

        .info-email-link:hover {
          color: #67e8f9;
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .contact-section-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .contact-section-root {
            padding-top: 1.75rem !important;
            padding-bottom: 2rem !important;
          }

          .contact-card-wrapper {
            padding: 1.5rem 1.15rem !important;
            border-radius: 16px !important;
          }

          .contact-headline {
            font-size: 1.42rem !important;
            line-height: 1.25 !important;
            margin-bottom: 0.85rem !important;
          }

          .contact-lead {
            font-size: 0.88rem !important;
            line-height: 1.55 !important;
            margin-bottom: 1.35rem !important;
          }

          .contact-actions-group {
            flex-direction: column !important;
            width: 100% !important;
            gap: 0.75rem !important;
          }

          .contact-actions-group :global(.btn) {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
            padding: 12px 16px !important;
            font-size: 0.88rem !important;
          }

          .contact-info-panel {
            padding: 1.25rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
