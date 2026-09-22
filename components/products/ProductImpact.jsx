'use client';

export default function ProductImpact() {
  const metrics = [
    {
      value: '60%',
      label: 'Downtime Reduction',
      detail: 'Metronik PDM predictive neural networks catch vibration and thermal excursions up to 14 days in advance.',
    },
    {
      value: '50%',
      label: 'AOG Delay Cut',
      detail: 'AeroPulse in-flight ACARS & FOQA telemetry ingest provides ground maintenance pre-arrival triage before landing.',
    },
    {
      value: '< 5ms',
      label: 'Query Intercept Overhead',
      detail: 'IntelliDAM inline AST lexical query evaluation prevents SQL injection with zero pipeline latency degradation.',
    },
    {
      value: '95%+',
      label: 'Forecast Accuracy',
      detail: 'Ensemble AI models correlate multi-sensor acoustic, thermal, and electrical metrics, cutting spurious alarms.',
    },
  ];

  return (
    <section id="impact" className="product-section product-impact-section">
      <div className="product-container">
        <div className="editorial-section-tag scroll-anim-item anim-from-top">
          <span className="tag-number">06</span>
          <span className="tag-divider">/</span>
          <span className="tag-name">IMPACT</span>
        </div>

        <div className="impact-header scroll-anim-item anim-from-left">
          <h2 className="editorial-headline-large">
            Measurable outcomes.
            <br />
            <span className="teal-accent-text">Lasting value.</span>
          </h2>
          <p className="capabilities-subhead">
            Validated return on investment delivered across global manufacturing, aviation, and enterprise database operations.
          </p>
        </div>

        {/* Compact Metrics Cards */}
        <div className="impact-metrics-grid">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="impact-metric-card scroll-anim-item anim-from-bottom"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="impact-metric-top">
                <span className="metric-huge-number">{m.value}</span>
              </div>
              <h3 className="metric-label">{m.label}</h3>
              <div className="metric-divider" />
              <p className="metric-detail">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
