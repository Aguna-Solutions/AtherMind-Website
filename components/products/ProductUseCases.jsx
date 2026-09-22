'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProductUseCases() {
  const [activeTab, setActiveTab] = useState('pdm');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      const mapping = {
        pdm: 'pdm',
        'industry-analytics': 'pdm',
        aero: 'aero',
        dam: 'dam',
        consoles: 'consoles',
        'cctv-anomaly': 'cctv',
        cctv: 'cctv',
        'integrity-platform': 'integrity',
        integrity: 'integrity',
        'document-governance': 'doc_governance',
        doc_governance: 'doc_governance',
        infrastructure: 'infrastructure',
      };
      if (mapping[hash] && productSectors[mapping[hash]]) {
        setActiveTab(mapping[hash]);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);


  const productSectors = {
    pdm: {
      name: 'Manufacturing & Plants',
      productName: 'Metronik PDM (AI Digital Twin)',
      badge: 'INDUSTRIAL AI • ZERO UNPLANNED OUTAGES',
      headline: 'Living 3D digital replicas eliminating factory machinery downtime.',
      story: 'Metronik PDM fuses live IIoT vibration telemetry, thermal sensors, and autonomous drone scans into living 3D digital replicas. When mechanical degradation or bearing anomalies emerge, neural networks warn operators up to 14 days before failure, auto-dispatching work orders into SAP PM and IBM Maximo.',
      image: '/assets/hero_digital_twin_preview.webp',
      metrics: [
        { value: '60%', label: 'Downtime Cut' },
        { value: '14 Days', label: 'Failure Warning' },
        { value: '> 3.5x', label: '5-Year Verified ROI' },
      ],
      standards: 'IEC 62443 / ISO 55000 / OPC-UA & Modbus Bridge',
    },
    aero: {
      name: 'Commercial Aviation',
      productName: 'AtherMind AeroPulse (Flight AI)',
      badge: 'COMMERCIAL AVIATION • FAA & EASA PART-145',
      headline: 'Continuous flight telemetry & autonomous AOG reduction.',
      story: 'AeroPulse ingests high-frequency ACARS packets, FOQA flight sensor records, and turbine acoustic signatures mid-flight. By continuously monitoring turbine temperatures, hydraulic pressures, and avionics bus stability, line maintenance teams receive pre-arrival diagnostic dispatch packs before touchdown.',
      image: '/assets/aeropulse_aviation_preview.webp',
      metrics: [
        { value: '50%', label: 'AOG Delay Cut' },
        { value: '1.5%', label: 'Fuel Saved' },
        { value: '100%', label: 'EASA / FAA Audit' },
      ],
      standards: 'FAA FAR Part 121 / EASA Part-145 / ARINC 664 Tap',
    },
    dam: {
      name: 'Financial & Core Databases',
      productName: 'AtherMind IntelliDAM (Zero-Trust)',
      badge: 'ZERO-TRUST DATABASE FIREWALL • NIST SP 800-207',
      headline: 'Inline SQL query intercept & dynamic PII masking at sub-5ms latency.',
      story: 'Traditional firewalls cannot inspect multi-hop encrypted database streams. AtherMind IntelliDAM acts as a high-throughput, inline zero-trust proxy that decodes, parses, and audits every query in sub-5ms before it hits critical storage engines, preventing injection, unauthorized drops, and privilege escalation.',
      image: '/assets/intellidam_security_preview.webp',
      metrics: [
        { value: '< 5ms', label: 'Query Intercept' },
        { value: '250K', label: 'Queries / Sec' },
        { value: '100%', label: 'Audit Readiness' },
      ],
      standards: 'DPDPA 2023 / SOC 2 Type II / NIST SP 800-207',
    },
    consoles: {
      name: 'SOC & Mission Control',
      productName: 'Real Platform Consoles (Control Plane)',
      badge: '8 LIVE ENTERPRISE CONSOLES • UNIFIED CONTROL',
      headline: 'Unified operational defense, governance & telemetry control plane.',
      story: 'Access live enterprise consoles designed for CISOs, Plant Directors, and COOs. From the Active Defense neural threat topology to the automated DSAR Compliance Center, manage your cyber-physical estate through a unified pane of glass with hardware-root-of-trust authentication.',
      image: '/assets/usecase_soc_consoles.webp',
      metrics: [
        { value: '8', label: 'Live Consoles' },
        { value: '< 1s', label: 'PII Discovery' },
        { value: '99.99%', label: 'Uptime SLA' },
      ],
      standards: 'Hardware-Root-of-Trust / SAML / OIDC RBAC',
    },
    cctv: {
      name: 'Computer Vision & CCTV',
      productName: 'CCTV Anomaly Detection',
      badge: 'SECURITY AI • REAL-TIME EDGE INFERENCE',
      headline: 'Sub-second edge surveillance triage with YOLO v8 object intelligence.',
      story: 'Real-time AI surveillance platform that processes live camera streams at the edge to detect anomalies, intrusions, and behavioural threats with sub-second latency — no human monitoring required for first-pass triage across perimeter zones.',
      image: '/assets/usecase_cctv_anomaly.webp',
      metrics: [
        { value: '98.5%', label: 'Detection Accuracy' },
        { value: '< 200ms', label: 'Edge Latency' },
        { value: '100+', label: 'Concurrent Streams' },
      ],
      standards: 'RTSP / ONVIF Streaming • YOLO v8 Edge • Zero Cloud Egress',
    },
    integrity: {
      name: 'Audit & Provenance',
      productName: 'Athermind Integrity Platform',
      badge: 'DISTRIBUTED LEDGER • TAMPER-PROOF AUDIT',
      headline: 'Cryptographic hash anchoring guaranteeing unbreakable record trust.',
      story: 'AI-powered data integrity and audit trail platform that anchors critical business records to a distributed ledger, guaranteeing tamper-proof provenance, detecting integrity drift, and enabling instant regulatory compliance verification.',
      image: '/assets/usecase_audit_provenance.webp',
      metrics: [
        { value: '100%', label: 'Audit Compliance' },
        { value: '0%', label: 'Tamper Risk' },
        { value: 'Instant', label: 'Merkle Proofs' },
      ],
      standards: 'SHA-256 Merkle Proofs • Permissioned Ledger • SOC 2 / DPDPA',
    },
    doc_governance: {
      name: 'Document Governance',
      productName: 'Document & Workflow Governance',
      badge: 'ENTERPRISE DOCUMENT AI • ZERO-TRUST ABAC',
      headline: 'Intelligent lifecycle management, NLP classification & semantic search.',
      story: 'Enterprise document management with AI-powered NLP classification, zero-trust attribute-based access controls (ABAC), and semantic vector search. Automates ingestion, categorization, and routing while enforcing granular role permissions.',
      image: '/assets/usecase_doc_governance.webp',
      metrics: [
        { value: '70%', label: 'Processing Time Cut' },
        { value: '99.9%', label: 'RBAC Precision' },
        { value: '< 1s', label: 'Vector Search' },
      ],
      standards: 'Zero-Trust ABAC • NLP Classification • ISO 27001 / GDPR',
    },
    infrastructure: {
      name: 'Critical Infrastructure',
      productName: 'AtherMind Industrial Edge',
      badge: 'SMART GRIDS & CIVIC NETWORKS',
      headline: 'Substation and high-speed rail surveillance under extreme loads.',
      story: 'Power grids and transit corridors demand constant surveillance against anomalous electrical surges and structural fatigue. AtherMind unifies field sensors, SCADA PLCs, and air-gapped gateway nodes to maintain continuous asset availability.',
      image: '/assets/usecase_critical_infrastructure.webp',
      metrics: [
        { value: '24/7', label: 'Continuous Telemetry' },
        { value: '100K+', label: 'Events / Sec' },
        { value: 'Zero', label: 'Critical Outages' },
      ],
      standards: 'NERC CIP / IEC 61850 Grid Standards',
    },
  };

  const current = productSectors[activeTab] || productSectors.pdm;

  return (
    <section id="use-cases" className="product-section product-usecases-section">
      <div className="product-container">
        <div className="editorial-section-tag scroll-anim-item anim-from-top is-visible">
          <span className="tag-number">05</span>
          <span className="tag-divider">/</span>
          <span className="tag-name">USE CASES</span>
        </div>

        <div className="usecases-intro scroll-anim-item anim-from-left is-visible">
          <h2 className="editorial-headline-large">
            Built for the world&#39;s
            <br />
            <span className="teal-accent-text">most critical industries.</span>
          </h2>
          <p className="capabilities-subhead">
            Proven in enterprise environments where downtime is unacceptable and security is paramount.
          </p>
        </div>

        {/* Industry Switcher Tabs with smooth scroll */}
        <div className="industry-tab-bar scroll-anim-item anim-from-left is-visible">
          {Object.keys(productSectors).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`industry-tab-btn ${activeTab === key ? 'is-active' : ''}`}
            >
              {productSectors[key].name}
            </button>
          ))}
        </div>

        {/* Decoupled Editorial Story + User Provided Images */}
        <div className="usecase-editorial-grid">
          {/* Text Stage */}
          <div className="usecase-text-stage scroll-anim-item anim-from-left is-visible">
            <span className="usecase-badge">{current.badge}</span>
            <h3 className="usecase-headline">{current.headline}</h3>
            <p className="usecase-story">{current.story}</p>

            <div className="usecase-metrics-row">
              {current.metrics.map((m, mIdx) => (
                <div key={mIdx} className="usecase-stat-unit">
                  <span className="usecase-stat-value">{m.value}</span>
                  <span className="usecase-stat-label">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="usecase-standards-tag">
              <span className="std-dot" />
              <span>{current.standards}</span>
            </div>
          </div>

          {/* Independent Image Stage */}
          <div className="usecase-image-stage scroll-anim-item anim-from-right is-visible">
            <div className="usecase-image-wrapper">
              <Image key={current.image} src={current.image}
                alt={`${current.productName} enterprise operations`}
                width={760}
                height={480}
                className="usecase-photo"
              />
              <div className="usecase-industry-label">
                <span>{current.productName.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
