import Link from 'next/link';
import Image from 'next/image';
import ServicesInteractiveGrid from '../../components/sections/ServicesInteractiveGrid';

export const metadata = {
  title: 'Cybersecurity & VAPT Service Portfolio | Aguna Solutions | AtherMind',
  description:
    'Cybersecurity & VAPT Service Portfolio by Aguna Solutions — Managed 24/7 NOC/SOC Operations, Offensive Security, and Cloud Native DevSecOps.',
};

export default function ServicesPage() {
  const servicesList = [
    {
      id: 'soc',
      title: '24/7 Managed NOC & SOC Operations',
      tag: 'HUMAN-IN-THE-LOOP DEFENSE',
      badge: '< 15m MTTR',
      desc: 'Sovereign 24/7/365 NOC & SOC centers delivering active threat triage, continuous SIEM/SOAR hunting, and guaranteed sub-15m MTTR.',
      highlights: [
        'Sub-15 Minute Incident Mean Time to Resolution (MTTR)',
        'Splunk, Microsoft Sentinel & QRadar SIEM/SOAR Ingestion',
        '24/7/365 Continuous Threat Hunting & Sovereign Escalation',
        'Hybrid Multi-Cloud Backbone & SD-WAN Network Management',
      ],
      img: '/assets/soc1.webp',
      agunaLink: 'https://agunasolutions.com/services',
    },
    {
      id: 'vapt',
      title: 'VAPT & Offensive Security Auditing',
      tag: 'OWASP & PTES CERTIFIED',
      badge: 'Zero False Positives',
      desc: 'Accredited offensive specialists delivering red-team adversary simulations, kernel eBPF vulnerability audits, and ISO/SOC 2 compliance.',
      highlights: [
        'Web, Mobile, API & Internal Network Penetration Testing',
        'Kernel eBPF & Containerized Runtime Security Inspection',
        'Continuous Cloud Posture & Attack Surface Mapping',
        'Full Regulatory Compliance Audits (ISO 27001, SOC 2, HIPAA)',
      ],
      img: '/assets/VAPT.jpg',
      agunaLink: 'https://agunasolutions.com/services',
    },
    {
      id: 'cloud',
      title: 'Cloud Native DevSecOps & Architecture',
      tag: 'KUBERNETES & MULTI-CLOUD',
      badge: '99.999% SLA',
      desc: 'High-throughput Kubernetes engineering, automated GitOps CI/CD pipelines, and zero-trust multi-cloud architectures.',
      highlights: [
        'Multi-Cloud Orchestration (AWS, Microsoft Azure, Google Cloud)',
        'Automated GitOps Pipelines & Immutable Infrastructure as Code',
        'Microservices Service Mesh & Mutual TLS (mTLS) Encryption',
        'Sub-100ms API Gateway & Distributed Edge Caching',
      ],
      img: '/assets/cloud.webp',
      agunaLink: 'https://agunasolutions.com/services',
    },
    {
      id: 'ai',
      title: 'Enterprise AI & Intelligent Automation',
      tag: 'NEURAL MODELS & ROBOTICS',
      badge: 'Private LLM AI',
      desc: 'Private enterprise LLMs, time-series predictive telemetry ensembles, and intelligent process robotics that remove operational bottlenecks.',
      highlights: [
        'Private Enterprise LLMs & Retrieval-Augmented Generation (RAG)',
        'Time-Series Predictive Maintenance Machine Learning Ensembles',
        'Intelligent Robotic Process Automation (RPA) for Legacy Systems',
        'Automated Alert Correlation & Anomaly Filtering',
      ],
      img: '/assets/NOC.jpg',
      agunaLink: 'https://agunasolutions.com/services',
    },
  ];

  return (
    <div style={{ paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)', paddingBottom: '5rem' }}>
      {/* Services Hero Header */}
      <section className="section-spacing" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-pill badge-pill-blue" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
            <span className="badge-pulse-dot"></span>
            Engineering Services &amp; 24/7 Operations
          </span>

          <h1 className="text-h1" style={{ marginBottom: '1.5rem', lineHeight: '1.16', letterSpacing: '-0.025em' }}>
            Enterprise Engineering Services Powered by <br />
            <span className="text-blue-gradient">World-Class Engineers &amp; Analysts</span>
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
              fontSize: 'clamp(1.02rem, 1.4vw, 1.16rem)',
            }}
          >
            Aguna Solutions delivers mission-critical technology operations, active cyber defense, high-scale cloud platforms, and verified compliance for organizations where failure is not an option.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a
              href="https://agunasolutions.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Explore Aguna Solutions Services</span>
              <span style={{ fontSize: '1.15rem' }}>↗</span>
            </a>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              <span>Schedule SLA Consultation</span>
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
              marginBottom: '3.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)' }} />
              <span>24/7 Managed NOC &amp; SOC</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)' }} />
              <span>Sub-15m MTTR SLA</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)' }} />
              <span>OWASP &amp; PTES Certified VAPT</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)' }} />
              <span>Zero Telemetry Leakage</span>
            </div>
          </div>
        </div>

        {/* Exact 4 Service Cards Grid */}
        <div className="container">
          <ServicesInteractiveGrid services={servicesList} />
        </div>
      </section>
    </div>
  );
}
