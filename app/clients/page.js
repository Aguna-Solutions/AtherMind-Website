'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ClientsPage() {
  const [activeClientIndex, setActiveClientIndex] = useState(0);

  const clientShowcases = [
    {
      id: 'star-air',
      name: 'Star Air',
      logo: 'https://www.agunasolutions.com/images/Our%20Customers/as_starair.png',
      tag: 'COMMERCIAL AVIATION',
      headline: 'Eliminating AOG maintenance delays with predictive AI flight telemetry.',
      quote:
        '"AtherMind AeroPulse provided our engineering teams real-time predictive insights that slashed aircraft-on-ground delay incidents by over 50% across our fleet."',
      img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'gnfc',
      name: 'GNFC',
      logo: 'https://www.agunasolutions.com/images/Our%20Customers/as_gnfc.png',
      tag: 'CHEMICALS & FERTILIZERS',
      headline: 'Zero-Trust Database Governance & SQL Activity Inspection for ERP Infrastructure.',
      quote:
        '"IntelliDAM ensured sub-5ms SQL query inspection across our SAP core database, preventing unauthorized data exfiltration with zero performance impact."',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'musashi',
      name: 'Musashi',
      logo: 'https://www.agunasolutions.com/images/Our%20Customers/as_musashi.png',
      tag: 'AUTOMOTIVE MANUFACTURING',
      headline: 'AI Digital Twin & IIoT Predictive Maintenance for High-Precision Manufacturing Lines.',
      quote:
        '"Metronik PDM detected motor vibration anomalies 14 days before failure, saving millions in potential assembly line downtime."',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'npst',
      name: 'NPST',
      logo: 'https://www.agunasolutions.com/images/Our%20Customers/as_npst.png',
      tag: 'FINANCIAL TECH & PAYMENTS',
      headline: '24/7 Managed SOC & Zero-Latency DB Security for High-Volume Digital Payments.',
      quote:
        '"Aguna Solutions SOC team provides 24/7 monitoring and threat mitigation, maintaining 99.999% SLA uptime for millions of daily transactions."',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'tynor',
      name: 'Tynor',
      logo: 'https://www.agunasolutions.com/images/Our%20Customers/as_tynor.png',
      tag: 'HEALTHCARE & MEDICAL DEVICES',
      headline: 'Smart Cloud Native DevSecOps & Automated Warehouse Telemetry.',
      quote:
        '"Our cloud infrastructure scalability and security posture were transformed with automated DevSecOps pipelines and 24/7 NOC monitoring."',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'ntn',
      name: 'NTN',
      logo: 'https://www.agunasolutions.com/images/Our%20Customers/as_ntn.png',
      tag: 'PRECISION INDUSTRIAL BEARINGS',
      headline: 'IIoT SCADA Telemetry Ingestion & Real-Time Equipment Health Monitoring.',
      quote:
        '"AtherMind IIoT platform ingests 100K+ sensor samples per second, giving our plant managers a live 3D operational twin."',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'orange',
      name: 'Orange Business',
      logo: 'https://www.agunasolutions.com/images/Our%20Customers/as_orange.png',
      tag: 'GLOBAL TELECOM & CLOUD',
      headline: 'Multi-Cloud Infrastructure Automation & Managed NOC Services.',
      quote:
        '"Aguna Solutions delivered seamless multi-cloud orchestration and round-the-clock incident response across our regional data centers."',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'zones',
      name: 'Zones',
      logo: 'https://www.agunasolutions.com/images/Our%20Customers/as_zones.png',
      tag: 'ENTERPRISE IT SOLUTIONS',
      headline: 'VAPT Security Audits & Continuous Cloud Compliance Architecture.',
      quote:
        '"The VAPT security audit and continuous threat intelligence from AtherMind allowed us to achieve ISO 27001 certification in record time."',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'marg',
      name: 'Marg on Cloud',
      logo: 'https://www.agunasolutions.com/images/Our%20Customers/as_margoncloud.png',
      tag: 'CLOUD SAAS & ERP',
      headline: 'High-Throughput Web Microservices & Zero-Downtime DB Replication.',
      quote:
        '"Our SaaS ERP platform handles peak seasonal loads effortlessly thanks to AtherMind database scaling and microservices architecture."',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const currentClient = clientShowcases[activeClientIndex];
  const nextClient = clientShowcases[(activeClientIndex + 1) % clientShowcases.length];

  const handleNext = () => {
    setActiveClientIndex((prev) => (prev + 1) % clientShowcases.length);
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [activeClientIndex]);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <section className="hero hero-subpage scroll-reveal">
        <div className="container">
          <header className="section-head">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '12px', marginBottom: '8px' }}>
              <span className="eyebrow"><span className="eyebrow-dot"></span>Sectors & Ecosystem</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-line">
                <span className="hero-word">Industries Empowered by</span>
              </span>
              <span className="hero-line">
                <span className="hero-word gradient-text">Aguna Solutions & AtherMind</span>
              </span>
            </h1>
            <p className="hero-sub">
              Serving mission-critical operations across commercial aviation, manufacturing, energy, mining, and smart infrastructure.
            </p>
          </header>
        </div>
      </section>

      <section className="process scroll-reveal" style={{ paddingTop: '20px' }}>
        <div className="container">
          {/* STATS GRID */}
          <div className="stats-grid glass-panel scroll-reveal" style={{ marginBottom: '40px' }}>
            <div className="stat-card">
              <div className="stat-num gradient-text">60%</div>
              <div className="stat-lbl">Unplanned Downtime Slashed</div>
            </div>
            <div className="stat-card">
              <div className="stat-num gradient-text">&lt; 5 min</div>
              <div className="stat-lbl">Mean Time to Detect (MTTD)</div>
            </div>
            <div className="stat-card">
              <div className="stat-num gradient-text">99.99%</div>
              <div className="stat-lbl">NOC Uptime Commitment</div>
            </div>
            <div className="stat-card">
              <div className="stat-num gradient-text">400%</div>
              <div className="stat-lbl">Proven 5-Year ROI</div>
            </div>
          </div>

          <div className="client-showcase-section-tag scroll-reveal">TRUSTED BY THE BEST</div>

          {/* EXACT HOME PAGE CLIENT SHOWCASE BOARD */}
          <div className="client-showcase-board scroll-reveal">
            <div className="client-showcase-inner">
              <div className="client-info-col">
                <span className="client-industry-tag" id="clientShowcaseTag">
                  {currentClient.tag}
                </span>
                <h3 className="client-headline" id="clientShowcaseHeadline">
                  {currentClient.headline}
                </h3>
                <p className="client-quote" id="clientShowcaseQuote">
                  {currentClient.quote}
                </p>
              </div>

              <div className="client-visual-wrapper">
                <div className="client-visual-col">
                  <Image
                    src={currentClient.img}
                    alt={currentClient.name}
                    width={540}
                    height={380}
                    unoptimized
                    loading="lazy"
                    className="client-visual-img"
                    id="clientShowcaseImg"
                  />
                </div>

                <div className="client-visual-peek" id="clientShowcasePeek">
                  <Image
                    src={nextClient.img}
                    alt={nextClient.name}
                    width={180}
                    height={120}
                    unoptimized
                    loading="lazy"
                    id="clientShowcasePeekImg"
                  />
                </div>

                <button
                  className="client-next-arrow-btn"
                  id="clientNextArrowBtn"
                  aria-label="Next Case Study"
                  onClick={handleNext}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* EXACT HOME PAGE CLIENT LOGOS TABS BAR */}
            <div className="client-logos-tabs-bar">
              {clientShowcases.map((c, idx) => {
                const isActive = activeClientIndex === idx;
                return (
                  <button
                    key={c.id}
                    className={`client-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveClientIndex(idx)}
                  >
                    <Image
                      src={c.logo}
                      alt={c.name}
                      width={120}
                      height={40}
                      unoptimized
                      loading="lazy"
                      className="client-tab-logo"
                    />
                    <span className="client-tab-name">{c.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* COMPACT HIGH-DENSITY GRAPH BOARD */}
          <div className="compact-graph-card glass-panel scroll-reveal" style={{ marginTop: '40px' }}>
            <div className="compact-graph-head">
              <span className="compact-graph-title">⚡ Operational Impact Benchmarks</span>
              <div className="compact-legend">
                <span className="c-leg reactive"><span className="dot"></span> Without NOC</span>
                <span className="c-leg aspl"><span className="dot"></span> With ASPL AI</span>
              </div>
            </div>

            <div className="compact-graph-grid">
              <div className="c-graph-item">
                <div className="c-graph-title-row">
                  <span className="c-graph-name">Downtime Detection Speed</span>
                </div>
                <div className="c-dual-bars-group">
                  <div className="c-single-bar-row">
                    <span className="c-bar-label bad">Without NOC</span>
                    <div className="c-bar-track">
                      <div className="c-bar-fill bad" style={{ width: '25%' }}>
                        <span className="c-bar-txt">Hours / Days</span>
                      </div>
                    </div>
                  </div>
                  <div className="c-single-bar-row">
                    <span className="c-bar-label good">With ASPL</span>
                    <div className="c-bar-track">
                      <div className="c-bar-fill good" style={{ width: '95%' }}>
                        <span className="c-bar-txt">&lt; 5 Mins (95% Faster)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="c-graph-item">
                <div className="c-graph-title-row">
                  <span className="c-graph-name">Incident Resolution MTTR</span>
                </div>
                <div className="c-dual-bars-group">
                  <div className="c-single-bar-row">
                    <span className="c-bar-label bad">Without NOC</span>
                    <div className="c-bar-track">
                      <div className="c-bar-fill bad" style={{ width: '20%' }}>
                        <span className="c-bar-txt">14+ Hours</span>
                      </div>
                    </div>
                  </div>
                  <div className="c-single-bar-row">
                    <span className="c-bar-label good">With ASPL</span>
                    <div className="c-bar-track">
                      <div className="c-bar-fill good" style={{ width: '92%' }}>
                        <span className="c-bar-txt">&lt; 15 Mins (90% MTTR Cut)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="c-graph-item">
                <div className="c-graph-title-row">
                  <span className="c-graph-name">Guaranteed System Uptime</span>
                </div>
                <div className="c-dual-bars-group">
                  <div className="c-single-bar-row">
                    <span className="c-bar-label bad">Without NOC</span>
                    <div className="c-bar-track">
                      <div className="c-bar-fill bad" style={{ width: '40%' }}>
                        <span className="c-bar-txt">Frequent Outages</span>
                      </div>
                    </div>
                  </div>
                  <div className="c-single-bar-row">
                    <span className="c-bar-label good">With ASPL</span>
                    <div className="c-bar-track">
                      <div className="c-bar-fill good" style={{ width: '99%' }}>
                        <span className="c-bar-txt">99.999% Guaranteed SLA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="c-graph-item">
                <div className="c-graph-title-row">
                  <span className="c-graph-name">IT Staff Innovation Focus</span>
                </div>
                <div className="c-dual-bars-group">
                  <div className="c-single-bar-row">
                    <span className="c-bar-label bad">Without NOC</span>
                    <div className="c-bar-track">
                      <div className="c-bar-fill bad" style={{ width: '35%' }}>
                        <span className="c-bar-txt">35% Innovation</span>
                      </div>
                    </div>
                  </div>
                  <div className="c-single-bar-row">
                    <span className="c-bar-label good">With ASPL</span>
                    <div className="c-bar-track">
                      <div className="c-bar-fill good" style={{ width: '92%' }}>
                        <span className="c-bar-txt">92% Focus (4x Boost)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
