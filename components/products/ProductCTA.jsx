'use client';

import Link from 'next/link';

export default function ProductCTA() {
  return (
    <section id="contact" className="product-section product-cta-section">
      <div className="product-container">
        <div className="cta-editorial-box scroll-anim-item anim-from-bottom is-visible">
          <div className="cta-ambient-glow" />

          <div className="cta-content-wrapper">
            <span className="cta-eyebrow">READY TO EVOLVE YOUR ENTERPRISE TELEMETRY?</span>

            <h2 className="cta-headline">
              Ready to turn your
              <br />
              data into intelligence?
            </h2>

            <p className="cta-lead">
              Schedule a technical consultation with an AtherMind &amp; Aguna Solutions principal architect 
              or explore a sovereign proof-of-concept for your critical infrastructure.
            </p>

            <div className="cta-actions-group">
              <Link
                href="/contact"
                className="btn-enterprise btn-enterprise-primary"
              >
                <span>Request a Demo</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="btn-enterprise btn-enterprise-ghost"
              >
                <span>Talk to an Expert</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>

            <div className="cta-footer-specs">
              <span>✓ SOC 2 Type II &amp; DPDPA Ready</span>
              <span>✓ Zero Client Code Alterations</span>
              <span>✓ 14-Day Rapid Pilot Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
