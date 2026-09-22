'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedCounter from '../../components/AnimatedCounter';

export default function ClientsPage() {
  const [activeClientIndex, setActiveClientIndex] = useState(0);

  const clientShowcases = [
    {
      id: 'star-air',
      name: 'Star Air',
      tag: 'COMMERCIAL AVIATION',
      headlineNormal: 'Eliminating AOG maintenance delays with',
      headlineAccent: 'predictive AI flight telemetry.',
      quote:
        'AtherMind AeroPulse provided our engineering teams real-time predictive insights that slashed aircraft-on-ground delay incidents by over 50% across our fleet.',
      img: '/clients/starAir.webp',
      logo: '/clients/as_starair.png',
    },
    {
      id: 'gnfc',
      name: 'GNFC',
      tag: 'CHEMICALS & FERTILIZERS',
      headlineNormal: 'Zero-Trust Database Governance &',
      headlineAccent: 'SQL Activity Inspection for ERP Infrastructure.',
      quote:
        'IntelliDAM ensured sub-5ms SQL query inspection across our SAP core database, preventing unauthorized data exfiltration with zero performance impact.',
      img: '/clients/GNFC.webp',
      logo: '/clients/as_gnfc.png',
    },
    {
      id: 'musashi',
      name: 'Musashi',
      tag: 'AUTOMOTIVE MANUFACTURING',
      headlineNormal: 'AI Digital Twin & IIoT',
      headlineAccent: 'Predictive Maintenance for High-Precision Manufacturing Lines.',
      quote:
        'Metronik PDM detected motor vibration anomalies 14 days before failure, saving millions in potential assembly line downtime.',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      logo: '/clients/as_musashi.png',
    },
    {
      id: 'npst',
      name: 'NPST',
      tag: 'FINANCIAL TECH & PAYMENTS',
      headlineNormal: '24/7 Managed SOC &',
      headlineAccent: 'Zero-Latency DB Security for High-Volume Digital Payments.',
      quote:
        'Aguna Solutions SOC team provides 24/7 monitoring and threat mitigation, maintaining 99.999% SLA uptime for millions of daily transactions.',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      logo: '/clients/as_npst.png',
    },
    {
      id: 'tynor',
      name: 'Tynor',
      tag: 'HEALTHCARE & MEDICAL DEVICES',
      headlineNormal: 'Smart Cloud Native DevSecOps &',
      headlineAccent: 'Automated Warehouse Telemetry.',
      quote:
        'Our cloud infrastructure scalability and security posture were transformed with automated DevSecOps pipelines and 24/7 NOC monitoring.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      logo: '/clients/as_tynor.png',
    },
    {
      id: 'ntn',
      name: 'NTN',
      tag: 'PRECISION INDUSTRIAL BEARINGS',
      headlineNormal: 'IIoT SCADA Telemetry Ingestion &',
      headlineAccent: 'Real-Time Equipment Health Monitoring.',
      quote:
        'AtherMind IIoT platform ingests 100K+ sensor samples per second, giving our plant managers a live 3D operational twin.',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      logo: '/clients/as_ntn.png',
    },
    {
      id: 'orange',
      name: 'Orange',
      tag: 'GLOBAL TELECOM & CLOUD',
      headlineNormal: 'Multi-Cloud Infrastructure Automation &',
      headlineAccent: 'Managed NOC Services.',
      quote:
        'Aguna Solutions delivered seamless multi-cloud orchestration and round-the-clock incident response across our regional data centers.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      logo: '/clients/as_orange.png',
    },
    {
      id: 'zones',
      name: 'Zones',
      tag: 'ENTERPRISE IT SOLUTIONS',
      headlineNormal: 'VAPT Security Audits &',
      headlineAccent: 'Continuous Cloud Compliance Architecture.',
      quote:
        'The VAPT security audit and continuous threat intelligence from AtherMind allowed us to achieve ISO 27001 certification in record time.',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      logo: '/clients/as_zones.png',
    },
    {
      id: 'marg',
      name: 'Marg on Cloud',
      tag: 'CLOUD SAAS & ERP',
      headlineNormal: 'High-Throughput Web Microservices &',
      headlineAccent: 'Zero-Downtime DB Replication.',
      quote:
        'Our SaaS ERP platform handles peak seasonal loads effortlessly thanks to AtherMind database scaling and microservices architecture.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      logo: '/clients/as_margoncloud.png',
    },
  ];

  const currentClient = clientShowcases[activeClientIndex];
  const nextClientIndex = (activeClientIndex + 1) % clientShowcases.length;
  const nextClient = clientShowcases[nextClientIndex];

  return (
    <div style={{ paddingTop: 'clamp(2rem, 4vw, 3.5rem)', paddingBottom: '5rem' }}>
      {/* 1. HERO HEADER */}
      <section className="section-spacing" style={{ paddingTop: '1rem', paddingBottom: '1.5rem' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
            <span className="badge-pill badge-pill-blue">
              <span className="badge-pulse-dot"></span>
              Enterprise Client Portfolio &amp; Verified Outcomes
            </span>
            <h1 className="text-h1" style={{ marginBottom: '0.75rem' }}>
              Proven Across Mission-Critical <br />
              <span className="text-blue-gradient">Aviation, Industry &amp; Finance</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              AtherMind platforms by Aguna Solutions protect sovereign databases, forecast mechanical downtime, and secure millions of transactions daily for market leaders.
            </p>
          </div>

          {/* 2. COMPACT VERIFIED IMPACT KPI BANNER */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              backgroundColor: '#111c30',
              border: '1px solid rgba(85, 164, 255, 0.2)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1rem, 2vw, 1.25rem)',
              marginBottom: '3rem',
              boxShadow: 'var(--shadow-md)',
            }}
            className="client-kpi-grid"
          >
            <div style={{ borderLeft: '2px solid var(--brand-blue)', paddingLeft: '0.85rem' }}>
              <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--brand-blue)', lineHeight: 1 }}>
                <AnimatedCounter end={60} suffix="%" />
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                Downtime Slashed
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.3' }}>
                Measured in precision manufacturing and aviation fleets.
              </p>
            </div>

            <div style={{ borderLeft: '2px solid var(--brand-blue)', paddingLeft: '0.85rem' }}>
              <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--brand-blue)', lineHeight: 1 }}>
                <AnimatedCounter end={5} prefix="< " suffix=" min" />
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                Mean Time to Detect
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.3' }}>
                Instant threat triage and abnormal telemetry alerts.
              </p>
            </div>

            <div style={{ borderLeft: '2px solid var(--brand-blue)', paddingLeft: '0.85rem' }}>
              <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--brand-blue)', lineHeight: 1 }}>
                <AnimatedCounter end={99.999} suffix="%" duration={2000} />
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                Core Uptime SLA
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.3' }}>
                Continuous 24/7 Managed NOC/SOC operations pods.
              </p>
            </div>

            <div style={{ borderLeft: '2px solid var(--brand-blue)', paddingLeft: '0.85rem' }}>
              <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--brand-blue)', lineHeight: 1 }}>
                <AnimatedCounter end={3.5} prefix="> " suffix="×" />
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                Proven 5-Year ROI
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.3' }}>
                Measured in averted hardware halts and security leaks.
              </p>
            </div>
          </div>

          {/* 3. TRUSTED BY THE BEST SHOWCASE SECTION (MATCHING SCREENSHOT) */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="client-showcase-section-tag">TRUSTED BY THE BEST</div>

            <div className="client-showcase-board">
              <div className="client-showcase-inner">
                {/* Left Column: Client Industry, Headline & Quote */}
                <div className="client-info-col">
                  <span className="client-industry-tag">{currentClient.tag}</span>
                  <h3 className="client-headline">
                    {currentClient.headlineNormal}{' '}
                    <span className="client-headline-accent">{currentClient.headlineAccent}</span>
                  </h3>
                  <p className="client-quote">
                    &ldquo;{currentClient.quote}&rdquo;
                  </p>
                </div>

                {/* Right Column: Visual Stage with Peek Thumbnail & Round Arrow */}
                <div className="client-visual-wrapper">
                  <div className="client-visual-col">
                    <Image
                      src={currentClient.img}
                      alt={currentClient.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 992px) 100vw, 50vw"
                      unoptimized
                      priority
                      className="client-visual-img"
                    />
                  </div>

                  <div
                    className="client-visual-peek"
                    onClick={() => setActiveClientIndex(nextClientIndex)}
                    title={`View ${nextClient.name}`}
                  >
                    <Image
                      src={nextClient.img}
                      alt={nextClient.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="120px"
                      unoptimized
                    />
                  </div>

                  <button
                    type="button"
                    className="client-next-arrow-btn"
                    onClick={() => setActiveClientIndex(nextClientIndex)}
                    aria-label="Next Case Study"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom Interactive Logo Tab Bar with White Logo Containers */}
              <div className="client-logos-tabs-bar">
                {clientShowcases.map((client, idx) => (
                  <button
                    key={client.id}
                    type="button"
                    className={`client-tab-btn ${activeClientIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveClientIndex(idx)}
                  >
                    <div className="client-tab-logo-box">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={78}
                        height={24}
                        style={{ objectFit: 'contain' }}
                        unoptimized
                        className="client-tab-logo"
                      />
                    </div>
                    <span className="client-tab-name">{client.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4. CALL TO ACTION BANNER */}
          <div
            className="card-dark"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 3.5vw, 3rem)',
              textAlign: 'center',
              border: '1px solid rgba(85, 164, 255, 0.25)',
              background: 'linear-gradient(135deg, #111c30 0%, #070d18 100%)',
              maxWidth: '1160px',
              margin: '0 auto',
            }}
          >
            <span className="badge-pill badge-pill-blue" style={{ marginBottom: '0.85rem' }}>
              AGUNA SOLUTIONS ENTERPRISE BACKING
            </span>
            <h3 style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              Schedule a Custom Architectural Benchmark Session
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 1.75rem auto', lineHeight: '1.6' }}>
              Our systems architects conduct tailored proof-of-concept evaluations measuring SQL query intercept overhead, failure forecasting models, and ISO 27001 readiness.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary btn-md">
                <span>Request Benchmark Proof-of-Concept</span>
                <span className="btn-arrow">→</span>
              </Link>
              <Link href="/products" className="btn btn-secondary btn-md">
                <span>Explore Platform Suite</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .client-kpi-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .client-kpi-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
