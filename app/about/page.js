'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FuturisticLiveMetrics from '../../components/FuturisticLiveMetrics';

export default function AboutPage() {
  const [activeArchTab, setActiveArchTab] = useState(0);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // Re-trigger scroll transition on scrolling up/down
          entry.target.classList.remove('is-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const archTabs = [
    {
      id: 'ebpf',
      badge: 'LAYER 01 — KERNEL INTERCEPT',
      title: 'eBPF Probing & Sub-Microsecond Telemetry',
      icon: '⚡',
      color: '#34d399',
      borderColor: 'rgba(52, 211, 153, 0.4)',
      gradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.15) 0%, rgba(6, 182, 212, 0.05) 100%)',
      summary:
        'AtherMind operates directly within the Linux kernel space using custom eBPF (Extended Berkeley Packet Filter) probes. This eliminates traditional sidecar overhead and intercepts raw socket traffic before it touches application code.',
      specs: [
        { label: 'Latency Impact', val: '< 0.8 microseconds' },
        { label: 'Memory Footprint', val: '14 MB static' },
        { label: 'Coverage', val: 'Kernel socket & FS I/O' },
        { label: 'Isolation', val: 'Ring 0 Memory Safe' },
      ],
      codeSnippet: `// AtherMind eBPF Kernel Probe Definition
SEC("kprobe/sys_enter_write")
int bpf_trace_socket_io(struct pt_regs *ctx) {
    u64 pid_tgid = bpf_get_current_pid_tgid();
    u32 pid = pid_tgid >> 32;
    return ather_inspect_packet_ringbuffer(ctx, pid);
}`,
    },
    {
      id: 'neural',
      badge: 'LAYER 02 — NEURAL ENGINE',
      title: 'Multi-Modal Graph Neural Networks',
      icon: '🧠',
      color: '#22d3ee',
      borderColor: 'rgba(34, 211, 238, 0.4)',
      gradient: 'linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%)',
      summary:
        'Combines temporal LSTMs with Graph Convolutional Networks (GCN) to map high-dimensional relationships across millions of concurrent database queries and IIoT sensor telemetry feeds.',
      specs: [
        { label: 'Inference Throughput', val: '250,000 ops/sec' },
        { label: 'False Positive Rate', val: '< 0.001%' },
        { label: 'Training Paradigm', val: 'Unsupervised + Reinforcement' },
        { label: 'Model Footprint', val: 'Quantized INT8 TensorRT' },
      ],
      codeSnippet: `// Graph Neural Ensemble Vector Evaluator
def evaluate_telemetry_vector(graph_nodes, edge_tensors):
    embeddings = gcn_layer_forward(graph_nodes, edge_tensors)
    anomaly_score = lstm_temporal_decay(embeddings)
    return ather_consensus_gate(anomaly_score)`,
    },
    {
      id: 'remediation',
      badge: 'LAYER 03 — AUTONOMOUS FABRIC',
      title: 'Self-Healing Isolation & Rollback',
      icon: '🛡️',
      color: '#a78bfa',
      borderColor: 'rgba(167, 139, 250, 0.4)',
      gradient: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(236, 72, 153, 0.05) 100%)',
      summary:
        'When malicious SQL injection or anomalous industrial SCADA commands are detected, AtherMind autonomously terminates targeted sessions, isolates compromised containers, and restores database states in under 12 milliseconds.',
      specs: [
        { label: 'Response Time', val: '< 12 ms end-to-end' },
        { label: 'Action Type', val: 'Non-blocking session drop' },
        { label: 'Audit Trail', val: 'Cryptographic Merkle Proof' },
        { label: 'Integration', val: 'SAP, IBM Maximo, ServiceNow' },
      ],
      codeSnippet: `// Autonomous Remediation Action Dispatcher
match incident.threat_level {
    ThreatLevel::Critical => {
        kernel_socket_kill(incident.target_pid);
        trigger_merkle_checkpoint_rollback(incident.db_id);
    }
    ThreatLevel::Warning => throttle_bandwidth(incident.target_pid),
}`,
    },
    {
      id: 'quantum',
      badge: 'LAYER 04 — QUANTUM MESH',
      title: 'Post-Quantum Sovereign Security Mesh',
      icon: '⚛️',
      color: '#f472b6',
      borderColor: 'rgba(244, 114, 182, 0.4)',
      gradient: 'linear-gradient(135deg, rgba(244, 114, 182, 0.15) 0%, rgba(52, 211, 153, 0.05) 100%)',
      summary:
        'All telemetry datalinks and cross-region digital twin synchronization pipelines rely on NIST-standardized CRYSTALS-Kyber-1024 quantum-resistant key encapsulation for unbreakable long-term data security.',
      specs: [
        { label: 'Key Encapsulation', val: 'Kyber-1024 (NIST Round 4)' },
        { label: 'Digital Signatures', val: 'Dilithium-5' },
        { label: 'Handshake Time', val: '1.2 ms per node' },
        { label: 'Sovereignty', val: 'Air-Gapped Ready' },
      ],
      codeSnippet: `// Post-Quantum Handshake Engine
let (pk, sk) = kyber1024::keypair();
let (ciphertext, shared_secret) = kyber1024::encapsulate(&pk);
let decrypted_secret = kyber1024::decapsulate(&ciphertext, &sk);
assert_eq!(shared_secret, decrypted_secret);`,
    },
  ];

  const timelineEvents = [
    {
      year: '2022',
      title: 'Zero-Latency Intercept Core',
      desc: 'Engineered sub-5ms inline SQL database intercept engines to solve compliance bottlenecks for high-throughput banking and government sector databases.',
      tag: 'FOUNDATIONAL R&D',
    },
    {
      year: '2024',
      title: 'Living 3D Digital Twin Matrix',
      desc: 'Launched Metronik PDM, integrating 100K+ SCADA samples/sec with 3D LiDAR models for autonomous industrial equipment failure forecasting.',
      tag: 'SCADA & IIOT',
    },
    {
      year: '2025',
      title: 'AeroPulse Aviation AI Datalinks',
      desc: 'Expanded into aerospace telemetry, parsing live ACARS, EHM, and turbofan diagnostic logs for commercial aircraft fleets.',
      tag: 'AEROSPACE AI',
    },
    {
      year: '2026',
      title: 'Cognitive Autonomous Enterprise Architecture',
      desc: 'Unified security governance, predictive maintenance, and post-quantum encryption into the sovereign AtherMind platform ecosystem.',
      tag: 'ENTERPRISE HORIZON',
    },
  ];

  const currentTab = archTabs[activeArchTab];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      {/* HERO SECTION (2-COLUMN GRID: ANIMATED VISUAL ON LEFT, HEADING ON RIGHT) */}
      <section className="hero hero-subpage scroll-reveal">
        <div className="container">
          <div
            className="hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* LEFT SIDE: ANIMATED CYBER SHIELD ENGINE VISUAL */}
            <div className="hero-visual scroll-reveal">
              <div className="hero-shield-card" id="aboutHeroCard" style={{ margin: '0 auto', maxWidth: '420px' }}>
                <div
                  className="shield-glow-backdrop"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)',
                  }}
                ></div>
                <div className="shield-svg-wrapper">
                  <svg className="shield-svg" viewBox="0 0 340 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="cyberShieldMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.9" />
                        <stop offset="35%" stopColor="#22D3EE" stopOpacity="0.85" />
                        <stop offset="70%" stopColor="#10B981" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="#071A3D" stopOpacity="0.95" />
                      </linearGradient>

                      <linearGradient id="cyberShieldCore" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0A192F" stopOpacity="0.95" />
                        <stop offset="50%" stopColor="#071A3D" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#030C1B" stopOpacity="0.98" />
                      </linearGradient>

                      <linearGradient id="cyberNeonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#67E8F9" stopOpacity="1" />
                        <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#34D399" stopOpacity="1" />
                      </linearGradient>

                      <filter id="cyberShieldDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComponentTransfer>
                          <feFuncA type="linear" slope="0.8" />
                        </feComponentTransfer>
                        <feMerge>
                          <feMergeNode />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>

                      <pattern id="cyberGridPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                        <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="1" />
                      </pattern>
                    </defs>

                    <circle
                      className="shield-ring ring-outer"
                      cx="170"
                      cy="175"
                      r="150"
                      stroke="rgba(34, 211, 238, 0.35)"
                      strokeWidth="1.5"
                      strokeDasharray="10 8"
                    />
                    <circle
                      className="shield-ring ring-inner"
                      cx="170"
                      cy="175"
                      r="128"
                      stroke="rgba(52, 211, 153, 0.45)"
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                    />
                    <circle
                      cx="170"
                      cy="175"
                      r="105"
                      stroke="rgba(167, 139, 250, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />

                    <path
                      d="M170 35 L265 80 V195 C265 268 170 315 170 315 C170 315 75 268 75 195 V80 L170 35 Z"
                      fill="url(#cyberShieldMetal)"
                      stroke="rgba(103, 232, 249, 0.8)"
                      strokeWidth="2.5"
                      filter="url(#cyberShieldDropShadow)"
                    />

                    <path
                      d="M170 52 L250 90 V188 C250 252 170 294 170 294 C170 294 90 252 90 188 V90 L170 52 Z"
                      fill="url(#cyberShieldCore)"
                      stroke="rgba(34, 211, 238, 0.5)"
                      strokeWidth="1.75"
                    />
                    <path
                      d="M170 52 L250 90 V188 C250 252 170 294 170 294 C170 294 90 252 90 188 V90 L170 52 Z"
                      fill="url(#cyberGridPattern)"
                    />

                    <path
                      d="M170 95 L215 125 V170 L170 240 L125 170 V125 L170 95 Z"
                      fill="rgba(6, 182, 212, 0.18)"
                      stroke="url(#cyberNeonGlow)"
                      strokeWidth="2"
                    />

                    <polygon
                      points="170 120 195 140 170 215 145 140"
                      fill="url(#cyberNeonGlow)"
                      opacity="0.85"
                      filter="url(#cyberShieldDropShadow)"
                    />

                    <g className="prod-core-cube">
                      <circle cx="170" cy="35" r="5" fill="#67E8F9" />
                      <circle cx="265" cy="80" r="5" fill="#34D399" />
                      <circle cx="75" cy="80" r="5" fill="#A78BFA" />
                      <circle cx="170" cy="315" r="5" fill="#67E8F9" />
                    </g>

                    <line
                      x1="80"
                      y1="175"
                      x2="260"
                      y2="175"
                      stroke="#22D3EE"
                      strokeWidth="1.75"
                      strokeDasharray="8 4"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: HERO CONTENT & HEADING */}
            <div className="hero-content scroll-reveal" style={{ textAlign: 'left' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 14px',
                  borderRadius: '20px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.35)',
                  color: '#22d3ee',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '16px',
                }}
              >
                <span>⚡</span> ABOUT ATHERMIND PLATFORM
              </div>
              <h1
                className="hero-title"
                style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '16px' }}
              >
                Enterprise AI, Living 3D Digital Twins & Zero-Trust Governance
              </h1>
              <p className="hero-sub" style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)', marginBottom: '24px' }}>
                AtherMind is the flagship enterprise platform suite developed by Aguna Solutions. Engineered for mission-critical IT, cloud, and industrial edge environments, AtherMind unifies Zero-Trust Database Security, Predictive Maintenance, and Aviation Telemetry AI.
              </p>
              <div className="hero-actions" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/products" className="btn btn-primary">
                  <span>Explore Platform Products →</span>
                </Link>
                <a href="https://www.agunasolutions.com/about" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <span>Aguna Solutions Portal ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Enterprise Impact Calculator */}
      <section style={{ paddingTop: '20px', paddingBottom: '30px' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <FuturisticLiveMetrics />
        </div>
      </section>

      {/* NEW STUNNING SECTION 1: INTERACTIVE NEURAL ARCHITECTURE MATRIX */}
      <section className="section scroll-reveal" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div className="section-header scroll-reveal" style={{ marginBottom: '36px', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 14px',
                borderRadius: '20px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                color: '#34d399',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                marginBottom: '12px',
              }}
            >
              <span>🔬</span> DEEP-TECH ENGINEERING FABRIC
            </div>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900 }}>AtherMind Cognitive Architecture</h2>
            <p style={{ fontSize: '0.98rem', opacity: 0.85, marginTop: '8px', maxWidth: '720px', margin: '8px auto 0' }}>
              Explore the four zero-overhead execution layers driving real-time intelligence across kernel probes, neural graphs, and post-quantum encryption.
            </p>
          </div>

          {/* Interactive Arch Tab Navigation */}
          <div
            className="scroll-reveal"
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            {archTabs.map((tab, idx) => {
              const isActive = activeArchTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveArchTab(idx)}
                  className={`arch-tab-btn ${isActive ? 'active' : ''}`}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span style={{ fontSize: '1.05rem' }}>{tab.icon}</span>
                  <span>{tab.badge.split(' — ')[1]}</span>
                  {isActive && (
                    <span
                      className="tab-active-dot"
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: tab.color,
                        boxShadow: `0 0 8px ${tab.color}`,
                        marginLeft: '4px',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Panel */}
          <div
            className="glass-panel arch-panel scroll-reveal"
            style={{
              padding: '36px',
              borderRadius: '24px',
              background: currentTab.gradient,
              border: `1px solid ${currentTab.borderColor}`,
              boxShadow: `0 20px 60px rgba(0, 0, 0, 0.45)`,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: currentTab.color,
                  letterSpacing: '0.1em',
                  marginBottom: '10px',
                }}
              >
                {currentTab.badge}
              </div>
              <h3 className="arch-title" style={{ fontSize: '1.65rem', fontWeight: 900, marginBottom: '14px' }}>
                {currentTab.title}
              </h3>
              <p className="arch-summary" style={{ fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '24px' }}>
                {currentTab.summary}
              </p>

              {/* Specs Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {currentTab.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="arch-spec-card"
                    style={{
                      padding: '12px 14px',
                      borderRadius: '12px',
                    }}
                  >
                    <div className="arch-spec-label" style={{ fontSize: '0.74rem', marginBottom: '4px' }}>{spec.label}</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 800, color: currentTab.color }}>{spec.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code / Logic Terminal Preview */}
            <div
              className="arch-code-box"
              style={{
                borderRadius: '16px',
                padding: '24px',
                border: `1px solid ${currentTab.borderColor}`,
                fontFamily: 'monospace',
                fontSize: '0.82rem',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)',
                overflowX: 'auto',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
                <span style={{ fontSize: '0.75rem', opacity: 0.6, marginLeft: 'auto' }}>ather_kernel_module.rs</span>
              </div>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.6, color: currentTab.color }}>
                {currentTab.codeSnippet}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* NEW STUNNING SECTION 2: ATHERMIND ENGINEERING EVOLUTION TIMELINE */}
      <section className="section scroll-reveal" style={{ paddingTop: '30px', paddingBottom: '60px' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div className="section-header scroll-reveal" style={{ marginBottom: '44px', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 14px',
                borderRadius: '20px',
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.35)',
                color: '#a78bfa',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                marginBottom: '12px',
              }}
            >
              <span>🚀</span> R&D MILESTONES
            </div>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900 }}>The AtherMind Engineering Journey</h2>
            <p style={{ fontSize: '0.98rem', opacity: 0.85, marginTop: '8px' }}>
              From sub-millisecond database security proxies to aviation AI datalinks and cognitive twin models.
            </p>
          </div>

          <div
            className="engineering-timeline-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '20px',
              position: 'relative',
            }}
          >
            {timelineEvents.map((evt, idx) => (
              <div
                key={idx}
                className="principle-card glass-panel timeline-card scroll-reveal"
                style={{
                  padding: '28px 24px',
                  borderRadius: '20px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.8rem',
                        fontWeight: 900,
                        color: '#22d3ee',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {evt.year}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '3px 10px',
                        borderRadius: '12px',
                        background: 'rgba(34, 211, 238, 0.15)',
                        color: '#38bdf8',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                      }}
                    >
                      {evt.tag}
                    </span>
                  </div>
                  <h3 className="timeline-title" style={{ fontSize: '1.18rem', fontWeight: 800, marginBottom: '10px' }}>
                    {evt.title}
                  </h3>
                  <p className="timeline-desc" style={{ fontSize: '0.86rem', lineHeight: 1.6 }}>
                    {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATHERMIND PRODUCT PLATFORM SUITE */}
      <section className="process scroll-reveal" style={{ paddingTop: '10px' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div className="section-header scroll-reveal" style={{ marginBottom: '32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Core Platform Engines</h2>
            <p style={{ fontSize: '0.95rem', opacity: 0.8, marginTop: '6px' }}>
              Three specialized AI & security control planes driving modern enterprise resilience.
            </p>
          </div>

          <div className="principles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Card 1: IntelliDAM */}
            <div className="principle-card glass-panel scroll-reveal" style={{ padding: '28px 24px', borderRadius: '20px', border: '1px solid rgba(16, 185, 129, 0.35)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>
                🛡️
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#34d399', marginBottom: '10px' }}>AtherMind IntelliDAM</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.65', color: 'rgba(255,255,255,0.82)', marginBottom: '16px' }}>
                Zero-Trust Database Activity Monitoring & Governance. Inspects every SQL query in sub-5ms, blocks mid-flight injection attacks, and produces tamper-proof audit trails for GDPR, DPDPA, and HIPAA compliance.
              </p>
              <Link href="/products" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#34d399', textDecoration: 'none' }}>
                Explore IntelliDAM Control Plane →
              </Link>
            </div>

            {/* Card 2: Metronik PDM */}
            <div className="principle-card glass-panel scroll-reveal" style={{ padding: '28px 24px', borderRadius: '20px', border: '1px solid rgba(6, 182, 212, 0.35)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.2)', border: '1px solid rgba(6, 182, 212, 0.4)', color: '#22d3ee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>
                ⚙️
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#22d3ee', marginBottom: '10px' }}>Metronik PDM</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.65', color: 'rgba(255,255,255,0.82)', marginBottom: '16px' }}>
                AI Digital Twin & IIoT Predictive Maintenance. Ingests 100K+ samples/sec from industrial SCADA and 4K LiDAR drones into a living 3D replica, forecasting equipment failure 14 days prior with 95%+ accuracy.
              </p>
              <Link href="/products" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#22d3ee', textDecoration: 'none' }}>
                Explore Metronik PDM Architecture →
              </Link>
            </div>

            {/* Card 3: AeroPulse */}
            <div className="principle-card glass-panel scroll-reveal" style={{ padding: '28px 24px', borderRadius: '20px', border: '1px solid rgba(139, 92, 246, 0.35)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.4)', color: '#a78bfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>
                ✈️
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#a78bfa', marginBottom: '10px' }}>AtherMind AeroPulse</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.65', color: 'rgba(255,255,255,0.82)', marginBottom: '16px' }}>
                Aviation AI & Flight Telemetry Intelligence. Parses ACARS, FOQA, and turbofan EHM datalinks to predict engine decay, cut Aircraft-on-Ground (AOG) delays by 50%, and automate EASA/FAA compliance logs.
              </p>
              <Link href="/products" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a78bfa', textDecoration: 'none' }}>
                Explore AeroPulse Datalink Engine →
              </Link>
            </div>
          </div>

          {/* KEY CORE ENGINEERING PILLARS */}
          <div className="principles-section scroll-reveal" style={{ marginTop: '54px' }}>
            <div className="section-header" style={{ marginBottom: '24px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Engineering Standards</h3>
            </div>
            <div className="principles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div className="principle-card glass-panel scroll-reveal" style={{ padding: '20px 22px', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, marginBottom: '8px' }}>Sub-5ms Inline Intercept</h4>
                <p style={{ fontSize: '0.84rem', opacity: 0.85, lineHeight: 1.5 }}>High-throughput C++ and Rust proxy engines built for zero-latency execution.</p>
              </div>
              <div className="principle-card glass-panel scroll-reveal" style={{ padding: '20px 22px', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, marginBottom: '8px' }}>Multi-Model AI Ensembles</h4>
                <p style={{ fontSize: '0.84rem', opacity: 0.85, lineHeight: 1.5 }}>LSTM, XGBoost, and Graph Neural Networks for real-time anomaly classification.</p>
              </div>
              <div className="principle-card glass-panel scroll-reveal" style={{ padding: '20px 22px', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, marginBottom: '8px' }}>Autonomous ERP Push</h4>
                <p style={{ fontSize: '0.84rem', opacity: 0.85, lineHeight: 1.5 }}>Automated dispatch to SAP PM, IBM Maximo, AMOS, TRAX, and ServiceNow.</p>
              </div>
            </div>
          </div>

          {/* PARENT COMPANY REDIRECTION BANNER (AGUNA SOLUTIONS) */}
          <div className="parent-company-banner scroll-reveal">
            <div className="parent-company-info">
              <h3>To know more about our parent company</h3>
              <p>
                AtherMind is powered by <strong>Aguna Solutions Pvt. Ltd.</strong> — a global leader in AI, DevSecOps, 24/7 Managed NOC/SOC Services, and Cloud Native Digital Transformation. Visit our corporate portal for company history, executive leadership, and enterprise IT services.
              </p>
            </div>
            <a
              href="https://www.agunasolutions.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="parent-company-btn"
            >
              <span>Learn More About Aguna Solutions</span>
              <span>↗</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
