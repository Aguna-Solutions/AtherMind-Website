'use client';

import { useState } from 'react';
import MotionCard from '../MotionCard';

export default function TechShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: 'build',
      pillar: 'BUILD',
      title: 'High-Scale Software Engineering',
      tagline: 'Modern Cloud Microservices, High-Throughput Web & Mobile Architectures',
      description:
        'We engineer fault-tolerant digital systems with reactive microservices, low-latency APIs, and production Kubernetes clusters built to process millions of concurrent transactions with sub-100ms response times.',
      highlights: [
        'Cloud-Native Microservices (Node.js, Go, Python, Java)',
        'Enterprise Web & Mobile Interfaces (Next.js, React, Flutter)',
        'Event-Driven Distributed Streaming (Kafka, RabbitMQ, Redis)',
        'Automated GitOps CI/CD Pipelines & Infrastructure as Code',
      ],
      metric: '99.999%',
      metricLabel: 'Architecture Availability SLA',
      metricDesc: 'Verified enterprise SLA tested across banking, telecom, and commercial aviation deployments.',
      image: '/assets/software_development_isometric.webp',
      exploreLink: '/services#cloud',
      exploreText: 'Explore BUILD Capabilities',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: 'secure',
      pillar: 'SECURE',
      title: 'Active Cyber Defense & Zero-Trust',
      tagline: 'Sub-5ms Mid-Flight Query Interception & Tamper-Proof Audit Chains',
      description:
        'AtherMind’s inline security engines inspect raw database traffic, enforce attribute-based access control (ABAC) in real-time, and isolate compromised sessions without altering existing client code or impacting production database throughput.',
      highlights: [
        'Real-Time SQL Query Anomaly & Injection Interception',
        'Kernel eBPF Deep Packet Inspection & Access Enforcement',
        'Dynamic Data Masking (DDM) for PII & Financial Records',
        'Cryptographic Non-Repudiation & Immutable Audit Logs',
      ],
      metric: '< 5ms',
      metricLabel: 'Query Interception Latency',
      metricDesc: 'Deterministic inline enforcement verified under 100,000 queries per second stress loads.',
      image: '/assets/cyber.webp',
      exploreLink: '/products#dam',
      exploreText: 'Explore SECURE Capabilities',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      id: 'predict',
      pillar: 'PREDICT',
      title: 'Industrial IOT & Vibration Twins',
      tagline: 'Predictive Maintenance AI & Real-Time Sensor Telemetry Ingestion',
      description:
        'Continuous vibration spectrum decomposition, thermal acoustics, and ARINC-429 avionics bus telemetry ingestion detect mechanical degradation weeks before catastrophic failure occurs.',
      highlights: [
        '14-Day Advance Mechanical Failure Warning Window',
        'Multi-Axis FFT Spectral Vibration & Acoustic Analysis',
        'Living 3D Digital Twin Synchronization for CNC & Jet Turbines',
        'Automated SRE Ticket Dispatch & Maintenance Work Orders',
      ],
      metric: '14 Days',
      metricLabel: 'Advance Failure Warning',
      metricDesc: 'Continuous vibration spectral decomposition across rotating turbomachinery nodes.',
      image: '/assets/iot.webp',
      exploreLink: '/products#pdm',
      exploreText: 'Explore PREDICT Capabilities',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      id: 'operate',
      pillar: 'OPERATE',
      title: '24/7 Sovereign NOC & SOC Operations',
      tagline: 'Human-in-the-Loop Vigilance, Rapid Incident Triage & Carrier-Grade SLAs',
      description:
        'Round-the-clock Security and Network Operations Centers staffed by accredited sovereign analysts. We provide active threat triage, SIEM/SOAR orchestration, and guaranteed sub-15 minute incident MTTR.',
      highlights: [
        'Sub-15 Minute Incident Mean Time to Resolution (MTTR)',
        'Splunk, Microsoft Sentinel & QRadar SIEM/SOAR Ingestion',
        '24/7/365 Continuous Threat Hunting & Sovereign Escalation',
        'Hybrid Multi-Cloud Backbone & SD-WAN Network Management',
      ],
      metric: '< 15m',
      metricLabel: 'Sovereign Incident MTTR',
      metricDesc: 'Guaranteed sovereign SOC escalation and active threat mitigation response time.',
      image: '/assets/soc1.webp',
      exploreLink: '/services#soc',
      exploreText: 'Explore OPERATE Capabilities',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ];

  const current = capabilities[activeTab];

  const handleConsultClick = (e) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section className="section-spacing" style={{ backgroundColor: 'var(--bg-subtle)', paddingBottom: '2.5rem', position: 'relative', zIndex: 2 }} id="capabilities">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
          <span className="badge-pill badge-pill-blue" style={{ fontSize: '0.75rem', padding: '4px 12px', marginBottom: '0.75rem' }}>
            <span className="badge-pulse-dot" style={{ width: '6px', height: '6px' }}></span>
            Core Enterprise Capabilities
          </span>
          <h2 className="text-h2" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', marginBottom: '0.75rem' }}>
            Engineered to <span className="text-blue-gradient">Build, Shield, and Scale</span> Modern Infrastructure
          </h2>
          <p className="section-subtitle" style={{ fontSize: '0.95rem', maxWidth: '720px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            From low-level kernel probes to predictive neural twins and round-the-clock sovereign operations, AtherMind provides the complete foundation for resilient digital enterprises.
          </p>
        </div>

        {/* 4 Pillar Selection Tabs (COMPACT & SLEEK SIZING) */}
        <div
          role="tablist"
          aria-label="Enterprise Capabilities Pillars"
          className="capabilities-tabs-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {capabilities.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                id={"tab-" + item.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={"panel-" + item.id}
                tabIndex={0}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={"capabilities-tab-btn " + (isActive ? "is-active" : "")}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  padding: '9px 13px',
                  borderRadius: '8px',
                  backgroundColor: isActive ? '#111c30' : 'rgba(255, 255, 255, 0.03)',
                  border: "1px solid " + (isActive ? "var(--brand-blue)" : "rgba(85, 164, 255, 0.16)"),
                  boxShadow: isActive ? '0 0 16px rgba(85, 164, 255, 0.25)' : 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  userSelect: 'none',
                  outline: 'none',
                }}
              >
                <div
                  style={{
                    color: isActive ? 'var(--brand-blue)' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ lineHeight: 1.25 }}>
                  <div
                    style={{
                      fontSize: '0.64rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      color: isActive ? 'var(--brand-blue)' : 'var(--text-muted)',
                      textTransform: 'uppercase',
                      transition: 'color 0.2s ease',
                      marginBottom: '1px',
                    }}
                  >
                    {item.pillar}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.title.split(' ')[0]} {item.title.split(' ')[1]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Editorial Card */}
        <MotionCard
          className="card-enterprise"
          style={{
            backgroundColor: '#111c30',
            padding: 'clamp(1.1rem, 2vw, 1.5rem)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(85, 164, 255, 0.25)',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            zIndex: 5,
          }}
        >
          <div
            key={current.id}
            id={"panel-" + current.id}
            role="tabpanel"
            aria-labelledby={"tab-" + current.id}
            className="capability-editorial-grid capability-fade-enter"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.25fr 0.75fr',
              gap: 'clamp(1.25rem, 2.5vw, 2rem)',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-blue)', fontSize: '0.72rem', fontWeight: 800, marginBottom: '0.35rem', letterSpacing: '0.08em' }}>
                <span>PILLAR: {current.pillar}</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.15rem, 1.7vw, 1.4rem)', fontWeight: 800, marginBottom: '0.35rem', color: '#ffffff', lineHeight: 1.25 }}>
                {current.title}
              </h3>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-blue)', marginBottom: '0.7rem' }}>
                {current.tagline}
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1rem' }}>
                {current.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1.25rem' }}>
                {current.highlights.map((point, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--brand-blue)', fontWeight: 800, fontSize: '0.88rem' }}>✓</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons: COMPACT & WORKING */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>
                <a
                  href={current.exploreLink}
                  className="btn btn-primary"
                  id={"btn-explore-" + current.id}
                  style={{
                    padding: '7px 15px',
                    fontSize: '0.78rem',
                    minHeight: '34px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    position: 'relative',
                    zIndex: 10,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: 750,
                  }}
                >
                  <span>{current.exploreText}</span>
                  <span className="btn-arrow" style={{ fontSize: '0.9rem', marginLeft: '2px' }}>→</span>
                </a>

                <a
                  href="#contact"
                  onClick={handleConsultClick}
                  className="btn btn-secondary"
                  id={"btn-consult-" + current.id}
                  style={{
                    padding: '7px 15px',
                    fontSize: '0.78rem',
                    minHeight: '34px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    position: 'relative',
                    zIndex: 10,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: 700,
                  }}
                >
                  <span>Consult Enterprise Engineers</span>
                </a>
              </div>
            </div>

            {/* Capability Visual Showcase Card (Compact Clean Sizing - No Numbers) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '325px',
                  height: '250px',
                  backgroundColor: 'rgba(7, 13, 24, 0.85)',
                  border: '1px solid rgba(85, 164, 255, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 8px 28px rgba(0, 0, 0, 0.5), 0 0 16px rgba(85, 164, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: (current.id === 'secure' || current.id === 'predict') ? 'contain' : 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    padding: current.id === 'secure' ? '10px' : (current.id === 'predict' ? '6px' : '0'),
                    transition: 'transform 0.4s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: (current.id === 'secure' || current.id === 'predict') ? 'none'
                      : 'linear-gradient(to top, rgba(7, 13, 24, 0.45) 0%, transparent 40%, rgba(7, 13, 24, 0.2) 100%)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    padding: '4px 9px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(7, 13, 24, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(85, 164, 255, 0.35)',
                    fontSize: '0.64rem',
                    fontWeight: 750,
                    color: 'var(--brand-blue)',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    zIndex: 2,
                  }}
                >
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)', boxShadow: '0 0 6px var(--brand-blue)' }} />
                  <span>{current.pillar}</span>
                </div>
              </div>
            </div>
          </div>
        </MotionCard>
      </div>

      <style jsx>{`
        .capabilities-tab-btn:hover {
          background-color: rgba(85, 164, 255, 0.12) !important;
          border-color: rgba(85, 164, 255, 0.45) !important;
          transform: translateY(-1.5px);
        }
        .capabilities-tab-btn.is-active {
          background-color: #111c30 !important;
          border-color: var(--brand-blue) !important;
          box-shadow: 0 0 16px rgba(85, 164, 255, 0.25) !important;
        }
        .capability-fade-enter {
          animation: capabilityFadeIn 0.25s ease-out;
        }
        @keyframes capabilityFadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 900px) {
          .capabilities-tabs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .capability-editorial-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .capabilities-tabs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
