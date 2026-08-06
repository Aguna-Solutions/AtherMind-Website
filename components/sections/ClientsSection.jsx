'use client';

import Image from 'next/image';

export default function ClientsSection({ currentClient, nextClient, clientShowcases, activeClientIndex, setActiveClientIndex, nextClientIndex }) {
  return (
    <section className="process" id="clients">
      <div className="container">
        <header className="section-head">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '12px', marginBottom: '8px' }}>
            <span className="eyebrow"><span className="eyebrow-dot"></span>Sectors & Ecosystem</span>
          </div>
          <h2 className="section-title">
            Industries Empowered by<br />
            <span className="gradient-text">Aguna Solutions & AtherMind.</span>
          </h2>
          <p className="section-sub">
            Serving mission-critical operations across commercial aviation, manufacturing, energy, mining, and smart infrastructure.
          </p>
        </header>

        <div className="stats-grid glass-panel" style={{ marginBottom: '40px' }}>
          <div className="stat-card">
            <div className="stat-num gradient-text">60%</div>
            <div className="stat-lbl">Unplanned Downtime Slashed</div>
          </div>
          <div className="stat-card">
            <div className="stat-num gradient-text">&lt; 5 min</div>
            <div className="stat-lbl">Mean Time to Detect (MTTD)</div>
          </div>
          <div className="stat-card">
            <div className="stat-num gradient-text">99.99%</div>
            <div className="stat-lbl">NOC Uptime Commitment</div>
          </div>
          <div className="stat-card">
            <div className="stat-num gradient-text">400%</div>
            <div className="stat-lbl">Proven 5-Year ROI</div>
          </div>
        </div>

        <div className="client-showcase-section-tag">TRUSTED BY THE BEST</div>

        <div className="client-showcase-board">
          <div className="client-showcase-inner">
            <div className="client-info-col">
              <span className="client-industry-tag">{currentClient.tag}</span>
              <h3 className="client-headline">{currentClient.headline}</h3>
              <p className="client-quote">{currentClient.quote}</p>
            </div>

            <div className="client-visual-wrapper">
              <div className="client-visual-col">
                <Image
                  src={currentClient.img}
                  alt={currentClient.name}
                  width={540}
                  height={380}
                  unoptimized
                  loading="lazy"
                  className="client-visual-img"
                />
              </div>

              <div className="client-visual-peek" onClick={() => setActiveClientIndex(nextClientIndex)} style={{ cursor: 'pointer' }}>
                <Image
                  src={nextClient.img}
                  alt={nextClient.name}
                  width={180}
                  height={120}
                  unoptimized
                  loading="lazy"
                />
              </div>

              <button className="client-next-arrow-btn" onClick={() => setActiveClientIndex(nextClientIndex)} aria-label="Next Case Study">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="client-logos-tabs-bar">
            {clientShowcases.map((client, idx) => (
              <button
                key={client.id}
                className={`client-tab-btn ${activeClientIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveClientIndex(idx)}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={40}
                  unoptimized
                  loading="lazy"
                  className="client-tab-logo"
                />
                <span className="client-tab-name">{client.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* COMPACT HIGH-DENSITY GRAPH BOARD */}
        <div className="compact-graph-card glass-panel" style={{ marginTop: '40px' }}>
          <div className="compact-graph-head">
            <span className="compact-graph-title">⚡ Operational Impact Benchmarks</span>
            <div className="compact-legend">
              <span className="c-leg reactive"><span className="dot"></span> Without NOC</span>
              <span className="c-leg aspl"><span className="dot"></span> With ASPL AI</span>
            </div>
          </div>

          <div className="compact-graph-grid">
            <div className="c-graph-item">
              <div className="c-graph-title-row">
                <span className="c-graph-name">Downtime Detection Speed</span>
              </div>
              <div className="c-dual-bars-group">
                <div className="c-single-bar-row">
                  <span className="c-bar-label bad">Without NOC</span>
                  <div className="c-bar-track">
                    <div className="c-bar-fill bad" style={{ width: '25%' }}>
                      <span className="c-bar-txt">Hours / Days</span>
                    </div>
                  </div>
                </div>
                <div className="c-single-bar-row">
                  <span className="c-bar-label good">With ASPL</span>
                  <div className="c-bar-track">
                    <div className="c-bar-fill good" style={{ width: '95%' }}>
                      <span className="c-bar-txt">&lt; 5 Mins (95% Faster)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="c-graph-item">
              <div className="c-graph-title-row">
                <span className="c-graph-name">Incident Resolution MTTR</span>
              </div>
              <div className="c-dual-bars-group">
                <div className="c-single-bar-row">
                  <span className="c-bar-label bad">Without NOC</span>
                  <div className="c-bar-track">
                    <div className="c-bar-fill bad" style={{ width: '20%' }}>
                      <span className="c-bar-txt">14+ Hours</span>
                    </div>
                  </div>
                </div>
                <div className="c-single-bar-row">
                  <span className="c-bar-label good">With ASPL</span>
                  <div className="c-bar-track">
                    <div className="c-bar-fill good" style={{ width: '92%' }}>
                      <span className="c-bar-txt">&lt; 15 Mins (90% MTTR Cut)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="c-graph-item">
              <div className="c-graph-title-row">
                <span className="c-graph-name">Guaranteed System Uptime</span>
              </div>
              <div className="c-dual-bars-group">
                <div className="c-single-bar-row">
                  <span className="c-bar-label bad">Without NOC</span>
                  <div className="c-bar-track">
                    <div className="c-bar-fill bad" style={{ width: '40%' }}>
                      <span className="c-bar-txt">Frequent Outages</span>
                    </div>
                  </div>
                </div>
                <div className="c-single-bar-row">
                  <span className="c-bar-label good">With ASPL</span>
                  <div className="c-bar-track">
                    <div className="c-bar-fill good" style={{ width: '99%' }}>
                      <span className="c-bar-txt">99.999% Guaranteed SLA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="c-graph-item">
              <div className="c-graph-title-row">
                <span className="c-graph-name">IT Staff Innovation Focus</span>
              </div>
              <div className="c-dual-bars-group">
                <div className="c-single-bar-row">
                  <span className="c-bar-label bad">Without NOC</span>
                  <div className="c-bar-track">
                    <div className="c-bar-fill bad" style={{ width: '35%' }}>
                      <span className="c-bar-txt">35% Innovation</span>
                    </div>
                  </div>
                </div>
                <div className="c-single-bar-row">
                  <span className="c-bar-label good">With ASPL</span>
                  <div className="c-bar-track">
                    <div className="c-bar-fill good" style={{ width: '92%' }}>
                      <span className="c-bar-txt">92% Focus (4x Boost)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
