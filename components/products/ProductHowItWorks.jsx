'use client';

import { useState } from 'react';

export default function ProductHowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discover & Ingest',
      subtitle: 'Universal Telemetry Capture',
      description: 'Continuous capture of 100% database queries, IIoT sensor telemetry (MQTT, OPC-UA, Modbus), and avionics streams (ACARS, CPDLC) at over 100,000 samples per second.',
      protocols: ['PostgreSQL / Oracle / MySQL', 'OPC-UA & Modbus TCP', 'ACARS & ARINC 664'],
      telemetrySnippet: 'STATUS: INGESTING · Sub-50ms Edge Ingestion Pipeline active',
    },
    {
      num: '02',
      title: 'Digitize & Replicate',
      subtitle: 'Living 3D Spatial Digital Twin',
      description: 'Constructs living 3D digital replicas with real-time thermal, vibration, and stress heatmaps. Establishes ATA and ISO parameter state machines for continuous health scoring.',
      protocols: ['Live 3D Spatial Twin', 'Thermal & Stress Heatmaps', 'ATA / ISO Parameter State'],
      telemetrySnippet: 'STATUS: REPLICATING · Continuous asset health scoring updated at 60fps',
    },
    {
      num: '03',
      title: 'Predict & Enforce',
      subtitle: 'LSTM AI & Inline Query Blocking',
      description: 'AI ensembles (LSTM + XGBoost + CNN) forecast mechanical failure 14 days early with 95%+ accuracy, while IntelliDAM enforces sub-5ms inline SQL query blocking.',
      protocols: ['LSTM + XGBoost + CNN', 'Sub-5ms Query Blocking', 'Zero-Trust RBAC / ABAC'],
      telemetrySnippet: 'STATUS: EVALUATING · 14-day early failure window active (0 false positives)',
    },
    {
      num: '04',
      title: 'Govern & Audit',
      subtitle: 'Chain-of-Custody Compliance',
      description: 'Dynamic AES-256 masking of PII, tamper-proof audit trails, and 1-click statutory compliance export for DPDPA 2023, GDPR, HIPAA, SOC 2, and EASA/FAA Part-145.',
      protocols: ['Tamper-Proof Audit Logs', 'DPDPA & SOC 2 Export', 'EASA / FAA Part-145 Evidence'],
      telemetrySnippet: 'STATUS: COMPLIANT · Splunk & Sentinel SIEM feeds synchronized',
    },
    {
      num: '05',
      title: 'Automated Dispatch',
      subtitle: 'Operational Ticket & Staging Execution',
      description: 'Automatically triggers corrective work orders directly into SAP PM, IBM Maximo, ServiceNow CMMS, and AMOS/TRAX aviation parts staging systems.',
      protocols: ['SAP PM REST API', 'IBM Maximo Gateway', 'AMOS & TRAX Parts Staging'],
      telemetrySnippet: 'STATUS: DISPATCHED · Automated SAP PM ticket #9142 generated',
    },
  ];

  return (
    <section id="how-it-works" className="product-section product-how-section">
      <div className="product-container">
        <div className="editorial-section-tag scroll-anim-item anim-from-top">
          <span className="tag-number">04</span>
          <span className="tag-divider">/</span>
          <span className="tag-name">HOW IT WORKS</span>
        </div>

        <div className="how-header scroll-anim-item anim-from-left">
          <h2 className="editorial-headline-large">
            End-to-end data intelligence.
            <br />
            <span className="teal-accent-text">From edge to execution.</span>
          </h2>
          <p className="capabilities-subhead">
            Experience the 5-stage lifecycle that turns raw operational pulses into 
            mission-critical enterprise advantage.
          </p>
        </div>

        <div className="how-process-grid">
          {/* Step Selector Column */}
          <div className="process-nav-col scroll-anim-item anim-from-left">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`process-nav-item ${isActive ? 'is-active' : ''}`}
                >
                  <div className="process-nav-top">
                    <span className="process-step-num">{step.num}</span>
                    <span className="process-step-name">{step.title}</span>
                  </div>
                  <p className="process-nav-sub">{step.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="process-display-col scroll-anim-item anim-from-right">
            <div className="process-detail-card">
              <div className="process-card-badge">
                <span>PHASE {steps[activeStep].num} · {steps[activeStep].title.toUpperCase()}</span>
                <span className="live-flow-pulse" />
              </div>

              <h3 className="process-card-title">{steps[activeStep].subtitle}</h3>
              <p className="process-card-description">{steps[activeStep].description}</p>

              <div className="process-protocol-box">
                <span className="protocol-heading">PROTOCOLS &amp; CAPABILITIES:</span>
                <div className="protocol-pills">
                  {steps[activeStep].protocols.map((p, pIdx) => (
                    <span key={pIdx} className="protocol-pill">{p}</span>
                  ))}
                </div>
              </div>

              <div className="process-live-telemetry">
                <span className="telemetry-icon">⚡</span>
                <span className="telemetry-text">{steps[activeStep].telemetrySnippet}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
