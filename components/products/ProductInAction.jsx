'use client';

import Image from 'next/image';

export default function ProductInAction() {
  return (
    <section id="intelligence" className="product-section product-inaction-section">
      <div className="product-container">
        <div className="editorial-section-tag scroll-anim-item anim-from-top">
          <span className="tag-number">03</span>
          <span className="tag-divider">/</span>
          <span className="tag-name">INTELLIGENCE</span>
        </div>

        <div className="product-editorial-two-col reverse-col">
          {/* Visual Side: Realistic Interface Console */}
          <div className="editorial-media-col scroll-anim-item anim-from-left">
            <div className="action-visual-container">
              <div className="action-img-frame">
                <Image
                  src="/platform/active_defense.webp"
                  alt="AtherMind Active Defense Console Neural Net View"
                  width={720}
                  height={440}
                  className="editorial-showcase-img"
                />
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="editorial-text-col scroll-anim-item anim-from-right">
            <h2 className="editorial-headline-large">
              From data
              <br />
              <span className="teal-accent-text">to decisions.</span>
            </h2>
            <div className="editorial-divider-line" />
            <p className="editorial-body-lead">
              Raw telemetry must translate into proactive operational protection. IntelliDAM evaluates 
              every database transaction and equipment telemetry packet in real-time.
            </p>
            <p className="editorial-body-secondary">
              By intercepting unauthorized queries mid-flight, dynamically redacting sensitive customer 
              fields, and executing automated remediation workflows before critical storage engines or 
              industrial turbines fail, AtherMind turns dormant data into decisive action.
            </p>

            <div className="inaction-highlights">
              <div className="highlight-row">
                <span className="highlight-icon">01</span>
                <div>
                  <h4 className="highlight-title">Mid-Flight AST Lexical Intercept</h4>
                  <p className="highlight-desc">Sub-5ms inline query parsing prevents malicious SQL injection and privilege escalation.</p>
                </div>
              </div>
              <div className="highlight-row">
                <span className="highlight-icon">02</span>
                <div>
                  <h4 className="highlight-title">Dynamic Format-Preserving PII Masking</h4>
                  <p className="highlight-desc">Masks sensitive records on egress without requiring any application code changes.</p>
                </div>
              </div>
              <div className="highlight-row">
                <span className="highlight-icon">03</span>
                <div>
                  <h4 className="highlight-title">Cryptographic Audit Chain-of-Custody</h4>
                  <p className="highlight-desc">Immutable ledgers satisfy ISO 27001, SOC 2, and DPDOA statutory forensic audits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
