'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProductEcosystem() {
  const handleCardClick = (e, link, id) => {
    const hash = link.split('#')[1];
    if (hash && typeof window !== 'undefined') {
      e.preventDefault();
      // Update hash so hashchange listener runs
      window.location.hash = hash;
      const el = document.getElementById(hash);
      if (el) {
        if (window.__lenis) {
          try {
            window.__lenis.scrollTo(el, { offset: -90 });
          } catch (err) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          const navOffset = 90;
          const pos = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) - navOffset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      }
    }
  };

  const [activeFilter, setActiveFilter] = useState('all');

  const products = [
    // Core AtherMind Platforms
    {
      id: 'dam',
      name: 'AtherMind IntelliDAM',
      category: 'Zero-Trust Database Security',
      badge: 'Database Proxy',
      group: 'core',
      summary:
        'Inline SQL firewall and cryptographic audit trail engine preventing privilege escalation, unauthorized drops, and data breaches.',
      specs: '< 5ms Latency • NIST SP 800-207 • Dynamic PII Masking',
      metric: '↓ 85% Breach Risk',
      link: '/products#overview',
    },
    {
      id: 'pdm',
      name: 'Metronik PDM',
      category: 'Predictive Maintenance AI Digital Twin',
      badge: 'Digital Twin',
      group: 'core',
      summary:
        'Fuses IIoT sensor telemetry and autonomous drone feeds into a living 3D replica, forecasting failure 14 days early with 95%+ accuracy.',
      specs: '14-Day Warning • 60% Downtime Cut • SAP & Maximo CMMS',
      metric: '14-Day Early Warning',
      link: '/products#use-cases',
    },
    {
      id: 'aero',
      name: 'AtherMind AeroPulse',
      category: 'Aviation AI Flight Telemetry',
      badge: 'Aviation AI',
      group: 'core',
      summary:
        'Transforms ACARS, FOQA, and EHM avionics streams into aircraft digital twins, forecasting engine decay and reducing AOG delays by 50%.',
      specs: '50% AOG Cut • ARINC 664 Tap • EASA & FAA Part-145',
      metric: '50% AOG Delay Cut',
      link: '/products#use-cases',
    },
    {
      id: 'consoles',
      name: 'Real Platform Consoles',
      category: 'Unified Control Plane',
      badge: 'Mission Control',
      group: 'core',
      summary:
        '8 live operational consoles for CISOs, Plant Directors, and COOs including Active Defense, Compliance Center, and DSAR Manager.',
      specs: '8 Live Modules • Sub-1s PII Search • 99.99% Availability SLA',
      metric: '8 Live Modules',
      link: '/products#intelligence',
    },

    // Aguna Solutions AI & Security Suite (from agunasolutions.com/products)
    {
      id: 'cctv-anomaly',
      name: 'CCTV Anomaly Detection',
      category: 'Computer Vision & Security AI',
      badge: 'Security AI',
      group: 'aguna',
      summary:
        'Real-time edge video AI surveillance processing live multi-camera feeds with YOLO v8 inference to detect perimeter breaches, loitering, and intrusions with sub-second latency.',
      specs: 'YOLO v8 Inference • Edge Computing • RTSP / ONVIF Streaming',
      metric: '↑ 98.5% Accuracy',
      link: '/products#use-cases',
    },
    {
      id: 'integrity-platform',
      name: 'Athermind Integrity Platform',
      category: 'Data Integrity & Audit Provenance',
      badge: 'Blockchain Audit',
      group: 'aguna',
      summary:
        'AI-powered data integrity and audit trail platform that anchors critical business records to a distributed ledger, guaranteeing tamper-proof provenance and instant regulatory verification.',
      specs: 'Blockchain Anchoring • Immutable Logging • SHA-256 Merkle Proofs',
      metric: '100% Audit Compliance',
      link: '/products#use-cases',
    },
    {
      id: 'document-governance',
      name: 'Document & Workflow Governance',
      category: 'Document AI & Zero-Trust Workflow',
      badge: 'Enterprise ABAC',
      group: 'aguna',
      summary:
        'Document management system with NLP classification, zero-trust ABAC access controls, semantic vector search, and automated cryptographic approval routing across roles.',
      specs: 'NLP Classification • Zero-Trust ABAC • Semantic Vector Search',
      metric: '↓ 70% Processing Time',
      link: '/products#use-cases',
    },
    {
      id: 'industry-analytics',
      name: 'Industry 4.0 Analytics',
      category: 'Industrial AI & Predictive Maintenance',
      badge: 'Industrial AI',
      group: 'aguna',
      summary:
        'AI-driven predictive maintenance platform continuously monitoring machine telemetry across OT/IT boundaries, detecting micro-anomalies and forecasting equipment failures before downtime strikes.',
      specs: 'Nanometer Precision • Edge AI Processing • SCADA / PLC Ready',
      metric: '↓ 40% Downtime · ↑ 25% OEE',
      link: '/products#use-cases',
    },
  ];

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((p) => p.group === activeFilter);

  return (
    <section id="ecosystem" className="product-section product-ecosystem-section">
      <div className="product-container">
        <div className="editorial-section-tag scroll-anim-item anim-from-top is-visible">
          <span className="tag-number">08</span>
          <span className="tag-divider">/</span>
          <span className="tag-name">ECOSYSTEM</span>
        </div>

        <div className="ecosystem-header scroll-anim-item anim-from-left is-visible">
          <h2 className="editorial-headline-large">
            The AtherMind &nbsp;

            <span className="teal-accent-text">Enterprise Suite.</span>
          </h2>
          <p className="capabilities-subhead">
            Unified operational defense, predictive digital twins, computer vision surveillance, and zero-trust data governance.
          </p>
        </div>

        {/* Category Switcher Tabs */}


        {/* 8-Product Showcase Grid */}
        <div className="ecosystem-grid">
          {filteredProducts.map((prod, idx) => (
            <div
              key={prod.id}
              id={prod.id}
              className={`ecosystem-card scroll-anim-item anim-from-bottom is-visible ${prod.group === 'aguna' ? 'eco-card-aguna' : ''}`}
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="eco-card-top">
                <span className="eco-category">{prod.category}</span>
                <span className="eco-metric-tag">{prod.metric}</span>
              </div>

              <h3 className="eco-name">{prod.name}</h3>
              <p className="eco-summary">{prod.summary}</p>
              <div className="eco-divider" />
              <span className="eco-specs">{prod.specs}</span>

              <Link href={prod.link} className="eco-card-link" aria-label={`Explore ${prod.name}`} onClick={(e) => handleCardClick(e, prod.link, prod.id)}>
                <span>Explore {prod.name}</span>
                <span className="eco-arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
