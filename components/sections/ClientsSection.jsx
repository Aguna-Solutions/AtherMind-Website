'use client';

import Link from 'next/link';
import MarqueeTicker from '../MarqueeTicker';

export default function ClientsSection({ clientShowcases: propShowcases }) {
  const defaultShowcases = [
    {
      id: 'star-air',
      name: 'Star Air',
      logo: '/clients/as_starair.png',
      tag: 'COMMERCIAL AVIATION',
      headline: 'Eliminating AOG maintenance delays with predictive AI flight telemetry.',
      quote:
        'AtherMind AeroPulse provided our engineering teams real-time predictive insights that slashed aircraft-on-ground delay incidents by over 50% across our fleet.',
      img: '/clients/starAir.webp',
    },
    {
      id: 'gnfc',
      name: 'GNFC',
      logo: '/clients/as_gnfc.png',
      tag: 'CHEMICALS & FERTILIZERS',
      headline: 'Zero-Trust Database Governance & SQL Activity Inspection for ERP Infrastructure.',
      quote:
        'IntelliDAM ensured sub-5ms SQL query inspection across our SAP core database, preventing unauthorized data exfiltration with zero performance impact.',
      img: '/clients/GNFC.webp',
    },
    {
      id: 'musashi',
      name: 'Musashi',
      logo: '/clients/as_musashi.png',
      tag: 'AUTOMOTIVE MANUFACTURING',
      headline: 'AI Digital Twin & IIoT Predictive Maintenance for High-Precision Manufacturing Lines.',
      quote:
        'Metronik PDM detected motor vibration anomalies 14 days before failure, saving millions in potential assembly line downtime.',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'npst',
      name: 'NPST',
      logo: '/clients/as_npst.png',
      tag: 'FINANCIAL TECH & PAYMENTS',
      headline: '24/7 Managed SOC & Zero-Latency DB Security for High-Volume Digital Payments.',
      quote:
        'Aguna Solutions SOC team provides 24/7 monitoring and threat mitigation, maintaining 99.999% SLA uptime for millions of daily transactions.',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'tynor',
      name: 'Tynor',
      logo: '/clients/as_tynor.png',
      tag: 'HEALTHCARE & MEDICAL DEVICES',
      headline: 'Smart Cloud Native DevSecOps & Automated Warehouse Telemetry.',
      quote:
        'Our cloud infrastructure scalability and security posture were transformed with automated DevSecOps pipelines and 24/7 NOC monitoring.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'ntn',
      name: 'NTN',
      logo: '/clients/as_ntn.png',
      tag: 'PRECISION INDUSTRIAL BEARINGS',
      headline: 'IIoT SCADA Telemetry Ingestion & Real-Time Equipment Health Monitoring.',
      quote:
        'AtherMind IIoT platform ingests 100K+ sensor samples per second, giving our plant managers a live 3D operational twin.',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'orange',
      name: 'Orange Business',
      logo: '/clients/as_orange.png',
      tag: 'GLOBAL TELECOM & CLOUD',
      headline: 'Multi-Cloud Infrastructure Automation & Managed NOC Services.',
      quote:
        'Aguna Solutions delivered seamless multi-cloud orchestration and round-the-clock incident response across our regional data centers.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'zones',
      name: 'Zones',
      logo: '/clients/as_zones.png',
      tag: 'ENTERPRISE IT SOLUTIONS',
      headline: 'VAPT Security Audits & Continuous Cloud Compliance Architecture.',
      quote:
        'The VAPT security audit and continuous threat intelligence from AtherMind allowed us to achieve ISO 27001 certification in record time.',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'marg',
      name: 'Marg on Cloud',
      logo: '/clients/as_margoncloud.png',
      tag: 'CLOUD SAAS & ERP',
      headline: 'High-Throughput Web Microservices & Zero-Downtime DB Replication.',
      quote:
        'Our SaaS ERP platform handles peak seasonal loads effortlessly thanks to AtherMind database scaling and microservices architecture.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const showcases = propShowcases || defaultShowcases;

  return (
    <section className="section-spacing" id="clients" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-pill-blue">
            <span className="badge-pulse-dot"></span>
            Verified Enterprise Case Studies
          </span>
          <h2 className="text-h2">
            Trusted by Leaders in <span className="text-blue-gradient">Aviation, Industry &amp; Finance</span>
          </h2>
          <p className="section-subtitle">
            See how forward-thinking enterprises use AtherMind and Aguna Solutions to protect databases, prevent operational downtime, and automate complex workflows.
          </p>
        </div>

        {/* Continuous Dynamic Logo Marquee */}
        <div style={{ marginBottom: '1.25rem' }}>
          <MarqueeTicker items={showcases} speed={32} />
        </div>

        {/* Link to Dedicated Case Studies Page */}
        <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <Link
            href="/clients"
            className="btn btn-secondary btn-sm"
            style={{ borderRadius: 'var(--radius-full)', padding: '7px 20px', fontSize: '0.82rem' }}
          >
            <span>Explore Full Case Studies &amp; Deployments</span>
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
