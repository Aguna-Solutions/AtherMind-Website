'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveTelemetryConsole from '../../components/InteractiveTelemetryConsole';
import { controlPlaneData } from '../../data/productsData';
import { sendInquiryToAguna } from '../../lib/inquiryHandler';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('dam');
  const [gifSrc, setGifSrc] = useState('/AtherMind_IntelliDAM.gif');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);

  const platformScreenshots = [
    {
      id: 'active-defense',
      title: 'Active Defense Console',
      icon: '🛡️',
      tag: 'THREAT MITIGATION ENGINE',
      img: '/platform/active_defense.webp',
      headline: 'Real-Time SQL Threat Neural Net & Behavioral Topology',
      description:
        'Industrial-grade threat mitigation console featuring active neural net monitoring for DROP TABLE, TRUNCATE, and tautology SQL injection prevention with inline egress DLP safety.',
      highlights: [
        'Sub-5ms inline SQL query intercept',
        'Tautology 1=1 & chained drop containment',
        'Behavioral topology anomaly tracking',
        'PII egress safety simulation & enforcement',
      ],
    },
    {
      id: 'compliance-center',
      title: 'Compliance Center',
      icon: '📋',
      tag: 'FRAMEWORK POSTURE & AUDITING',
      img: '/platform/compliance_center.webp',
      headline: 'Grade A Security Posture & PCI Response Masking',
      description:
        'Regulatory monitoring suite supporting GDPR, DPDP Act, PCI-DSS, SOC 2, HIPAA, and NIST CSF with zero regulatory debt and automated audit manifest generation.',
      highlights: [
        '100% Grade A security posture score',
        '14.29% to 100% PCI-facing response masking',
        'Real-time forensic evidence logging',
        'Automated audit manifest export',
      ],
    },
    {
      id: 'dsar-manager',
      title: 'DSAR Manager',
      icon: '🔍',
      tag: 'DATA SUBJECT ACCESS REQUESTS',
      img: '/platform/dsar_manager.webp',
      headline: 'Sub-Second PII Discovery Search & Request Workflow',
      description:
        'Unified Data Subject Access Request management engine enabling instant PII discovery search across distributed databases, right to erasure, and DPDP compliance.',
      highlights: [
        'Multi-database PII discovery search',
        'Right to Erasure & Rectification tracking',
        'Automated SLA deadline countdowns',
        'Cross-jurisdiction GDPR & CCPA support',
      ],
    },
    {
      id: 'identity-intelligence',
      title: 'Identity Intelligence',
      icon: '🔑',
      tag: 'ACCOUNT & PRIVILEGE GRAPH',
      img: '/platform/identity_intelligence.webp',
      headline: 'Identity Resolution & Segregation of Duties',
      description:
        'Resolves human users behind shared service accounts, tracking MFA coverage, active sessions, and anomaly detection with strict admin privilege segregation.',
      highlights: [
        'Human vs. Service Account resolution',
        'MFA coverage & anomaly mapping',
        'Strict Segregation of Duties (SoD)',
        'CSV / PDF identity registry export',
      ],
    },
    {
      id: 'risk-exposure',
      title: 'Risk Exposure',
      icon: '⚠️',
      tag: 'DATA EXPOSURE SURFACE',
      img: '/platform/risk_exposure.webp',
      headline: 'Zombie Sensitive Tables & Unscanned DB Surface',
      description:
        'Identifies high-risk database profiles, unprotected sensitive tables missing blocking policies, and dormant zombie tables for automated archiving or deletion.',
      highlights: [
        'Total sensitive DB inventory scanning',
        'Zombie sensitive table detection (90+ days)',
        'Top risk profile telemetry ranking',
        'Instant security posture remediation',
      ],
    },
    {
      id: 'sensitive-data',
      title: 'Sensitive Data Exposure',
      icon: '🔒',
      tag: 'PII DISCOVERY & CLASSIFICATION',
      img: '/platform/sensitive_data.webp',
      headline: 'Pattern-Matched Query Analysis & Sensitive Volume Ranking',
      description:
        'Continuous PII detection engine derived from audit trail telemetry and pattern-matched query text analysis across all registered database clusters.',
      highlights: [
        'Real-time PII pattern query matching',
        'Top exposed database ranking by risk',
        'Multi-database connection scan status',
        'Zero critical exposure validation',
      ],
    },
    {
      id: 'user-behavior',
      title: 'User Analytics & Behavior',
      icon: '📊',
      tag: 'BEHAVIORAL PROFILING',
      img: '/platform/user_analytics.webp',
      headline: 'Risk Score Distribution & Outlier Account Tracking',
      description:
        'Global database activity monitoring and behavioral profiling engine calculating activity volume vs. data sensitivity to spot 2x 7-day baseline deviations.',
      highlights: [
        'User activity risk score distribution',
        'Top data consumer volume ranking',
        'Automated outlier account detection',
        'Real-time behavioral trend forecasting',
      ],
    },
    {
      id: 'vulnerability-scan',
      title: 'Vulnerability Assessment',
      icon: '🐛',
      tag: 'CIS BENCHMARK & MISCONFIGURATIONS',
      img: '/platform/vulnerability_scan.webp',
      headline: 'Heuristic Misconfiguration Scan & Violation Inventory',
      description:
        'Automated CVE and misconfiguration findings engine tracking CIS benchmarks, default password alerts, excessive privileges, and disabled audit logging.',
      highlights: [
        'Severity distribution & findings breakdown',
        'Cluster vulnerability load per DB',
        'Heuristic violation inventory tracking',
        'Automated 1-click full scan execution',
      ],
    },
  ];

  const currentScreenshot = platformScreenshots[activeScreenshotIndex] || platformScreenshots[0];
  const [activeConsoleIndex, setActiveConsoleIndex] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState(null);

  useEffect(() => {
    // Restart GIF animation from frame 0 on every page refresh or visit
    setGifSrc(`/AtherMind_IntelliDAM.gif?v=${Date.now()}`);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setEnlargedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [selectedDemoProduct, setSelectedDemoProduct] = useState('');
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const [specModalData, setSpecModalData] = useState({ title: '', sub: '', details: '' });
  const [currentTime, setCurrentTime] = useState('12:22:45 UTC');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cards = document.querySelectorAll('.platform-console-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-console-idx') || '0', 10);
            setActiveConsoleIndex(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: '-15% 0px -15% 0px',
        threshold: 0.3,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const ALL_LOG_POOL = [
    { tag: 'AI', tagClass: 'ai', text: 'Metronik PDM: SAP PM work-order #WO-49210 auto-dispatched' },
    { tag: 'SEC', tagClass: 'sec', text: 'IntelliDAM: Sub-5ms Zero-Trust RBAC access granted to Cloud Postgres' },
    { tag: 'OT', tagClass: 'ot', text: 'AeroPulse: EGT margin model updated for Tail_VT-782 (CFM56 Engine)' },
    { tag: 'AI', tagClass: 'ai', text: 'Metronik PDM: Vibration anomaly detected on Turbine_3 (0.042g drift)' },
    { tag: 'SEC', tagClass: 'sec', text: 'IntelliDAM: Mid-flight SQL injection blocked (DBA_User_89)' },
    { tag: 'OT', tagClass: 'ot', text: 'AeroPulse: ACARS telemetry tap verified 100% telemetry integrity' },
  ];

  const [telemetryLogs, setTelemetryLogs] = useState([
    { tag: 'SEC', tagClass: 'sec', text: 'IntelliDAM: Mid-flight SQL injection blocked (DBA_User_89)', id: 'init-1' },
    { tag: 'OT', tagClass: 'ot', text: 'AeroPulse: ACARS telemetry tap verified 100% telemetry integrity', id: 'init-2' },
    { tag: 'AI', tagClass: 'ai', text: 'Metronik PDM: SAP PM work-order #WO-49210 auto-dispatched', id: 'init-3' },
    { tag: 'SEC', tagClass: 'sec', text: 'IntelliDAM: Sub-5ms Zero-Trust RBAC access granted to Cloud Postgres', id: 'init-4' },
    { tag: 'OT', tagClass: 'ot', text: 'AeroPulse: EGT margin model updated for Tail_VT-782 (CFM56 Engine)', id: 'init-5' },
    { tag: 'AI', tagClass: 'ai', text: 'Metronik PDM: Vibration anomaly detected on Turbine_3 (0.042g drift)', id: 'init-6' },
  ]);

  useEffect(() => {
    // Update telemetry clock
    const clockInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toUTCString().split(' ')[4] + ' UTC');
    }, 1000);

    // Stream new telemetry logs dynamically every 2.5s matching video
    let logCounter = 0;
    const streamInterval = setInterval(() => {
      const item = ALL_LOG_POOL[logCounter % ALL_LOG_POOL.length];
      logCounter++;
      setTelemetryLogs((prev) => [
        { ...item, id: `${Date.now()}-${Math.random()}` },
        ...prev.slice(0, 5),
      ]);
    }, 2500);

    if (typeof window !== 'undefined' && window.initAthermind) {
      window.initAthermind();
    }

    return () => {
      clearInterval(clockInterval);
      clearInterval(streamInterval);
    };
  }, []);


  const handleOpenDemo = (productName) => {
    setSelectedDemoProduct(productName || '');
    setIsDemoModalOpen(true);
  };

  const handleOpenSpec = (title, sub, details) => {
    setSpecModalData({ title, sub, details });
    setIsSpecModalOpen(true);
  };

  // Comprehensive Product Data for all 3 Products (Control Plane, Benchmarks & Telemetry Logs)
  const productData = {
    dam: {
      name: 'AtherMind IntelliDAM (Zero-Trust Security)',
      theme: 'teal-theme',
      accentColor: '#14b8a6',
      subtitle:
        'AtherMind IntelliDAM secures every database transaction with a unified Zero-Trust control plane that monitors traffic, applies inline query policies dynamically, and governs the full lifecycle from cloud core to industrial edge.',
      topLoop: 'AGENTIC ANOMALY DETECTION & REAL TIME QUERY INTERCEPT',
      bottomLoop: 'AUTOMATED POLICY ENFORCEMENT, ISO 27001 & COMPLIANCE AUDITING',
      col1Title: 'ALL DATA SOURCES',
      col1Items: [
        { icon: '👤', name: 'Human DBAs' },
        { icon: '💻', name: 'App Microservices' },
        { icon: '⚡', name: 'Edge / PLCs' },
      ],
      col2Title: 'Discover & Monitor',
      col2Icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      col2Points: [
        '100% Traffic & SQL Capture',
        '<50ms Monitoring Latency',
        '10+ DBs: Postgres, MySQL, Oracle, Mongo',
        'Session & Resource I/O Analytics',
      ],
      col3Title: 'Control & Enforce',
      col3Icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      col3Points: [
        'Zero-Trust RBAC & ABAC Policy',
        'Sub-5ms Mid-Flight Query Blocking',
        'Passwordless & JIT Privileged Access',
        'TLS 1.3 & AES-256 Air-Gapped OT Guard',
      ],
      col4Title: 'Govern & Comply',
      col4Icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      col4Points: [
        'Behavioural AI Injection & Leak Triage',
        'Tamper-Proof Chain-of-Custody Logs',
        '1-Click GDPR, HIPAA, DPDPA Export',
        'Splunk, QRadar & Sentinel SIEM Sync',
      ],
      col5Title: 'ALL TARGETS',
      col5Items: [
        { icon: '☁️', name: 'Cloud Core DBs' },
        { icon: '🗄️', name: 'SaaS Stores' },
        { icon: '📡', name: 'Industrial Edge' },
      ],
      benchmarks: [
        { label: 'Inline Query Intercept Latency', val: '< 4.2 ms', percent: 96 },
        { label: 'Concurrent DB Connections Handled', val: '100,000+ IOPS', percent: 98 },
        { label: 'Zero-Trust Policy Evaluation Overhead', val: '< 0.8 ms', percent: 95 },
        { label: 'Audit Trail Integrity Verification', val: '100% Real-Time', percent: 100 },
      ],
    },
    pdm: {
      name: 'Metronik PDM (AI Digital Twin)',
      theme: 'cyan-theme',
      accentColor: '#06b6d4',
      subtitle:
        'Metronik PDM unifies IIoT sensor streams & 4K drone analytics into a living 3D digital twin platform that predicts equipment failures and automates maintenance before downtime occurs.',
      topLoop: 'MULTI-MODEL ENSEMBLE AI INFERENCE (<50MS) & ANOMALY DETECTION',
      bottomLoop: 'AUTOMATED SAP PM, IBM MAXIMO & SERVICENOW WORK-ORDER DISPATCH',
      col1Title: 'DATA INGESTION',
      col1Items: [
        { icon: '⚙️', name: 'IIoT Edge' },
        { icon: '🚁', name: '4K / IR Drones' },
        { icon: '📈', name: 'Legacy SCADA' },
      ],
      col2Title: 'Connect & Digitize',
      col2Icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
      ),
      col2Points: [
        'Ingest SCADA (Modbus, OPC-UA)',
        'Living 3D Digital Asset Replicas',
        'Parameter Map & State Machine',
        'Real-Time Health Heatmaps (30s Update)',
      ],
      col3Title: 'Predict & Forecast',
      col3Icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
      col3Points: [
        '6 ML Models (LSTM, RF, XGB, GNN)',
        '95%+ Failure Prediction Accuracy',
        'Remaining Useful Life (RUL) Reg.',
        '4K Drone Defect Photogrammetry',
      ],
      col4Title: 'Act & Optimize',
      col4Icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      col4Points: [
        'Auto SAP PM & Maximo CMMS Push',
        '60% Unplanned Downtime Slash',
        '40% Maintenance OPEX Reduction',
        '400% 5-Year Return on Investment',
      ],
      col5Title: 'SECTORS COVERED',
      col5Items: [
        { icon: '🏭', name: 'Manufacturing' },
        { icon: '⚡', name: 'Energy & Oil' },
        { icon: '✈️', name: 'Aviation & Infra' },
      ],
      benchmarks: [
        { label: 'LSTM & RF Predictive Inference Speed', val: '< 35 ms', percent: 96 },
        { label: 'Sensor Telemetry Ingestion Rate', val: '2.4M msg/sec', percent: 98 },
        { label: 'Unplanned Asset Downtime Reduction', val: '60.4% Drop', percent: 88 },
        { label: 'Automated SAP Work-Order Dispatch SLA', val: '< 2.5 sec', percent: 95 },
      ],
    },
    aero: {
      name: 'AtherMind AeroPulse (Aviation AI)',
      theme: 'teal-theme',
      accentColor: '#22d3ee',
      subtitle:
        'AtherMind AeroPulse is a living digital twin for commercial aviation fusing ACARS telemetry, FOQA data, and drone/borescope inspection feeds to eliminate Aircraft-on-Ground (AOG) delays.',
      topLoop: 'TURBOFAN EGT-MARGIN & AVIONICS PREDICTIVE AI INFERENCE',
      bottomLoop: 'EASA PART-145, FAA & AUDIT-READY FLIGHT SAFETY RECORDS',
      col1Title: 'AVIATION FEEDS',
      col1Items: [
        { icon: '✈️', name: 'ACARS / FOQA' },
        { icon: '🕒', name: 'Turbofan EHM' },
        { icon: '📷', name: 'Borescope CV' },
      ],
      col2Title: 'Stream & Digitize',
      col2Icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.6-.1-1.2.1-1.5.6l-1.1 1.7c-.3.5-.2 1.2.3 1.6L8 15l-3 3-2.5-.5L1 19l3 3 1.5-1.5L5 18l3-3 3.4 5c.4.5 1.1.6 1.6.3l1.7-1.1c.5-.3.7-.9.6-1.5z" />
        </svg>
      ),
      col2Points: [
        'Real-Time Aircraft Data-Bus Tap',
        'Live System Map per ATA Chapter',
        'Hydraulics, Airframe & Avionics Drift',
        'Flight-by-Flight Health Score (<500ms)',
      ],
      col3Title: 'Predict & Forecast',
      col3Icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 6 12 12 16 14" />
        </svg>
      ),
      col3Points: [
        'LSTM Turbofan EGT Decay Forecast',
        '50% Drop in AOG & Diversion Events',
        'LRU & Hydraulic Component RUL',
        '20-35% Longer On-Wing Time',
      ],
      col4Title: 'Act & Orchestrate',
      col4Icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
      col4Points: [
        'Auto AMOS, TRAX & Maximo Orders',
        'Crew & Parts Staging Push (<3s)',
        'EASA Part-145 & FAA Audit Evidence',
        '1.5-3% Block-Fuel Savings & 400% ROI',
      ],
      col5Title: 'FLEET OPERATORS',
      col5Items: [
        { icon: '✈️', name: 'Mainline Airlines' },
        { icon: '🛠️', name: 'MRO Hangars' },
        { icon: '🛡️', name: 'Flight Safety' },
      ],
      benchmarks: [
        { label: 'ACARS / FOQA Data Stream Latency', val: '< 450 ms', percent: 96 },
        { label: 'Turbofan EGT Margin Prediction SLA', val: '14 Days Prior', percent: 92 },
        { label: '4K Drone Skin Defect Detection Time', val: '1.2 sec/frame', percent: 94 },
        { label: 'AOG Maintenance Delay Slash Rate', val: '50.0% Drop', percent: 88 },
      ],
    },
  };


  const activeData = productData[activeTab] || productData['dam'];

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" id="cursor" aria-hidden="true">
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>

      {/* WebGL canvas background */}
      <canvas id="bg-canvas" className="bg-canvas" aria-hidden="true"></canvas>
      <div className="bg-ambient-spotlights" aria-hidden="true">
        <div className="bg-spotlight-top"></div>
        <div className="bg-spotlight-mid"></div>
        <div className="bg-spotlight-bottom"></div>
      </div>
      <div className="grid-overlay" aria-hidden="true"></div>
      <div className="noise-overlay" aria-hidden="true"></div>

      <main id="top">
        {/* PRODUCTS HERO */}
        <section className="hero hero-subpage">
          <div className="hero-grid">
            <div className="hero-visual">
              <div className="hero-shield-card" id="productHeroCard">
                <div className="shield-glow-backdrop"></div>
                <div className="shield-svg-wrapper">
                  <svg className="shield-svg" viewBox="0 0 340 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="prodGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.85" />
                        <stop offset="50%" stopColor="#67E8F9" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.9" />
                      </linearGradient>
                      <linearGradient id="prodGradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.85" />
                        <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.65" />
                        <stop offset="100%" stopColor="#9333EA" stopOpacity="0.9" />
                      </linearGradient>
                      <linearGradient id="prodPlatformFill" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.04" />
                      </linearGradient>
                      <filter id="prodGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    <polygon points="170 210 290 270 170 330 50 270" fill="url(#prodPlatformFill)" stroke="url(#prodGradPurple)" strokeWidth="1.75" strokeDasharray="6 4" opacity="0.7" />
                    <polygon points="170 150 290 210 170 270 50 210" fill="rgba(124, 58, 237, 0.14)" stroke="url(#prodGradPurple)" strokeWidth="2" filter="url(#prodGlowFilter)" />
                    <polygon points="170 90 290 150 170 210 50 150" fill="rgba(34, 211, 238, 0.16)" stroke="url(#prodGradCyan)" strokeWidth="2.25" filter="url(#prodGlowFilter)" />

                    <g className="prod-core-cube">
                      <polygon points="170 40 210 60 170 80 130 60" fill="rgba(103, 232, 249, 0.35)" stroke="#67E8F9" strokeWidth="1.75" />
                      <polygon points="130 60 170 80 170 120 130 100" fill="rgba(124, 58, 237, 0.4)" stroke="#A78BFA" strokeWidth="1.75" />
                      <polygon points="170 80 210 60 210 100 170 120" fill="rgba(59, 130, 246, 0.35)" stroke="#38BDF8" strokeWidth="1.75" />
                    </g>
                    <circle className="shield-ring ring-outer" cx="170" cy="180" r="85" stroke="rgba(103, 232, 249, 0.35)" strokeWidth="1.5" strokeDasharray="12 6" />
                    <circle className="shield-ring ring-inner" cx="170" cy="180" r="60" stroke="rgba(167, 139, 250, 0.45)" strokeWidth="1.5" strokeDasharray="6 4" />
                    <line x1="170" y1="40" x2="170" y2="330" stroke="#67E8F9" strokeWidth="1.75" strokeDasharray="8 4" opacity="0.65" />
                  </svg>
                </div>

                <div className="floating-badge badge-top-right glass-panel" style={{ top: '15px', right: '-15px' }}>
                  <div className="badge-icon cyan">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <rect x="9" y="9" width="6" height="6" />
                    </svg>
                  </div>
                  <div className="badge-info">
                    <span className="badge-title">Metronik PDM</span>
                    <span className="badge-status">AI Digital Twin Engine</span>
                  </div>
                </div>

                <div className="floating-badge badge-bottom-left glass-panel" style={{ bottom: '20px', left: '-15px' }}>
                  <div className="badge-icon purple">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="badge-info">
                    <span className="badge-title">AtherMind IntelliDAM</span>
                    <span className="badge-status">Zero-Trust DB Proxy</span>
                  </div>
                </div>

                <div className="floating-badge badge-center-right glass-panel" style={{ top: '52%', right: '-20px' }}>
                  <div className="badge-icon green">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    </svg>
                  </div>
                  <div className="badge-info">
                    <span className="badge-title">AeroPulse Aviation</span>
                    <span className="badge-status">Commercial Health AI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-content">
              <div className="hero-meta">
                <span className="hero-status">
                  <span className="heading-icon-badge" style={{ width: '22px', height: '22px', border: 'none', background: 'transparent', boxShadow: 'none' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </span>
                  <span>ENTERPRISE PRODUCT SUITE</span>
                </span>
              </div>

              <h1 className="hero-title">
                <span className="hero-line">
                  <span className="hero-word" data-cursor="lg">AI Digital Twins & Database Security</span>
                </span>
                <span className="hero-line">
                  <span className="hero-word gradient-text" data-cursor="lg">24/7 Managed Platform Operations</span>
                </span>
              </h1>

              <p className="hero-sub">
                Explore our living platform engines engineered for high-availability IT, cloud, and industrial edge environments.
              </p>

              <div style={{ marginTop: '24px' }}>
                <button className="btn btn-primary btn-lg btn-product-demo" onClick={() => handleOpenDemo('Enterprise Product Suite')}>
                  <span>Request Live Product Demo</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FUTURISTIC CORE ENGINE LIVE TELEMETRY SHOWCASE */}
        <section className="work" style={{ paddingTop: '64px', paddingBottom: '32px' }}>
          <div className="container">
            <header className="section-head text-center" style={{ marginBottom: '36px', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '6px 20px', borderRadius: '30px', background: 'rgba(34, 211, 238, 0.12)', border: '1px solid rgba(34, 211, 238, 0.35)', color: '#22d3ee', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', boxShadow: '0 0 20px rgba(34, 211, 238, 0.25)' }}>
                <span className="live-pulse-dot" style={{ width: '8px', height: '8px' }}></span>
                ⚡ ATHERMIND ZERO-TRUST PLATFORM
              </div>
            </header>

            {/* Live Interactive Telemetry Console */}
            <div style={{ marginTop: '24px', marginBottom: '48px' }}>
              <InteractiveTelemetryConsole />
            </div>

            <div className="control-plane-wrapper">
              {/* IntelliDAM Demo Video Showcase - Commented out for later use
              <div className="intellidam-demo-showcase" style={{ marginTop: '24px', marginBottom: '56px', opacity: 1, visibility: 'visible' }}>
                <div className="video-cyber-stage">
                  <div className="video-cyber-frame glass-panel">
                    <div className="cyber-corner corner-tl"></div>
                    <div className="cyber-corner corner-tr"></div>
                    <div className="cyber-corner corner-bl"></div>
                    <div className="cyber-corner corner-br"></div>

                    <div className="video-terminal-header">
                      <div className="video-status-indicator">
                        <span className="live-pulse-dot"></span>
                        <span className="live-status-text">LIVE ENGINE TELEMETRY STREAM</span>
                      </div>
                      <div className="video-title-center">
                        <span className="video-title-badge">🛡️ AtherMind IntelliDAM — Zero-Trust Database Activity Inspection</span>
                      </div>
                      <div className="video-tech-pill">
                        <span>SUB-5MS INLINE INTERCEPT</span>
                      </div>
                    </div>

                    <div className="video-viewport" style={{ background: '#071a3d', minHeight: '280px', maxHeight: '540px' }}>
                      <Image
                        src={gifSrc}
                        key={gifSrc}
                        alt="AtherMind IntelliDAM System Architecture Live Telemetry Demo"
                        width={1080}
                        height={540}
                        unoptimized
                        className="video-gif-element"
                        style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '540px', objectFit: 'contain' }}
                      />
                    </div>

                    <div className="video-footer-metrics">
                      <div className="v-metric-item">
                        <span className="v-label">Inspection Latency</span>
                        <span className="v-value cyan-glow">&lt; 0.8 microseconds</span>
                      </div>
                      <div className="v-metric-item">
                        <span className="v-label">SQL Traffic Capture</span>
                        <span className="v-value green-glow">100% Inline Mid-Flight</span>
                      </div>
                      <div className="v-metric-item">
                        <span className="v-label">Compliance Audit</span>
                        <span className="v-value purple-glow">GDPR · DPDPA · HIPAA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              */}

              {/* BENCHMARK MATRIX & TELEMETRY FEED SECTION HEADING (EXACT MATCH TO USER SCREENSHOT) */}
              <div style={{ marginTop: '56px', marginBottom: '24px', textAlign: 'left', maxWidth: '1080px', margin: '56px auto 24px auto' }}>
                <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#14b8a6', marginBottom: '6px', letterSpacing: '-0.01em' }}>
                  Interactive Platform Benchmarks
                </h2>
                <p className="bench-sub" style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.75)', margin: 0 }}>
                  Compare live latency, throughput, and inference speeds across products
                </p>
              </div>

              <div className="benchmark-dashboard-grid" style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {/* Left Card: Interactive Platform Benchmarks */}
                <div className="benchmark-main-card glass-panel" style={{ padding: '20px 24px', borderRadius: '16px', border: '1px solid rgba(20, 184, 166, 0.35)', background: 'rgba(5, 15, 25, 0.75)' }}>
                  <div className="benchmark-card-head" style={{ marginBottom: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                    {/* Tab Switcher Buttons (No Outer Rectangular Container) */}
                    <div className="bench-tabs" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', background: 'transparent', border: 'none', padding: 0 }}>
                      <button
                        className={`bench-tab-btn ${activeTab === 'dam' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dam')}
                        style={{
                          padding: '6px 16px',
                          borderRadius: '20px',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          color: activeTab === 'dam' ? '#ffffff' : '#cbd5e1',
                          background: activeTab === 'dam' ? '#0d9488' : 'rgba(203, 213, 225, 0.12)',
                          border: activeTab === 'dam' ? '1px solid #14b8a6' : '1px solid rgba(203, 213, 225, 0.25)',
                          boxShadow: activeTab === 'dam' ? '0 0 15px rgba(20, 184, 166, 0.4)' : 'none',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        IntelliDAM
                      </button>
                      <button
                        className={`bench-tab-btn ${activeTab === 'pdm' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pdm')}
                        style={{
                          padding: '6px 16px',
                          borderRadius: '20px',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          color: activeTab === 'pdm' ? '#ffffff' : '#cbd5e1',
                          background: activeTab === 'pdm' ? '#0d9488' : 'rgba(203, 213, 225, 0.12)',
                          border: activeTab === 'pdm' ? '1px solid #14b8a6' : '1px solid rgba(203, 213, 225, 0.25)',
                          boxShadow: activeTab === 'pdm' ? '0 0 15px rgba(20, 184, 166, 0.4)' : 'none',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        Metronik PDM
                      </button>
                      <button
                        className={`bench-tab-btn ${activeTab === 'aero' ? 'active' : ''}`}
                        onClick={() => setActiveTab('aero')}
                        style={{
                          padding: '6px 16px',
                          borderRadius: '20px',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          color: activeTab === 'aero' ? '#ffffff' : '#cbd5e1',
                          background: activeTab === 'aero' ? '#0d9488' : 'rgba(203, 213, 225, 0.12)',
                          border: activeTab === 'aero' ? '1px solid #14b8a6' : '1px solid rgba(203, 213, 225, 0.25)',
                          boxShadow: activeTab === 'aero' ? '0 0 15px rgba(20, 184, 166, 0.4)' : 'none',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        AeroPulse
                      </button>
                    </div>
                  </div>

                  {/* 4 Full-Width Metric Rows with Cyan Horizontal Lines */}
                  <div className="bench-metrics-list" style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {activeData.benchmarks.map((bm, idx) => (
                      <div key={idx} className="bench-metric-row" style={{ marginBottom: '0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.84rem' }}>
                          <span style={{ fontWeight: 700, color: '#ffffff' }}>{bm.label}</span>
                          <span style={{ color: '#ffffff', fontWeight: 800 }}>{bm.val}</span>
                        </div>
                        <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                          <div style={{ width: `${bm.percent}%`, height: '100%', background: '#14b8a6', borderRadius: '2px', transition: 'width 0.5s ease-in-out' }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Card: Live Telemetry Stream */}
                <div className="telemetry-feed-card glass-panel" style={{ padding: '20px 24px', borderRadius: '16px', border: '1px solid rgba(20, 184, 166, 0.35)', background: 'rgba(5, 15, 25, 0.75)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="telemetry-head" style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div className="telemetry-live-badge" style={{ fontSize: '0.82rem', color: '#10b981', fontWeight: 800, letterSpacing: '0.04em' }}>
                        <span className="pulse-ring" style={{ background: '#10b981' }}></span>
                        LIVE TELEMETRY STREAM
                      </div>
                      <span className="telemetry-clock" id="telemetryClock" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-mono)' }}>{currentTime}</span>
                    </div>

                    <div className="telemetry-stream-box" id="telemetryStreamBox">
                      {telemetryLogs.map((log) => (
                        <div key={log.id} className="t-log-line">
                          <span className={`t-log-tag ${log.tagClass}`}>{log.tag}</span>
                          <span className="t-log-msg">{log.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="telemetry-footer" style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(20, 184, 166, 0.2)' }}>
                    <div className="t-stat">
                      <span className="t-num" style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>14.8M+</span>
                      <span className="t-lbl" style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.7)' }}>Queries Analyzed / Day</span>
                    </div>
                    <div className="t-stat">
                      <span className="t-num" style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>99.999%</span>
                      <span className="t-lbl" style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.7)' }}>Uptime SLA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENTERPRISE PLATFORM CONTROL CONSOLES & INTERFACE SCREENSHOTS ALTERNATING SHOWCASE */}
        <section className="section-padding" style={{ paddingTop: '20px', paddingBottom: '80px', background: 'linear-gradient(180deg, rgba(8, 18, 28, 0.4) 0%, rgba(13, 148, 136, 0.08) 50%, rgba(15, 23, 42, 0.4) 100%)' }}>
          <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '48px' }}>
              <div className="badge" style={{ display: 'inline-flex', marginBottom: '8px', background: 'linear-gradient(90deg, rgba(13, 148, 136, 0.2), rgba(203, 213, 225, 0.12))', border: '1px solid rgba(203, 213, 225, 0.35)', color: '#22d3ee' }}>
                <span>🖥️</span> REAL PLATFORM CONSOLES
              </div>
              <h2 className="section-title">
                Live Platform <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #cbd5e1 50%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Control Consoles & Modules</span>
              </h2>
              <p className="section-sub" style={{ marginTop: '8px', maxWidth: '720px', marginInline: 'auto', color: '#cbd5e1' }}>
                Explore AtherMind's live operational consoles for active threat defense, compliance posture auditing, DSAR PII discovery, identity resolution, risk exposure tracking, sensitive data volume, user behavioral analytics, and vulnerability scans.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
              {platformScreenshots.map((item, idx) => {
                const isEven = idx % 2 === 1; // Even index (2nd, 4th, 6th, 8th): Image on Right, Text on Left
                const isFocused = activeConsoleIndex === idx;
                const animClass = isEven ? 'reveal-right-to-left' : 'reveal-left-to-right';

                return (
                  <div
                    key={item.id}
                    data-console-idx={idx}
                    className={`glass-panel platform-console-card ${animClass} ${isFocused ? 'console-focused' : 'console-faded'}`}
                    style={{
                      borderRadius: '24px',
                      border: isFocused ? '1px solid rgba(20, 184, 166, 0.65)' : '1px solid rgba(203, 213, 225, 0.2)',
                      overflow: 'hidden',
                      boxShadow: isFocused
                        ? '0 30px 85px rgba(0,0,0,0.8), 0 0 40px rgba(20, 184, 166, 0.35), inset 0 0 35px rgba(203, 213, 225, 0.08)'
                        : '0 10px 30px rgba(0,0,0,0.4)',
                      background: isFocused
                        ? 'linear-gradient(135deg, rgba(10, 20, 32, 0.96) 0%, rgba(13, 148, 136, 0.16) 50%, rgba(203, 213, 225, 0.1) 100%)'
                        : 'rgba(6, 12, 20, 0.55)',
                    }}
                  >
                    {/* Mac OS Window Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 24px',
                        background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.98) 0%, rgba(13, 148, 136, 0.28) 55%, rgba(203, 213, 225, 0.18) 100%)',
                        borderBottom: '1px solid rgba(203, 213, 225, 0.2)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                          title="Close / Exit Fullscreen (Red)"
                          onClick={() => setEnlargedImage(null)}
                          style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', cursor: 'pointer', display: 'inline-block' }}
                        />
                        <span
                          title="Minimize / Exit Fullscreen (Yellow)"
                          onClick={() => setEnlargedImage(null)}
                          style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', cursor: 'pointer', display: 'inline-block' }}
                        />
                        <span
                          title="Enlarge Image to Fullscreen (Green)"
                          onClick={() => setEnlargedImage(item)}
                          style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', cursor: 'pointer', display: 'inline-block', boxShadow: '0 0 8px #10b981' }}
                        />
                        <span style={{ marginLeft: '12px', fontSize: '0.82rem', color: '#cbd5e1', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                          AtherMind Console v4.8 / <span style={{ color: '#22d3ee' }}>{item.title}</span>
                        </span>
                      </div>
                      <span className="live-status-pill" style={{ fontSize: '0.74rem', padding: '3px 12px', borderRadius: '12px', background: 'rgba(13, 148, 136, 0.25)', color: '#2dd4bf', border: '1px solid rgba(203, 213, 225, 0.3)', fontWeight: 700 }}>
                        🟢 LIVE CONSOLE #{idx + 1}
                      </span>
                    </div>

                    {/* Alternating Grid Row */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: isEven ? 'minmax(0, 1fr) minmax(0, 1.4fr)' : 'minmax(0, 1.4fr) minmax(0, 1fr)',
                        gap: '0',
                      }}
                      className="platform-alternating-grid"
                    >
                      {/* Image Column */}
                      <div
                        style={{
                          order: isEven ? 2 : 1,
                          padding: '24px',
                          background: 'linear-gradient(145deg, #030812 0%, rgba(13, 148, 136, 0.15) 50%, rgba(203, 213, 225, 0.08) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                        }}
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={640}
                          height={400}
                          loading="lazy"
                          onClick={() => setEnlargedImage(item)}
                          title="Click image to enlarge fitted to screen (Green dot)"
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '14px',
                            border: '1px solid rgba(203, 213, 225, 0.35)',
                            boxShadow: '0 15px 40px rgba(0,0,0,0.7), 0 0 25px rgba(20, 184, 166, 0.25)',
                            objectFit: 'contain',
                            maxHeight: '480px',
                            cursor: 'zoom-in',
                          }}
                          className="console-img-hover"
                        />
                      </div>

                      {/* Text / Description Column */}
                      <div
                        style={{
                          order: isEven ? 1 : 2,
                          padding: '36px 32px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          borderLeft: isEven ? 'none' : '1px solid rgba(203, 213, 225, 0.12)',
                          borderRight: isEven ? '1px solid rgba(203, 213, 225, 0.12)' : 'none',
                          background: 'linear-gradient(135deg, rgba(9, 17, 27, 0.94) 0%, rgba(13, 148, 136, 0.08) 50%, rgba(203, 213, 225, 0.06) 100%)',
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#22d3ee', background: 'linear-gradient(90deg, rgba(13, 148, 136, 0.25), rgba(203, 213, 225, 0.12))', padding: '4px 12px', borderRadius: '14px', border: '1px solid rgba(203, 213, 225, 0.35)' }}>
                              {item.tag}
                            </span>
                          </div>

                          <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: '#ffffff' }}>
                            {item.headline}
                          </h3>

                          <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.65', marginBottom: '24px' }}>
                            {item.description}
                          </p>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                            {item.highlights.map((h, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#e2e8f0' }}>
                                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.3), rgba(203, 213, 225, 0.15))', border: '1px solid rgba(20, 184, 166, 0.5)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#2dd4bf', fontWeight: 900, fontSize: '0.75rem' }}>✓</span>
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <button
                            onClick={() => handleOpenDemo(item.title)}
                            className="btn btn-primary btn-md width-full"
                            style={{ justifyContent: 'center', background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #06b6d4 100%)', border: '1px solid rgba(203, 213, 225, 0.4)', boxShadow: '0 0 20px rgba(20, 184, 166, 0.35)' }}
                          >
                            <span>Request Live Walkthrough for {item.title} →</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* REACT STATE PRODUCT DEMO MODAL */}
      {isDemoModalOpen && (
        <div className="modal-backdrop" style={{ display: 'flex' }}>
          <div className="modal-content glass-panel">
            <button className="modal-close" onClick={() => setIsDemoModalOpen(false)}>✕</button>
            <div className="modal-header-box">
              <h3>Book Product Usage Demo</h3>
              <p className="modal-subtitle">Schedule a live interactive walkthrough with our product engineers.</p>
            </div>
            <form
              className="modal-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const target = e.target;
                const name = target.elements[0]?.value;
                const email = target.elements[1]?.value;
                const company = target.elements[2]?.value;
                const topic = target.elements[3]?.value || 'Book Product Demo';
                const message = target.elements[4]?.value;

                await sendInquiryToAguna({
                  name,
                  email,
                  company,
                  topic: `Book Product: ${topic}`,
                  message,
                  formType: 'Book Product Demo',
                });

                setIsDemoModalOpen(false);
                alert(`Thank you ${name || ''}! Your product demo request has been submitted successfully.`);
              }}
            >
              <div className="modal-form-row">
                <div className="form-field">
                  <label>Full Name *</label>
                  <input type="text" required placeholder="Enter your full name" />
                </div>
                <div className="form-field">
                  <label>Work Email *</label>
                  <input type="email" required placeholder="name@company.com" />
                </div>
              </div>

              <div className="modal-form-row">
                <div className="form-field">
                  <label>Company / Organization</label>
                  <input type="text" placeholder="Acme Corp" />
                </div>
                <div className="form-field">
                  <label>Select Product *</label>
                  <select required defaultValue={selectedDemoProduct || ''}>
                    <option value="" disabled>Select Product</option>
                    <option value="Metronik PDM">Metronik PDM (AI Digital Twin)</option>
                    <option value="AtherMind IntelliDAM">AtherMind IntelliDAM (Zero-Trust DB Proxy)</option>
                    <option value="AeroPulse Aviation">AeroPulse Aviation (Flight AI)</option>
                    <option value="Enterprise Product Suite">Full Enterprise Product Suite</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label>Use-Case / Technical Notes</label>
                <textarea rows={3} placeholder="Describe your team size, telemetry environment, or requirements..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg width-full">
                <span>Submit Product Demo Request</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* REACT STATE SPECIFICATION MODAL */}
      {isSpecModalOpen && (
        <div className="modal-backdrop" style={{ display: 'flex' }}>
          <div className="modal-content glass-panel modal-large">
            <button className="modal-close" onClick={() => setIsSpecModalOpen(false)}>✕</button>
            <div className="modal-header-box">
              <h3>{specModalData.title}</h3>
              <p className="modal-subtitle">{specModalData.sub}</p>
            </div>
            <div className="modal-body modal-scrollable" style={{ padding: '20px 0', lineHeight: 1.7, color: 'var(--ink-1)' }}>
              <p style={{ fontSize: '1.05rem', marginBottom: '16px' }}>{specModalData.details}</p>
              <div className="glass-panel" style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)' }}>
                <strong>Key Platform Highlights:</strong>
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  <li>Zero-Trust Policy Enforcement with Sub-5ms Overhead</li>
                  <li>Real-time telemetry stream ingestion & ML predictive models</li>
                  <li>Multi-cloud deployment ready (AWS, Azure, GCP, & On-Prem Edge)</li>
                  <li>SOC2 Type II & ISO 27001 Certified Security Compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN ENLARGED CONSOLE IMAGE MODAL */}
      {enlargedImage && (
        <div
          className="modal-backdrop"
          onClick={() => setEnlargedImage(null)}
          style={{
            display: 'flex',
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: 'rgba(3, 8, 16, 0.94)',
            backdropFilter: 'blur(20px)',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            className="glass-panel"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '94vw',
              maxWidth: '1400px',
              maxHeight: '92vh',
              borderRadius: '24px',
              border: '1px solid rgba(20, 184, 166, 0.65)',
              boxShadow: '0 30px 100px rgba(0,0,0,0.9), 0 0 50px rgba(20, 184, 166, 0.4)',
              background: 'rgba(6, 14, 24, 0.98)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Enlarged Mac OS Window Bar Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 28px',
                background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.98) 0%, rgba(13, 148, 136, 0.35) 55%, rgba(203, 213, 225, 0.25) 100%)',
                borderBottom: '1px solid rgba(203, 213, 225, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  title="Close / Exit Fullscreen (Red)"
                  onClick={() => setEnlargedImage(null)}
                  style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ef4444', cursor: 'pointer', boxShadow: '0 0 8px #ef4444' }}
                />
                <span
                  title="Minimize / Exit Fullscreen (Yellow)"
                  onClick={() => setEnlargedImage(null)}
                  style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#f59e0b', cursor: 'pointer', boxShadow: '0 0 8px #f59e0b' }}
                />
                <span
                  title="Close / Exit Fullscreen (Green)"
                  onClick={() => setEnlargedImage(null)}
                  style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#10b981', cursor: 'pointer', boxShadow: '0 0 8px #10b981' }}
                />
                <span style={{ marginLeft: '16px', fontSize: '0.9rem', color: '#cbd5e1', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  AtherMind Platform Console / <span style={{ color: '#22d3ee' }}>{enlargedImage.title}</span> (ENLARGED FULLSCREEN)
                </span>
              </div>

              <button
                onClick={() => setEnlargedImage(null)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 800,
                }}
              >
                ✕
              </button>
            </div>

            {/* Enlarged Image Body */}
            <div
              style={{
                flex: 1,
                padding: '24px',
                background: '#020612',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'auto',
              }}
            >
              <Image
                src={enlargedImage.img}
                alt={enlargedImage.title}
                width={1200}
                height={750}
                loading="lazy"
                style={{
                  maxWidth: '100%',
                  maxHeight: '78vh',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  border: '1px solid rgba(203, 213, 225, 0.4)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(20, 184, 166, 0.3)',
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <div className="toast-container" id="toastContainer"></div>
    </>
  );
}
