'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Slogan */}
          <div>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.05em' }}>
                ATHERMIND
              </span>
            </Link>
            <div className="footer-brand-tagline">CODE · SHIELD · EVOLVE</div>
            <p className="footer-brand-desc">
              An enterprise technology & cybersecurity platform by Aguna Solutions. Powering zero-trust database security, AI digital twins, and autonomous telemetry for mission-critical infrastructure.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '4px 10px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.12)' }}>
                🛡️ ISO 27001
              </span>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '4px 10px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.12)' }}>
                🔒 SOC 2 Ready
              </span>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '4px 10px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.12)' }}>
                ⚡ NIST SP 800-207
              </span>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="footer-col-title">Enterprise Products</h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/products#overview" className="footer-nav-link">
                  AtherMind IntelliDAM
                </Link>
              </li>
              <li>
                <Link href="/products#capabilities" className="footer-nav-link">
                  Metronik PDM Digital Twin
                </Link>
              </li>
              <li>
                <Link href="/products#use-cases" className="footer-nav-link">
                  AeroPulse Aviation AI
                </Link>
              </li>
              <li>
                <Link href="/products" className="footer-nav-link" style={{ color: 'var(--brand-blue)', fontWeight: 600 }}>
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities & Services */}
          <div>
            <h4 className="footer-col-title">Capabilities & Services</h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/services" className="footer-nav-link">
                  24/7 Managed NOC & SOC
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-nav-link">
                  VAPT & Offensive Security
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-nav-link">
                  Cloud Native DevSecOps
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-nav-link">
                  Enterprise AI & RPA
                </Link>
              </li>
              <li>
                <Link href="/clients" className="footer-nav-link">
                  Client Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Contact */}
          <div>
            <h4 className="footer-col-title">Aguna Solutions</h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/about" className="footer-nav-link">
                  About AtherMind
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-nav-link">
                  Talk to an Expert
                </Link>
              </li>
              <li style={{ fontSize: '0.82rem', color: 'var(--text-light-muted)', lineHeight: '1.5', marginTop: '0.5rem' }}>
                7th Floor, Eco Tower, Sector 125, Noida, Uttar Pradesh, India
              </li>
              <li>
                <a href="mailto:info@agunasolutions.com" className="footer-nav-link" style={{ color: 'var(--brand-blue)' }}>
                  info@agunasolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 Aguna Solutions Pvt. Ltd. (AtherMind). All Rights Reserved.
          </div>

          <div className="footer-legal-links">
            <Link href="/contact" className="footer-nav-link">
              Privacy Policy
            </Link>
            <Link href="/contact" className="footer-nav-link">
              Terms of Service
            </Link>
            <Link href="/contact" className="footer-nav-link">
              Security Compliance
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--brand-blue)',
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
