'use client';

export default function ProductCapabilities() {
  const capabilities = [
    {
      id: '01',
      title: 'Zero-Trust Database Intercept (IntelliDAM)',
      summary: '100% Traffic & SQL Capture with sub-5ms mid-flight query blocking.',
      description: 'Zero-Trust RBAC & ABAC dynamic query enforcement. Passwordless & JIT privileged access with TLS 1.3 & AES-256 air-gapped OT guard for Postgres, MySQL, Oracle, and Mongo.',
      tags: ['Sub-5ms Query Intercept', 'NIST SP 800-207', '10+ Databases Supported'],
    },
    {
      id: '02',
      title: 'Predictive Maintenance Digital Twins (Metronik PDM)',
      summary: 'Living 3D asset replicas predicting equipment failure 14 days before breakdown.',
      description: 'Ingests MQTT, OPC-UA, and autonomous drone feeds. Combines LSTM + XGBoost + CNN AI ensembles to predict machinery failure with 95%+ accuracy and auto-dispatch SAP PM tickets.',
      tags: ['14-Day Advance Warning', '95%+ Accuracy', 'Auto SAP PM / Maximo'],
    },
    {
      id: '03',
      title: 'Commercial Aviation Flight Telemetry (AeroPulse)',
      summary: 'Sub-second flight deck parsing cutting Aircraft-On-Ground delays by 50%.',
      description: 'Direct ingestion of ACARS, CPDLC, and ARINC 664 (AFDX) avionics taps. Computes live turbine EGT decay, hydraulic stability maps, and automated EASA/FAA Part-145 compliance evidence.',
      tags: ['50% AOG Delay Cut', 'ARINC 664 / ACARS Tap', 'EASA / FAA Part-145'],
    },
    {
      id: '04',
      title: 'Real-Time Compliance & PII Masking',
      summary: 'Behavioural AI injection & leak triage with tamper-proof chain-of-custody logs.',
      description: 'Dynamic format-preserving AES-256 encryption masks sensitive PII and financial ledgers mid-stream. 1-click automated exports for DPDPA 2023, SOC 2 Type II, HIPAA, and GDPR.',
      tags: ['DPDPA 2023 & SOC 2', 'Dynamic PII Masking', 'SIEM / Splunk Sync'],
    },
    {
      id: '05',
      title: 'High-Throughput Distributed Architecture',
      summary: 'Processes 250,000+ queries per second with 99.99% operational availability.',
      description: 'Engineered with horizontally auto-scaling clusters, low-latency zero-trust proxies, and sovereign air-gap deployment capabilities across edge nodes and multi-cloud cores.',
      tags: ['250K Queries / Sec', '99.99% Availability SLA', 'Air-Gapped Sovereign'],
    },
  ];

  return (
    <section id="capabilities" className="product-section product-capabilities-section">
      <div className="product-container">
        <div className="capabilities-header scroll-anim-item anim-from-top">
          <div className="editorial-section-tag">
            <span className="tag-number">02</span>
            <span className="tag-divider">/</span>
            <span className="tag-name">CAPABILITIES</span>
          </div>
          <h2 className="capabilities-headline">
            More than data management.
            <br />
            <span className="teal-accent-text">Intelligence at scale.</span>
          </h2>
          <p className="capabilities-subhead">
            Engineered specifically for mission-critical enterprise environments requiring 
            continuous throughput, absolute security, and zero downtime.
          </p>
        </div>

        <div className="capabilities-editorial-list">
          {capabilities.map((item, idx) => (
            <div
              key={item.id}
              className="capability-editorial-row scroll-anim-item anim-from-bottom"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="cap-index-col">
                <span className="cap-number">{item.id}</span>
              </div>

              <div className="cap-main-col">
                <h3 className="cap-title">{item.title}</h3>
                <p className="cap-summary">{item.summary}</p>
                <p className="cap-description">{item.description}</p>

                <div className="cap-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="cap-tag-pill">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="cap-action-col">
                <span className="cap-arrow-link">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
