'use client';

import AnimatedCounter from '../AnimatedCounter';
import MotionCard from '../MotionCard';

export default function ImpactSection() {
  const metrics = [
    {
      counter: <AnimatedCounter end={60} suffix="%" />,
      label: 'Downtime Reduction',
      detail: 'Decrease in unplanned industrial equipment downtime achieved through Metronik predictive vibration telemetry.',
    },
    {
      counter: <AnimatedCounter end={5} prefix="< " suffix=" min" />,
      label: 'Mean Time to Detect (MTTD)',
      detail: 'Rapid identification and isolation of anomalous database query patterns and unauthorized exfiltration spikes.',
    },
    {
      counter: <AnimatedCounter end={99.999} suffix="%" duration={2000} />,
      label: 'Core Infrastructure SLA',
      detail: 'Round-the-clock availability across 24/7 Managed NOC/SOC environments and hybrid multi-cloud backbones.',
    },
    {
      counter: <AnimatedCounter end={3.5} suffix="×" />,
      label: 'Reported 5-Year ROI',
      detail: 'Quantified operational savings in averted maintenance penalties, AOG flight delays, and compliance fines.',
    },
  ];

  return (
    <section className="metrics-strip" id="impact" aria-label="Verified Business Impact" style={{ paddingTop: '2rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        <div style={{ marginBottom: '1.35rem', textAlign: 'center', maxWidth: '680px', margin: '0 auto 1.35rem auto' }}>
          <span className="badge-pill badge-pill-blue">
            <span className="badge-pulse-dot"></span>
            Verified Enterprise Performance
          </span>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.3vw, 1.85rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginTop: '0.35rem' }}>
            Measurable Outcomes for <span className="text-blue-gradient">Mission-Critical Operations</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.5rem', lineHeight: '1.45' }}>
            Proven metrics observed across production deployments in commercial aerospace, manufacturing plants, and banking infrastructure.
          </p>
        </div>

        <div className="metrics-grid" style={{ maxWidth: '980px', margin: '0 auto', gap: '0.85rem' }}>
          {metrics.map((item, idx) => (
            <MotionCard
              key={idx}
              className="metric-item"
              style={{
                backgroundColor: '#111c30',
                border: '1px solid rgba(85, 164, 255, 0.2)',
                borderRadius: '8px',
                padding: '0.85rem 1rem',
              }}
            >
              <div className="metric-num" style={{ fontSize: 'clamp(1.55rem, 2.2vw, 1.85rem)', fontWeight: 800, color: 'var(--brand-blue)', lineHeight: 1.1 }}>
                {item.counter}
              </div>
              <div className="metric-label" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                {item.label}
              </div>
              <p className="metric-desc" style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
                {item.detail}
              </p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
