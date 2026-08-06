'use client';

import Link from 'next/link';

export default function TechShowcaseSection() {
  return (
    <section className="section-padding tech-showcase-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>{' '}
            Core Enterprise Capabilities
          </div>
          <h2>AI Digital Twins, Database Security & Managed Ops</h2>
          <p>Explore our living platform engines engineered for high-availability IT, cloud, and industrial edge environments.</p>
        </div>

        <div className="feature-tabs-wrapper">
          <div className="feature-tab-buttons">
            <button className="feature-tab-btn tab-btn-active" data-tech-idx="0">
              <div className="tab-icon-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </div>
              <div className="tab-btn-text">
                <h4>Full-Stack Software Dev</h4>
                <p>Modern Web & Mobile · React / Node / Python</p>
              </div>
            </button>
            <button className="feature-tab-btn" data-tech-idx="1">
              <div className="tab-icon-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <div className="tab-btn-text">
                <h4>Cloud Native & DevOps</h4>
                <p>Cloud Infrastructure · AWS / Azure / GCP</p>
              </div>
            </button>
            <button className="feature-tab-btn" data-tech-idx="2">
              <div className="tab-icon-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="1" x2="9" y2="4" />
                  <line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" />
                  <line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" />
                  <line x1="20" y1="15" x2="23" y2="15" />
                  <line x1="1" y1="9" x2="4" y2="9" />
                  <line x1="1" y1="15" x2="4" y2="15" />
                </svg>
              </div>
              <div className="tab-btn-text">
                <h4>Enterprise AI & Data</h4>
                <p>AI Models · RAG Pipelines · Vector DB</p>
              </div>
            </button>
            <button className="feature-tab-btn" data-tech-idx="3">
              <div className="tab-icon-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="tab-btn-text">
                <h4>24/7 Managed NOC & SOC</h4>
                <p>Always-On Vigilance · &lt;15 min MTTR</p>
              </div>
            </button>
          </div>

          <div className="feature-display-card glass-panel">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">
                <span id="techTerminalTitle">Full-Stack Software Dev Telemetry Engine</span>
              </div>
              <button className="btn-terminal-copy" id="btnCopySnippet">
                <span id="copySnippetTxt">Copy Schema</span>
              </button>
            </div>

            <div className="terminal-body">
              <pre className="code-block"><code id="techCodeSnippet">{`{
  "project": "Enterprise Digital Portal",
  "frontend": ["React 19", "Vite", "TypeScript", "TailwindCSS"],
  "backend": ["Node.js Microservices", "GraphQL API", "PostgreSQL"],
  "performance": "99+ Lighthouse Score",
  "deployment": "Automated CI/CD Pipeline"
}`}</code></pre>
              <div className="card-footer-info">
                <span id="techTabDesc">High-performance React, Next.js, Node.js, and mobile applications engineered for ultra-fast load times and scale.</span>
                <Link href="/products" className="btn btn-outline btn-sm">Explore Suite →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
