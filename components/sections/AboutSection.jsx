'use client';

import Link from 'next/link';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Our Mission',
      desc: 'Deliver immutable data protection, predictive AI governance, and sub-microsecond threat blocking for enterprise cloud and industrial edge infrastructure.',
      badge: 'RESILIENCE FIRST',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: 'Our Vision',
      desc: 'Empower global enterprises with sovereign, self-healing digital systems that eliminate downtime, prevent data exfiltration, and accelerate digital innovation.',
      badge: 'SOVEREIGN CLOUD',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: 'Core Engineering',
      desc: 'High-throughput eBPF kernel probes, post-quantum encryption, and automated maintenance dispatch across aviation, manufacturing, and banking sectors.',
      badge: 'ZERO COMPROMISE',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-spacing" id="about" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-pill-blue">
            <span className="badge-pulse-dot"></span>
            About Aguna Solutions &amp; AtherMind
          </span>
          <h2 className="text-h2">
            Driving Digital Transformation &amp; <span className="text-blue-gradient">Immutable Resilience</span>
          </h2>
          <p className="section-subtitle">
            Aguna Solutions fuses sovereign AI digital twins, sub-microsecond zero-trust database security, and 24/7 managed NOC/SOC operations into a unified enterprise platform ecosystem.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {pillars.map((item, idx) => (
            <div key={idx} className="card-enterprise" style={{ backgroundColor: '#111c30', border: '1px solid rgba(85, 164, 255, 0.2)' }}>
              <div className="icon-box icon-box-blue">{item.icon}</div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>
                {item.badge}
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 750, marginBottom: '0.75rem', color: '#ffffff' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Center Action Link */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/about" className="btn btn-primary">
            <span>Learn More About Our Team &amp; Philosophy</span>
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
