'use client';

import Link from 'next/link';
import Image from 'next/image';
import MotionCard from '../MotionCard';

export default function ServicesSection() {
  const services = [
    {
      title: '24/7 Managed NOC & SOC Operations',
      tag: 'HUMAN-IN-THE-LOOP DEFENSE',
      desc: 'Round-the-clock Security and Network Operations Center staffed by certified engineers. Real-time SIEM/SOAR monitoring, sub-15min MTTR, and sovereign threat response.',
      img: '/assets/SOC.jpeg',
      badge: '< 15m MTTR',
      link: '/services',
    },
    {
      title: 'Enterprise NOC & Network Engineering',
      tag: 'MISSION-CRITICAL UPTIME',
      desc: 'High-availability network engineering ensuring 99.999% SLA across hybrid multi-cloud backbones, SD-WAN infrastructure, and industrial SCADA controllers.',
      img: '/assets/NOC.jpg',
      badge: '99.999% SLA',
      link: '/services',
    },
    {
      title: 'VAPT & Offensive Security Auditing',
      tag: 'OWASP & PTES CERTIFIED',
      desc: 'Red team attack simulations, kernel eBPF vulnerability inspection, and automated compliance auditing for banking, defense, and commercial aviation.',
      img: '/assets/VAPT.jpg',
      badge: 'Zero False Positives',
      link: '/services',
    },
    {
      title: 'Cloud Native & DevSecOps Architecture',
      tag: 'K8S & AUTOMATED PIPELINES',
      desc: 'Production Kubernetes cluster engineering, GitOps CI/CD automation, and zero-trust cloud migration architectures built for high-throughput enterprise scale.',
      img: '/assets/cloud.webp',
      badge: 'Multi-Cloud Native',
      link: '/services',
    },
  ];

  return (
    <section className="section-spacing" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-left">
          <span className="badge-pill badge-pill-blue">
            <span className="badge-pulse-dot"></span>
            Enterprise Engineering &amp; Operations
          </span>
          <h2 className="text-h2">
            World-Class Engineers &amp; <span className="text-blue-gradient">24/7 Operations Centers</span>
          </h2>
          <p className="section-subtitle">
            Aguna Solutions pairs proprietary AtherMind software with dedicated human-led engineering centers, delivering active cyber defense, high-scale cloud platforms, and verified compliance.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid-4" style={{ marginBottom: '2rem' }}>
          {services.map((srv, idx) => (
            <MotionCard
              key={idx}
              className="card-enterprise"
              style={{
                padding: '0',
                overflow: 'hidden',
                backgroundColor: '#111c30',
                border: '1px solid rgba(85, 164, 255, 0.2)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '155px', backgroundColor: '#070d18' }}>
                <Image
                  src={srv.img}
                  alt={srv.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(11, 17, 32, 0.92)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '3px 8px',
                    borderRadius: '10px',
                    fontSize: '0.68rem',
                    fontWeight: 750,
                    border: '1px solid rgba(85, 164, 255, 0.3)',
                    zIndex: 3,
                  }}
                >
                  {srv.badge}
                </span>
              </div>

              <div style={{ padding: '1.15rem', display: 'flex', flexDirection: 'column', flex: '1' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.06em', color: 'var(--brand-blue)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {srv.tag}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 750, marginBottom: '0.55rem', lineHeight: '1.3', color: '#ffffff' }}>
                  {srv.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45', marginBottom: '1rem', flex: '1' }}>
                  {srv.desc}
                </p>

                <Link
                  href={srv.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--brand-blue)',
                    marginTop: 'auto',
                  }}
                >
                  <span>Explore Service Specification</span>
                  <span>→</span>
                </Link>
              </div>
            </MotionCard>
          ))}
        </div>

        {/* Action Link */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/services" className="btn btn-secondary btn-sm">
            <span>View All Engineering Services &amp; SLAs</span>
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
