'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { controlPlaneData } from '../data/productsData';

// Dynamic Imports for Below-the-Fold Sections (Reduces Initial JS Payload & Accelerates LCP)
const TechShowcaseSection = dynamic(() => import('../components/sections/TechShowcaseSection'));
const ImpactSection = dynamic(() => import('../components/sections/ImpactSection'));
const ProductsSection = dynamic(() => import('../components/sections/ProductsSection'));
const ServicesSection = dynamic(() => import('../components/sections/ServicesSection'));
const ClientsSection = dynamic(() => import('../components/sections/ClientsSection'));
const AboutSection = dynamic(() => import('../components/sections/AboutSection'));
const ContactSection = dynamic(() => import('../components/sections/ContactSection'));

export default function Home() {
  const [activeTab, setActiveTab] = useState('dam');
  const [gifSrc, setGifSrc] = useState('/AtherMind_IntelliDAM.gif');
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

  const currentClient = clientShowcases[activeClientIndex] || clientShowcases[0];
  const nextClientIndex = (activeClientIndex + 1) % clientShowcases.length;
  const nextClient = clientShowcases[nextClientIndex];

  useEffect(() => {
    // Restart GIF animation from frame 0 on every page refresh or visit
    setGifSrc(`/AtherMind_IntelliDAM.gif?v=${Date.now()}`);
  }, []);

  const activeData = controlPlaneData[activeTab] || controlPlaneData['dam'];
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('is-done');
        preloader.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    }
    document.body.style.overflow = '';

    if (typeof window !== 'undefined' && window.initAthermind) {
      window.initAthermind();
    }
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className="preloader" id="preloader" aria-hidden="true">
        <div className="preloader-inner">
          <div className="preloader-text">
            <span className="preloader-line" style={{ '--d': '.1s' }}>A</span>
            <span className="preloader-line" style={{ '--d': '.15s' }}>t</span>
            <span className="preloader-line" style={{ '--d': '.2s' }}>h</span>
            <span className="preloader-line" style={{ '--d': '.25s' }}>e</span>
            <span className="preloader-line" style={{ '--d': '.3s' }}>r</span>
            <span className="preloader-line" style={{ '--d': '.35s' }}>M</span>
            <span className="preloader-line" style={{ '--d': '.4s' }}>i</span>
            <span className="preloader-line" style={{ '--d': '.45s' }}>n</span>
            <span className="preloader-line" style={{ '--d': '.5s' }}>d</span>
          </div>
          <div className="preloader-bar"><span className="preloader-bar-fill"></span></div>
        </div>
      </div>

      {/* Custom cursor */}
      <div className="cursor" id="cursor" aria-hidden="true">
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>

      {/* WebGL canvas (background) */}
      <canvas id="bg-canvas" className="bg-canvas" aria-hidden="true"></canvas>
      <div className="bg-ambient-spotlights" aria-hidden="true">
        <div className="bg-spotlight-top"></div>
        <div className="bg-spotlight-mid"></div>
        <div className="bg-spotlight-bottom"></div>
      </div>
      <div className="grid-overlay" aria-hidden="true"></div>
      <div className="noise-overlay" aria-hidden="true"></div>

      <main id="top">
        {/* ==================== 1. HOME SECTION ==================== */}
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-content">
              <br /><br />
              <h1 className="hero-title">
                <span className="hero-line">
                  <span className="hero-word" data-cursor="lg">Architecting</span>{' '}
                  <span className="hero-word" data-cursor="lg">Mission-Critical</span>
                </span>
                <span className="hero-line">
                  <span className="hero-word animated-hero-word">
                    <span id="heroRotatingWord" className="gradient-text">Predictive AI Engines</span>
                  </span>
                </span>
                <span className="hero-line">
                  <span className="hero-word italic">for High-Scale Enterprises.</span>
                </span>
              </h1>

              <p className="hero-sub">
                Transforming complex enterprise challenges into resilient digital solutions with predictive AI, zero-trust security, and 24/7 managed infrastructure.
              </p>
            </div>

            {/* CYBER SHIELD SHOWCASE */}
            <div className="hero-visual">
              <div className="hero-shield-card" id="heroShieldCard">
                <div className="shield-glow-backdrop"></div>
                <div className="shield-svg-wrapper">
                  <svg className="shield-svg" viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="shieldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.65" />
                        <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.75" />
                      </linearGradient>
                      <linearGradient id="shieldGradGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#0d9488" stopOpacity="0.04" />
                      </linearGradient>
                      <filter id="shieldGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    <path className="shield-path-bg" d="M160 20 L270 70 V180 C270 265 160 330 160 330 C160 330 50 265 50 180 V70 L160 20 Z" fill="url(#shieldGradGlow)" stroke="url(#shieldGrad1)" strokeWidth="2.5" filter="url(#shieldGlow)" />
                    <path className="shield-path-inner" d="M160 45 L245 85 V175 C245 240 160 295 160 295 C160 295 75 240 75 175 V85 L160 45 Z" stroke="rgba(203, 213, 225, 0.35)" strokeWidth="1.5" strokeDasharray="5 4" />
                    <circle className="shield-ring ring-outer" cx="160" cy="170" r="75" stroke="rgba(34, 211, 238, 0.35)" strokeWidth="1.5" strokeDasharray="10 6" />
                    <circle className="shield-ring ring-inner" cx="160" cy="170" r="50" stroke="rgba(20, 184, 166, 0.45)" strokeWidth="1.5" />
                    <g className="shield-core-emblem">
                      <path d="M160 130 L190 150 V185 L160 205 L130 185 V150 Z" fill="rgba(13, 148, 136, 0.22)" stroke="#22d3ee" strokeWidth="1.75" />
                      <path d="M148 168 L157 177 L174 160" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <line className="shield-scanline" x1="50" y1="70" x2="270" y2="70" stroke="#67e8f9" strokeWidth="1.5" opacity="0.5" />
                  </svg>
                </div>

                <div className="floating-badge badge-top-right glass-panel">
                  <div className="badge-icon green">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="badge-info">
                    <span className="badge-title">Zero-Trust Shield</span>
                    <span className="badge-status">100% Immutable Active</span>
                  </div>
                </div>

                <div className="floating-badge badge-bottom-left glass-panel">
                  <div className="badge-icon purple">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="badge-info">
                    <span className="badge-title">Predictive AI Engine</span>
                    <span className="badge-status">99.9% Threat Intercept</span>
                  </div>
                </div>

                <div className="floating-badge badge-center-right glass-panel">
                  <div className="badge-icon cyan">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="badge-info">
                    <span className="badge-title">24/7 SOC Telemetry</span>
                    <span className="badge-status">0.4ms Latency SLA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tech Preview Showcase */}
        <TechShowcaseSection />

        {/* Impact & Operating Philosophy Section */}
        <ImpactSection />

        {/* ==================== 2. PRODUCTS SECTION (HEROIC TELEMETRY SHOWCASE) ==================== */}
        <ProductsSection activeTab={activeTab} setActiveTab={setActiveTab} activeData={activeData} />

        {/* ==================== 3. SERVICES SECTION ==================== */}
        <ServicesSection />

        {/* ==================== 4. CLIENTS SECTION ==================== */}
        <ClientsSection
          currentClient={currentClient}
          nextClient={nextClient}
          clientShowcases={clientShowcases}
          activeClientIndex={activeClientIndex}
          setActiveClientIndex={setActiveClientIndex}
          nextClientIndex={nextClientIndex}
        />

        {/* ==================== 5. ABOUT SECTION ==================== */}
        <AboutSection />

        {/* ==================== 6. CONTACT SECTION (COMPACT CTA) ==================== */}
        <ContactSection />
      </main>

      {/* Toast Container */}
      <div className="toast-container" id="toastContainer"></div>
    </>
  );
}
