'use client';

export default function ImpactSection() {
  return (
    <section className="section-padding impact-section">
      <div className="container">
        <div className="metrics-showcase-wrapper">
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <div className="badge">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>{' '}
              Measurable Business Impact
            </div>
            <h2>Proven Enterprise Performance Metrics</h2>
            <p className="section-sub" style={{ marginTop: '8px' }}>
              Quantifiable operational outcomes that justify your digital transformation investment in months, not years.
            </p>
          </div>

          <div className="kpi-metrics-grid">
            <div className="kpi-card glass-panel">
              <div className="kpi-header">
                <span className="kpi-title">Inline Enforcement SLA</span>
                <span className="kpi-status-dot"></span>
              </div>
              <div className="kpi-value-wrap">
                <span className="kpi-value" style={{ color: '#22d3ee', textShadow: 'none', background: 'transparent' }}>&lt; 5ms</span>
              </div>
              <div className="kpi-bar-wrap">
                <div className="kpi-bar-fill cyan" style={{ width: '98%' }}></div>
              </div>
              <p className="kpi-desc">Sub-5ms inline SQL query intercept & Zero-Trust blocking</p>
            </div>

            <div className="kpi-card glass-panel">
              <div className="kpi-header">
                <span className="kpi-title">Prediction Accuracy</span>
                <span className="kpi-status-dot"></span>
              </div>
              <div className="kpi-value-wrap">
                <span className="kpi-value" style={{ color: '#14b8a6', textShadow: 'none', background: 'transparent' }}>95.4%</span>
              </div>
              <div className="kpi-bar-wrap">
                <div className="kpi-bar-fill teal" style={{ width: '95.4%' }}></div>
              </div>
              <p className="kpi-desc">LSTM & Random Forest predictive failure accuracy</p>
            </div>

            <div className="kpi-card glass-panel">
              <div className="kpi-header">
                <span className="kpi-title">Audit Visibility</span>
                <span className="kpi-status-dot"></span>
              </div>
              <div className="kpi-value-wrap">
                <span className="kpi-value" style={{ color: '#10b981', textShadow: 'none', background: 'transparent' }}>100%</span>
              </div>
              <div className="kpi-bar-wrap">
                <div className="kpi-bar-fill green" style={{ width: '100%' }}></div>
              </div>
              <p className="kpi-desc">Full tamper-proof audit trails for GDPR & EASA compliance</p>
            </div>

            <div className="kpi-card glass-panel">
              <div className="kpi-header">
                <span className="kpi-title">Downtime Reduction</span>
                <span className="kpi-status-dot"></span>
              </div>
              <div className="kpi-value-wrap">
                <span className="kpi-value" style={{ color: '#a855f7', textShadow: 'none', background: 'transparent' }}>60%</span>
              </div>
              <div className="kpi-bar-wrap">
                <div className="kpi-bar-fill purple" style={{ width: '60%' }}></div>
              </div>
              <p className="kpi-desc">Drop in unplanned industrial equipment failure incidents</p>
            </div>

            <div className="kpi-card glass-panel">
              <div className="kpi-header">
                <span className="kpi-title">AOG Delay Reduction</span>
                <span className="kpi-status-dot"></span>
              </div>
              <div className="kpi-value-wrap">
                <span className="kpi-value" style={{ color: '#3b82f6', textShadow: 'none', background: 'transparent' }}>50%</span>
              </div>
              <div className="kpi-bar-wrap">
                <div className="kpi-bar-fill blue" style={{ width: '50%' }}></div>
              </div>
              <p className="kpi-desc">Reduction in commercial aircraft-on-ground maintenance delays</p>
            </div>

            <div className="kpi-card glass-panel">
              <div className="kpi-header">
                <span className="kpi-title">5-Year Proven ROI</span>
                <span className="kpi-status-dot"></span>
              </div>
              <div className="kpi-value-wrap">
                <span className="kpi-value" style={{ color: '#22d3ee', textShadow: 'none', background: 'transparent' }}>400%</span>
              </div>
              <div className="kpi-bar-wrap">
                <div className="kpi-bar-fill cyan" style={{ width: '85%' }}></div>
              </div>
              <p className="kpi-desc">Verified enterprise return on investment across deployments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
