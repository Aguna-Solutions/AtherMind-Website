'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.initAthermind) {
      window.initAthermind();
    }
  }, []);

  return (
    <>
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
        {/* SERVICES HERO */}
        <section className="hero hero-subpage">
          <div className="hero-grid">
            <div className="hero-visual">
              <div className="hero-shield-card">
                <div className="shield-glow-backdrop" style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(6, 182, 212, 0.22) 45%, transparent 70%)' }}></div>
                <div className="shield-svg-wrapper">
                  <svg className="shield-svg" viewBox="0 0 340 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="srvRadarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.9" />
                      </linearGradient>
                      <linearGradient id="srvSweepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                      </linearGradient>
                      <filter id="srvGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    <circle cx="170" cy="180" r="140" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
                    <circle cx="170" cy="180" r="105" stroke="rgba(6, 182, 212, 0.25)" strokeWidth="1.5" />
                    <circle cx="170" cy="180" r="70" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1.5" strokeDasharray="8 4" />
                    <circle cx="170" cy="180" r="35" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />

                    <line x1="30" y1="180" x2="310" y2="180" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="170" y1="40" x2="170" y2="320" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" strokeDasharray="4 4" />

                    <g className="shield-ring ring-outer">
                      <path d="M170 180 L170 40 A140 140 0 0 1 310 180 Z" fill="url(#srvSweepGrad)" />
                      <line x1="170" y1="180" x2="310" y2="180" stroke="#10B981" strokeWidth="2.5" filter="url(#srvGlowFilter)" />
                    </g>

                    <circle cx="170" cy="180" r="10" fill="#10B981" filter="url(#srvGlowFilter)" />
                    <circle cx="170" cy="180" r="4" fill="#FFFFFF" />

                    <circle className="shield-ring ring-inner" cx="170" cy="180" r="125" stroke="url(#srvRadarGrad)" strokeWidth="2" strokeDasharray="16 8" />
                  </svg>
                </div>

                <div className="floating-badge badge-top-right glass-panel" style={{ top: '15px', right: '-15px' }}>
                  <div className="badge-icon green">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="badge-info">
                    <span className="badge-title">24/7 Managed SOC</span>
                    <span className="badge-status">Active Threat Defense</span>
                  </div>
                </div>

                <div className="floating-badge badge-bottom-left glass-panel" style={{ bottom: '20px', left: '-15px' }}>
                  <div className="badge-icon cyan">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="badge-info">
                    <span className="badge-title">24/7 NOC Monitoring</span>
                    <span className="badge-status">99.99% Uptime Commitment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-content">
              <div className="hero-meta">
                <span className="hero-status">
                  <span className="hero-pulse"></span>
                  <span>OFFICIAL SERVICE OFFERINGS</span>
                </span>
              </div>

              <h1 className="hero-title">
                <span className="hero-line"><span className="hero-word" data-cursor="lg">Enterprise Technology &</span></span>
                <span className="hero-line">
                  <span className="hero-word gradient-text">24/7 Managed Operations</span>
                </span>
              </h1>

              <p className="hero-sub">
                Aguna Solutions delivers 24/7 Managed SOC & NOC operations, cloud DevSecOps engineering, high-throughput software development, and enterprise AI automation.
              </p>

              <div style={{ marginTop: '24px' }}>
                <a href="https://www.agunasolutions.com/services" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  <span>View Services on Aguna Solutions ↗</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="capabilities" style={{ paddingTop: '20px' }}>
          <div className="container">
            <div className="service-buttons-grid">
              <a href="https://www.agunasolutions.com/services" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-emerald">
                <div className="srv-card-head">
                  <div className="srv-icon-box">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className="srv-tag">24/7 MANAGED SOC</span>
                </div>
                <div className="srv-card-main">
                  <h3 className="srv-title">Managed SOC & Cyber Security</h3>
                  <p className="srv-short-desc">Proactive 24/7 threat hunting, SIEM log monitoring, and automated incident response.</p>
                </div>
                <div className="srv-card-foot">
                  <span className="srv-action-label">Explore Specification</span>
                  <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
                </div>
              </a>

              <a href="https://www.agunasolutions.com/services" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-blue">
                <div className="srv-card-head">
                  <div className="srv-icon-box">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <span className="srv-tag">99.999% NOC SLA</span>
                </div>
                <div className="srv-card-main">
                  <h3 className="srv-title">Managed NOC Operations</h3>
                  <p className="srv-short-desc">Zero-downtime infrastructure monitoring, multi-cloud networking, and round-the-clock ops.</p>
                </div>
                <div className="srv-card-foot">
                  <span className="srv-action-label">Explore Specification</span>
                  <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
                </div>
              </a>

              <a href="https://www.agunasolutions.com/services" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-purple">
                <div className="srv-card-head">
                  <div className="srv-icon-box">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <span className="srv-tag">HIGH-THROUGHPUT</span>
                </div>
                <div className="srv-card-main">
                  <h3 className="srv-title">Web & Mobile App Development</h3>
                  <p className="srv-short-desc">High-performance software architectures engineered for extreme throughput and scale.</p>
                </div>
                <div className="srv-card-foot">
                  <span className="srv-action-label">Explore Specification</span>
                  <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
                </div>
              </a>

              <a href="https://www.agunasolutions.com/services" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-cyan">
                <div className="srv-card-head">
                  <div className="srv-icon-box">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                  </div>
                  <span className="srv-tag">K8S & MULTI-CLOUD</span>
                </div>
                <div className="srv-card-main">
                  <h3 className="srv-title">Cloud Native & DevSecOps</h3>
                  <p className="srv-short-desc">Kubernetes container orchestration, automated CI/CD, and Zero-Trust security governance.</p>
                </div>
                <div className="srv-card-foot">
                  <span className="srv-action-label">Explore Specification</span>
                  <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
                </div>
              </a>

              <a href="https://www.agunasolutions.com/services" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-indigo">
                <div className="srv-card-head">
                  <div className="srv-icon-box">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <span className="srv-tag">OWASP & PTES</span>
                </div>
                <div className="srv-card-main">
                  <h3 className="srv-title">VAPT & Security Audit</h3>
                  <p className="srv-short-desc">Deep penetration testing, vulnerability scanning, and regulatory compliance auditing.</p>
                </div>
                <div className="srv-card-foot">
                  <span className="srv-action-label">Explore Specification</span>
                  <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
                </div>
              </a>

              <a href="https://www.agunasolutions.com/services" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-teal">
                <div className="srv-card-head">
                  <div className="srv-icon-box">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <span className="srv-tag">LLM & INTELLIGENT RPA</span>
                </div>
                <div className="srv-card-main">
                  <h3 className="srv-title">Enterprise AI & Automation</h3>
                  <p className="srv-short-desc">Custom LLM integrations, predictive analytics engines, and automated workflow robotics.</p>
                </div>
                <div className="srv-card-foot">
                  <span className="srv-action-label">Explore Specification</span>
                  <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Toast Container */}
      <div className="toast-container" id="toastContainer"></div>
    </>
  );
}
