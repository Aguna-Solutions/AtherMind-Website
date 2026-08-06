'use client';

export default function ServicesSection() {
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

          <div style={{ marginTop: '20px' }}>
            <a href="https://www.agunasolutions.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              <span>View All Services on Aguna Solutions </span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </header>

        {/* SERVICES BUTTON DIRECTORY GRID */}
        <div className="service-buttons-grid">
          <a href="https://www.agunasolutions.com/" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-emerald">
            <div className="srv-icon-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="srv-info">
              <span className="srv-tag">24/7 Managed SOC</span>
              <h3 className="srv-title">Managed SOC & Cyber Security</h3>
            </div>
            <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
          </a>

          <a href="https://www.agunasolutions.com/" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-blue">
            <div className="srv-icon-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div className="srv-info">
              <span className="srv-tag">99.999% NOC SLA</span>
              <h3 className="srv-title">Managed NOC Operations</h3>
            </div>
            <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
          </a>

          <a href="https://www.agunasolutions.com/" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-purple">
            <div className="srv-icon-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div className="srv-info">
              <span className="srv-tag">High-Throughput</span>
              <h3 className="srv-title">Web & Mobile App Development</h3>
            </div>
            <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
          </a>

          <a href="https://www.agunasolutions.com/" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-cyan">
            <div className="srv-icon-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
            </div>
            <div className="srv-info">
              <span className="srv-tag">K8s & Multi-Cloud</span>
              <h3 className="srv-title">Cloud Native & DevSecOps</h3>
            </div>
            <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
          </a>

          <a href="https://www.agunasolutions.com/" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-indigo">
            <div className="srv-icon-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="srv-info">
              <span className="srv-tag">OWASP & PTES</span>
              <h3 className="srv-title">VAPT & Security Audit</h3>
            </div>
            <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
          </a>

          <a href="https://www.agunasolutions.com/" target="_blank" rel="noopener noreferrer" className="service-redirect-btn glass-panel theme-teal">
            <div className="srv-icon-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="srv-info">
              <span className="srv-tag">LLM & Intelligent RPA</span>
              <h3 className="srv-title">Enterprise AI & Automation</h3>
            </div>
            <div className="srv-arrow-box"><span className="srv-arrow">↗</span></div>
          </a>
        </div>
      </div>
    </section>
  );
}
