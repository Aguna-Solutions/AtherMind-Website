'use client';

export default function ProductArchitecture() {
  const layers = [
    {
      step: '01',
      name: 'DATA',
      sub: 'All Feeds & Targets',
      items: ['Human DBAs & Microservices', 'OPC-UA / Modbus PLCs', 'ARINC & ACARS Datalinks', 'Postgres / Oracle / Mongo'],
      accent: '#0F8F8A',
    },
    {
      step: '02',
      name: 'INTELLIGENCE',
      sub: 'Mid-Flight Processing',
      items: ['Inline AST Query Intercept', 'Sub-5ms Policy Blocking', 'LSTM Failure AI Ensemble', 'Dynamic PII Masking'],
      accent: '#075E63',
    },
    {
      step: '03',
      name: 'INSIGHT',
      sub: 'Living Replicas & Audits',
      items: ['Living 3D Digital Twin', 'ATA / ISO Parameter Maps', 'Chain-of-Custody Ledgers', 'Query Threat Topology'],
      accent: '#0F8F8A',
    },
    {
      step: '04',
      name: 'ACTION',
      sub: 'Automated Remediation',
      items: ['Auto SAP PM & Maximo Dispatch', 'AMOS & TRAX Aviation Staging', 'SIEM / Splunk Ingest', 'Passwordless JIT Access'],
      accent: '#075E63',
    },
  ];

  return (
    <section id="architecture" className="product-section product-arch-section">
      <div className="product-container">
        <div className="editorial-section-tag scroll-anim-item anim-from-top">
          <span className="tag-number">07</span>
          <span className="tag-divider">/</span>
          <span className="tag-name">ARCHITECTURE</span>
        </div>

        <div className="arch-header scroll-anim-item anim-from-left">
          <h2 className="editorial-headline-large">
            Enterprise ecosystem integration.
            <br />
            <span className="teal-accent-text">From signal to execution.</span>
          </h2>
          <p className="capabilities-subhead">
            Seamlessly embedded across hybrid infrastructure with zero client-side code modification.
          </p>
        </div>

        <div className="arch-pipeline-container scroll-anim-item anim-from-bottom">
          <div className="arch-flow-grid">
            {layers.map((layer, idx) => (
              <div key={layer.step} className="arch-node-column">
                <div className="arch-node-header">
                  <span className="arch-step-badge">{layer.step}</span>
                  <h3 className="arch-node-name">{layer.name}</h3>
                  <span className="arch-node-sub">{layer.sub}</span>
                </div>

                <div className="arch-node-body">
                  {layer.items.map((item, iIdx) => (
                    <div key={iIdx} className="arch-item-pill">
                      <span className="arch-item-bullet" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {idx < layers.length - 1 && (
                  <div className="arch-connector-line">
                    <span className="arch-connector-arrow">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="arch-footer-banner">
            <div className="arch-banner-item">
              <span className="banner-icon">🛡️</span>
              <span>Zero-Trust Air-Gapped or Sovereign Cloud Deployment</span>
            </div>
            <div className="arch-banner-item">
              <span className="banner-icon">⚡</span>
              <span>Sub-5ms End-to-End Latency Overhead Guaranteed by SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
