'use client';

import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="process" id="about" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="container">
        <header className="section-head text-center" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '6px 20px', borderRadius: '30px', background: 'rgba(20, 184, 166, 0.12)', border: '1px solid rgba(20, 184, 166, 0.35)', color: '#14b8a6', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', boxShadow: '0 0 20px rgba(20, 184, 166, 0.2)' }}>
            <span className="live-pulse-dot" style={{ width: '8px', height: '8px', background: '#14b8a6' }}></span>
            🛡️ ABOUT AGUNA SOLUTIONS & ATHERMIND
          </div>
          <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Driving Digital Transformation & <br />
            <span className="gradient-text">Immutable Cyber Resilience</span>
          </h2>
          <p className="section-sub" style={{ fontSize: '1.05rem', maxWidth: '780px', margin: '0 auto', lineHeight: 1.6 }}>
            Aguna Solutions fuses sovereign AI digital twins, sub-microsecond zero-trust database security, and 24/7 managed NOC/SOC operations into a unified enterprise platform ecosystem.
          </p>
        </header>

        <div className="mission-vision-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          <div className="mv-card glass-panel" style={{ padding: '32px 24px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            <div className="mv-icon" style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'rgba(20, 184, 166, 0.15)', border: '1px solid rgba(20, 184, 166, 0.35)', color: '#14b8a6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '12px' }}>Our Mission</h3>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>
              Deliver immutable data protection, predictive AI governance, and sub-microsecond threat blocking for enterprise cloud and industrial edge infrastructure.
            </p>
          </div>

          <div className="mv-card glass-panel" style={{ padding: '32px 24px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            <div className="mv-icon" style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.35)', color: '#06b6d4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '12px' }}>Our Vision</h3>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>
              Empower global enterprises with sovereign, self-healing digital systems that eliminate downtime, prevent data exfiltration, and accelerate digital innovation.
            </p>
          </div>

          <div className="mv-card glass-panel" style={{ padding: '32px 24px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            <div className="mv-icon" style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.35)', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '12px' }}>Core Engineering</h3>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>
              High-throughput eBPF kernel probes, post-quantum encryption, and automated maintenance dispatch across aviation, manufacturing, and banking sectors.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link
            href="/about"
            className="btn btn-primary btn-lg"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: '0.95rem',
              boxShadow: '0 10px 30px rgba(20, 184, 166, 0.25)',
            }}
          >
            <span>Know More About AtherMind</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
