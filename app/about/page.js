'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedCounter from '../../components/AnimatedCounter';
import MotionCard from '../../components/MotionCard';

export default function AboutPage() {
  const [activeArchTab, setActiveArchTab] = useState(0);

  const stats = [
    { value: 0.8, prefix: '< ', suffix: ' μs', label: 'Kernel Overhead', sub: 'Sub-microsecond eBPF packet interception' },
    { value: 100, prefix: '>', suffix: 'K', label: 'Telemetry Ops/Sec', sub: 'Real-time sensor & query ingest throughput' },
    { value: 99.999, suffix: '%', label: 'Sovereign SLA', sub: 'Guaranteed 24/7 high-availability operations' },
    { value: 14, suffix: ' Days', label: 'Failure Warning', sub: 'Predictive LSTM early anomaly forecast' },
  ];

  const pillars = [
    {
      step: '01',
      badge: 'AIR-GAPPED AUTONOMY',
      title: 'Sovereign Infrastructure Control',
      desc: 'Engineered from first principles with zero external vendor dependencies. AtherMind operates natively across air-gapped data centers, sovereign private clouds, and ruggedized edge nodes with zero telemetry leakage.',
      highlights: ['Air-Gapped & Offline Capable', 'Zero External Phone-Home Links', 'Sovereign Cryptographic Keys'],
    },
    {
      step: '02',
      badge: 'KERNEL-LEVEL SPEED',
      title: 'Deterministic Sub-Millisecond Speed',
      desc: 'Bypasses slow user-space proxies through Linux kernel-level eBPF socket inspection. Enforces sub-5ms inline SQL threat blocking and high-volume IIoT packet filtering with undetectable CPU overhead.',
      highlights: ['Ring-0 Memory-Safe eBPF Probes', '< 0.8 Microsecond Socket Intercept', 'Zero Code Modifications Required'],
    },
    {
      step: '03',
      badge: 'LIVING 3D REPLICAS',
      title: 'Physics-Informed Digital Twins',
      desc: 'Constructs continuous 60fps living 3D digital replicas of critical physical and data assets. Fuses thermal, vibration, and acoustic telemetry with temporal LSTM ensembles to forecast mechanical failures 14 days early.',
      highlights: ['Real-Time Stress & Thermal Heatmaps', 'ATA & ISO Parameter State Machines', 'Multi-Sensor Sensor Fusion Ensembles'],
    },
    {
      step: '04',
      badge: '24/7 NOC/SOC PODS',
      title: 'Human-in-the-Loop SOC/NOC Defense',
      desc: 'Backed by Aguna Solutions accredited Tier-3 security and network analysts. Combines automated AI threat triage with continuous human validation for sub-15 minute mean time to resolution (MTTR).',
      highlights: ['Sub-15m Incident Resolution MTTR', 'Splunk, Sentinel & QRadar Ingestion', '24/7/365 Sovereign Escalation'],
    },
  ];

  const archTabs = [
    {
      id: 'ebpf',
      badge: 'LAYER 01 — KERNEL SPACE PROBING',
      title: 'eBPF Probing & Sub-Microsecond Socket Telemetry',
      summary:
        'AtherMind hooks directly into Linux kernel space via custom eBPF probes. This bypasses user-space proxy latency and intercepts raw socket traffic before it touches application code or database listeners.',
      specs: [
        { label: 'Latency Overhead', val: '< 0.8 microseconds' },
        { label: 'Memory Footprint', val: '14 MB static' },
        { label: 'Kernel Scope', val: 'Socket & FS I/O' },
        { label: 'Isolation Model', val: 'Ring-0 Memory Safe' },
      ],
      features: ['Inline AST Query Parsing', 'Zero-Trust Attribute Access Control', 'Sub-5ms Policy Enforcement', 'Immutable Audit Logs'],
    },
    {
      id: 'neural',
      badge: 'LAYER 02 — NEURAL COGNITIVE ENGINE',
      title: 'Multi-Modal Graph Neural Networks & LSTM Ensembles',
      summary:
        'Combines temporal LSTMs with Graph Convolutional Networks (GCN) to model high-dimensional anomaly topologies across millions of concurrent database queries and industrial sensor streams.',
      specs: [
        { label: 'Inference Speed', val: '250,000 ops/sec' },
        { label: 'False Positive Rate', val: '< 0.001%' },
        { label: 'Learning Mode', val: 'Hybrid LSTM + XGBoost' },
        { label: 'Model Format', val: 'INT8 TensorRT Quantized' },
      ],
      features: ['14-Day Early Mechanical Warning', 'Dynamic Acoustic Anomaly Scoring', 'Thermal Heatmap Extrapolation', 'Zero False Positive Baseline'],
    },
    {
      id: 'remediation',
      badge: 'LAYER 03 — AUTONOMOUS FABRIC',
      title: 'Self-Healing Isolation & Automated Work Order Staging',
      summary:
        'When malicious SQL exfiltration or anomalous SCADA sensor drifts are detected, AtherMind autonomously terminates targeted sessions, isolates compromised nodes, and triggers SAP PM or Maximo work orders in under 12 milliseconds.',
      specs: [
        { label: 'Remediation SLA', val: '< 12 ms end-to-end' },
        { label: 'Execution Mode', val: 'Autonomous session drop' },
        { label: 'Integrity Proof', val: 'Cryptographic Merkle Proof' },
        { label: 'ERP Connectors', val: 'SAP PM, Maximo, AMOS' },
      ],
      features: ['Sub-12ms Session Termination', 'Automated CMMS Work Orders', 'Parts Pre-Staging for Aviation', 'Cryptographic Custody Ledgers'],
    },
    {
      id: 'quantum',
      badge: 'LAYER 04 — QUANTUM MESH',
      title: 'Post-Quantum Sovereign Security Mesh',
      summary:
        'All telemetry datalinks and cross-region digital twin synchronization tunnels rely on NIST-standardized CRYSTALS-Kyber-1024 quantum-resistant key encapsulation for unbreakable long-term data security.',
      specs: [
        { label: 'Key Encapsulation', val: 'Kyber-1024 (NIST FIPS 203)' },
        { label: 'Digital Signatures', val: 'Dilithium-5 (FIPS 204)' },
        { label: 'Handshake Latency', val: '1.2 ms per node' },
        { label: 'Deployment State', val: 'Air-Gapped Sovereign' },
      ],
      features: ['Quantum-Safe Ephemeral Tunnels', 'Hardware Security Module (HSM)', 'Zero Key Exfiltration Risk', 'Cross-Region Datalink Encryption'],
    },
  ];

  const standards = [
    {
      tag: 'DATA PROTECTION',
      title: 'DPDPA 2023 & GDPR',
      desc: 'Dynamic AES-256 PII masking, tokenization, and 1-click statutory audit trail exports.',
      badge: 'Statutory Export',
    },
    {
      tag: 'SECURITY MANAGEMENT',
      title: 'ISO 27001:2022',
      desc: 'Certified enterprise security architecture with end-to-end access governance.',
      badge: 'Certified Control',
    },
    {
      tag: 'AUDIT ASSURANCE',
      title: 'SOC 2 Type II',
      desc: 'Independently audited operational security, availability, and processing integrity.',
      badge: 'Independently Audited',
    },
    {
      tag: 'HEALTHCARE COMPLIANCE',
      title: 'HIPAA Security Rule',
      desc: 'Electronic Protected Health Information (ePHI) redaction and access monitoring.',
      badge: 'ePHI Shielded',
    },
    {
      tag: 'FUTURE-PROOF CIPHER',
      title: 'NIST Post-Quantum FIPS',
      desc: 'Pre-integrated CRYSTALS-Kyber-1024 and Dilithium-5 quantum-resistant algorithms.',
      badge: 'NIST Standards',
    },
    {
      tag: 'AVIATION RELIABILITY',
      title: 'EASA & FAA Part-145',
      desc: 'Continuous airworthiness logging and automated turbofan component inspection.',
      badge: 'Aviation Airworthy',
    },
  ];

  const timelineEvents = [
    {
      year: '2022',
      badge: 'R&D GENESIS',
      title: 'Foundational Kernel Intercept R&D',
      desc: 'Engineered sub-microsecond eBPF inline SQL database interception to eliminate compliance bottlenecks for high-throughput banking and government sector databases.',
    },
    {
      year: '2023',
      badge: 'INTELLIDAM LAUNCH',
      title: 'Zero-Trust Database Governance',
      desc: 'Launched AtherMind IntelliDAM, delivering sub-5ms inline query enforcement and privileged DBA threat mitigation across production SAP and Oracle systems.',
    },
    {
      year: '2024',
      badge: 'METRONIK 3D TWIN',
      title: 'Living 3D Spatial Digital Twin',
      desc: 'Integrated 100K+ SCADA and MQTT sensor streams per second with 3D spatial models to predict robotic manufacturing motor failures 14 days before halt.',
    },
    {
      year: '2025',
      badge: 'AEROPULSE AVIATION',
      title: 'Aerospace Telemetry AI Engine',
      desc: 'Expanded into commercial aviation datalinks, ingesting live ARINC 664 and ACARS flight data to eliminate aircraft-on-ground maintenance delays.',
    },
    {
      year: '2026',
      badge: 'SOVEREIGN AUTONOMY',
      title: 'Cognitive Autonomous Enterprise Platform',
      desc: 'Unified security governance, predictive maintenance, and post-quantum encryption under Aguna Solutions into an uncompromising sovereign stack.',
    },
  ];

  const currentTab = archTabs[activeArchTab];

  return (
    <div style={{ paddingTop: 'clamp(2rem, 4vw, 3.5rem)', paddingBottom: '5rem' }}>
      {/* 1. HERO SECTION (NO PERSON IMAGES — CYBER TELEMETRY VISUAL STAGE) */}
      {/* 1. HERO SECTION (CENTERED & PROMINENT HEADING) */}
      <section className="section-spacing" style={{ paddingTop: '1.75rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-pill badge-pill-blue" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
            <span className="badge-pulse-dot"></span>
            Sovereign AI &amp; Zero-Trust Engineering
          </span>

          <h1 className="text-h1" style={{ marginBottom: '1.5rem', lineHeight: '1.16', letterSpacing: '-0.025em' }}>
            Engineering Sovereign AI &amp; <br />
            <span className="text-blue-gradient">Zero-Trust Resilience</span>
          </h1>

          <p
            className="text-lead"
            style={{
              marginBottom: '2.25rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              maxWidth: '820px',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(1.05rem, 1.6vw, 1.22rem)',
            }}
          >
            AtherMind is the enterprise platform suite engineered by Aguna Solutions. From Linux kernel-space eBPF packet interception to multi-modal neural digital twins, we protect sovereign databases, forecast machinery downtime, and orchestrate round-the-clock defense for mission-critical infrastructure.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link href="/products" className="btn btn-primary btn-lg">
              <span>Explore Platform Suite</span>
              <span className="btn-arrow">→</span>
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              <span>Schedule Architectural Briefing</span>
            </Link>
          </div>

          {/* Fast Trust Indicators */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)' }} />
              <span>Air-Gapped Sovereign Core</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22d3ee' }} />
              <span>Post-Quantum Kyber-1024</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span>Sub-5ms SLA Guarantee</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8dc2ff' }} />
              <span>Zero Telemetry Leakage</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY ARCHITECTURAL METRICS BANNER */}
      <section className="section-spacing" style={{ paddingTop: '1rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              backgroundColor: '#111c30',
              border: '1px solid rgba(85, 164, 255, 0.22)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.15rem, 2.2vw, 1.5rem)',
              boxShadow: 'var(--shadow-md)',
            }}
            className="about-metrics-grid"
          >
            {stats.map((st, sIdx) => (
              <div key={sIdx} style={{ borderLeft: '2px solid var(--brand-blue)', paddingLeft: '1rem' }}>
                <div style={{ fontSize: 'clamp(1.65rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--brand-blue)', lineHeight: 1 }}>
                  <AnimatedCounter end={st.value} prefix={st.prefix || ''} suffix={st.suffix} />
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#ffffff', marginTop: '6px' }}>
                  {st.label}
                </div>
                <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '3px', lineHeight: '1.35' }}>
                  {st.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE PHILOSOPHY & FOUR ENGINEERING TENETS */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-subtle)', paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          <div className="section-header text-center" style={{ marginBottom: '2.75rem' }}>
            <span className="badge-pill badge-pill-blue">
              <span className="badge-pulse-dot"></span>
              Engineering Philosophy
            </span>
            <h2 className="text-h2">
              Four Tenets of <span className="text-blue-gradient">Sovereign Architecture</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Built for aerospace carriers, heavy industry, banking gateways, and government infrastructure where downtime is measured in millions of dollars.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="about-pillars-grid">
            {pillars.map((item) => (
              <div
                key={item.step}
                className="card-enterprise"
                style={{
                  backgroundColor: '#111c30',
                  border: '1px solid rgba(85, 164, 255, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-blue)', letterSpacing: '0.06em' }}>
                    {item.step}
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      color: '#22d3ee',
                      backgroundColor: 'rgba(34, 211, 238, 0.1)',
                      border: '1px solid rgba(34, 211, 238, 0.25)',
                      padding: '3px 9px',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem', flexGrow: 1 }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#cbd5e1' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)' }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE 4-LAYER ARCHITECTURE CONSOLE */}
      <section className="section-spacing" style={{ paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="badge-pill badge-pill-blue">Architectural Breakdown</span>
            <h2 className="text-h2">
              Deep-Stack <span className="text-blue-gradient">Engineering Specification</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Explore how each layer operates in tandem to deliver verifiable safety, cryptographic auditability, and sub-millisecond execution.
            </p>
          </div>

          {/* Layer Selector Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
              marginBottom: '1.75rem',
            }}
            className="about-arch-tabs"
          >
            {archTabs.map((tab, idx) => {
              const isActive = activeArchTab === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveArchTab(idx)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: `1px solid ${isActive ? 'var(--brand-blue)' : 'rgba(85, 164, 255, 0.18)'}`,
                    backgroundColor: isActive ? 'var(--brand-blue)' : '#111c30',
                    color: isActive ? '#070d18' : '#ffffff',
                    fontWeight: 750,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 4px 16px rgba(85, 164, 255, 0.25)' : 'none',
                    textAlign: 'center',
                  }}
                >
                  <span>{tab.badge.split('—')[1] || tab.badge}</span>
                </button>
              );
            })}
          </div>

          {/* Active Layer Details Board */}
          <MotionCard
            className="card-enterprise"
            style={{
              backgroundColor: '#111c30',
              border: '1px solid rgba(85, 164, 255, 0.25)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.75rem, 3vw, 2.75rem)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--brand-blue)', letterSpacing: '0.1em' }}>
                {currentTab.badge}
              </span>
              <span style={{ fontSize: '0.72rem', color: '#22d3ee', fontWeight: 700, backgroundColor: 'rgba(34, 211, 238, 0.12)', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
                VERIFIED ARCHITECTURE
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.65rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem' }}>
              {currentTab.title}
            </h3>

            <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '1.75rem', maxWidth: '900px' }}>
              {currentTab.summary}
            </p>

            {/* 4 Technical Specs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
                marginBottom: '1.75rem',
              }}
              className="about-specs-grid"
            >
              {currentTab.specs.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    backgroundColor: 'rgba(7, 13, 24, 0.8)',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(85, 164, 255, 0.15)',
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>{spec.label}</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-blue)', marginTop: '4px' }}>{spec.val}</div>
                </div>
              ))}
            </div>

            {/* Core Capability Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              {currentTab.features.map((feat, fIdx) => (
                <span
                  key={fIdx}
                  style={{
                    fontSize: '0.76rem',
                    fontWeight: 650,
                    color: '#e2e8f0',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '5px 12px',
                    borderRadius: '6px',
                  }}
                >
                  ✓ {feat}
                </span>
              ))}
            </div>
          </MotionCard>
        </div>
      </section>

      {/* 5. COMPLIANCE, CERTIFICATION & SOVEREIGN STANDARDS */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-subtle)', paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          <div className="section-header text-center" style={{ marginBottom: '2.75rem' }}>
            <span className="badge-pill badge-pill-blue">Statutory Governance</span>
            <h2 className="text-h2">
              Enterprise Trust &amp; <span className="text-blue-gradient">Sovereign Compliance</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Built to meet the highest regulatory standards across defense, civil aviation, banking, and data protection authorities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="about-standards-grid">
            {standards.map((std, idx) => (
              <div
                key={idx}
                className="card-enterprise"
                style={{
                  backgroundColor: '#111c30',
                  border: '1px solid rgba(85, 164, 255, 0.18)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.35rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--brand-blue)', letterSpacing: '0.08em' }}>
                    {std.tag}
                  </span>
                  <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#22d3ee', backgroundColor: 'rgba(34, 211, 238, 0.1)', padding: '2px 7px', borderRadius: '4px' }}>
                    {std.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  {std.title}
                </h3>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: '0' }}>
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EVOLUTION TIMELINE SECTION */}
      <section className="section-spacing" style={{ paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          <div className="section-header text-left" style={{ marginBottom: '2.5rem' }}>
            <span className="badge-pill badge-pill-silver">Historical Trajectory</span>
            <h2 className="text-h2">
              Our Journey in <span className="text-blue-gradient">Deep-Tech R&amp;D</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '680px' }}>
              From initial eBPF socket intercept algorithms to an ecosystem deployed across multi-regional enterprise infrastructure.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '12px',
            }}
            className="about-timeline-grid"
          >
            {timelineEvents.map((evt, eIdx) => (
              <div
                key={eIdx}
                className="card-enterprise"
                style={{
                  backgroundColor: '#111c30',
                  border: '1px solid rgba(85, 164, 255, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--brand-blue)', lineHeight: 1, marginBottom: '6px' }}>
                  {evt.year}
                </div>
                <div style={{ fontSize: '0.64rem', fontWeight: 800, color: '#22d3ee', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  {evt.badge}
                </div>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 750, color: '#ffffff', marginBottom: '8px', lineHeight: '1.3' }}>
                  {evt.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: '0', flexGrow: 1 }}>
                  {evt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AGUNA SOLUTIONS PARENT ECOSYSTEM & CALL TO ACTION */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-subtle)', paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          <div
            className="card-dark"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2.25rem, 4vw, 3.5rem)',
              textAlign: 'center',
              border: '1px solid rgba(85, 164, 255, 0.25)',
              background: 'linear-gradient(135deg, #111c30 0%, #070d18 100%)',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <span className="badge-pill badge-pill-blue" style={{ marginBottom: '1rem' }}>
              AGUNA SOLUTIONS ENTERPRISE BACKING
            </span>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem' }}>
              Partner with Aguna Solutions Deep-Tech Engineering
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto 2rem auto', lineHeight: '1.65' }}>
              Our systems architects conduct tailored proof-of-concept evaluations measuring kernel eBPF overhead, LSTM failure forecasting models, and zero-trust sovereign compliance for your infrastructure.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                <span>Request Benchmark Proof-of-Concept</span>
                <span className="btn-arrow">→</span>
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                <span>Explore 24/7 NOC &amp; SOC Operations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 1024px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .about-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-standards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .about-pillars-grid {
            grid-template-columns: 1fr !important;
          }
          .about-arch-tabs {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-specs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-timeline-grid {
            grid-template-columns: 1fr !important;
          }
          .about-standards-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .about-metrics-grid {
            grid-template-columns: 1fr !important;
          }
          .about-arch-tabs {
            grid-template-columns: 1fr !important;
          }
          .about-specs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
