'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const servicesList = [
    {
      title: 'Managed SOC & Cyber Security',
      tag: '24/7 MANAGED SOC',
      desc: 'Proactive 24/7 threat hunting, SIEM log monitoring, vulnerability assessment, and automated incident containment.',
      highlights: ['24/7 SIEM Ingestion', 'Incident Containment', 'ISO 27001 & SOC2'],
      theme: 'theme-emerald',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Managed NOC Operations',
      tag: '99.999% NOC SLA',
      desc: 'Zero-downtime infrastructure monitoring, multi-cloud network management, and 24/7 proactive incident response.',
      highlights: ['99.999% SLA Uptime', 'Multi-Cloud NOC', 'Sub-15min SLA'],
      theme: 'theme-blue',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Web & Mobile App Development',
      tag: 'HIGH-THROUGHPUT',
      desc: 'Custom high-performance Web and Mobile software architectures engineered for extreme throughput, security, and velocity.',
      highlights: ['Cloud Microservices', 'React / Next / Flutter', 'Sub-100ms API'],
      theme: 'theme-purple',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: 'Cloud Native & DevSecOps',
      tag: 'K8S & MULTI-CLOUD',
      desc: 'Kubernetes container orchestration, automated CI/CD pipelines, and multi-cloud Zero-Trust security governance.',
      highlights: ['Kubernetes Ops', 'GitOps & CI/CD', 'Zero-Trust Cloud'],
      theme: 'theme-cyan',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
    {
      title: 'VAPT & Security Audit',
      tag: 'OWASP & PTES',
      desc: 'Comprehensive penetration testing, continuous vulnerability scanning, code security audits, and regulatory compliance.',
      highlights: ['Vulnerability Scan', 'Penetration Testing', 'OWASP Top 10 Audit'],
      theme: 'theme-indigo',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      title: 'Enterprise AI & Automation',
      tag: 'LLM & INTELLIGENT RPA',
      desc: 'Custom LLM integrations, predictive analytics engines, intelligent process automation, and robotic workflow models.',
      highlights: ['Private LLM Deployment', 'Predictive AI', 'Intelligent RPA'],
      theme: 'theme-teal',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="capabilities" id="services">
      <div className="container">
        <header className="section-head">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '12px', marginBottom: '8px' }}>
            <span className="eyebrow"><span className="eyebrow-dot"></span>Official Service Offerings</span>
          </div>
          <h2 className="section-title">
            Enterprise Technology & <br />
            <span className="gradient-text">24/7 Managed Operations.</span>
          </h2>
          <p className="section-sub">
            Aguna Solutions delivers 24/7 Managed SOC & NOC operations, cloud DevSecOps engineering, high-throughput software development, and enterprise AI automation.
          </p>

        </header>

        {/* SERVICES CONTENT SHOWCASE GRID */}
        <div className="service-buttons-grid">
          {servicesList.map((srv, index) => (
            <div key={index} className={`service-content-card glass-panel ${srv.theme}`}>
              <div className="srv-card-top">
                <div className="srv-icon-box">{srv.icon}</div>
                <span className="srv-tag">{srv.tag}</span>
              </div>
              <div className="srv-card-body">
                <h3 className="srv-title">{srv.title}</h3>
                <p className="srv-desc">{srv.desc}</p>
                <div className="srv-highlights">
                  {srv.highlights.map((h, i) => (
                    <span key={i} className="srv-chip">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/services" className="btn btn-primary">
            <span>Explore Services Page →</span>
          </Link>

        </div>
      </div>
    </section>
  );
}
