'use client';

import Link from 'next/link';

export default function ProductsSection({ activeTab, setActiveTab, activeData }) {
  return (
    <section className="work" id="products" style={{ paddingTop: '64px', paddingBottom: '72px' }}>
      <div className="container">
        <header className="section-head text-center" style={{ marginBottom: '36px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '6px 20px', borderRadius: '30px', background: 'rgba(34, 211, 238, 0.12)', border: '1px solid rgba(34, 211, 238, 0.35)', color: '#22d3ee', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', boxShadow: '0 0 20px rgba(34, 211, 238, 0.25)' }}>
            <span className="live-pulse-dot" style={{ width: '8px', height: '8px' }}></span>
            ⚡ ATHERMIND ZERO-TRUST PLATFORM
          </div>
          <h2 className="section-title" style={{ fontSize: '2.7rem', fontWeight: 900, marginBottom: '14px', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
            One Platform to <span className="gradient-text">Secure Every Database & Identity</span>
          </h2>
          <p className="section-sub" style={{ fontSize: '1.08rem', maxWidth: '760px', margin: '0 auto', lineHeight: 1.6 }}>
            Unified real-time telemetry, sub-microsecond query inspection, and automated zero-trust governance across hybrid cloud and industrial enterprise environments.
          </p>
        </header>

        <div className="control-plane-wrapper">
          {/* PRODUCT SWITCHER TABS & DIAGRAM BOARD */}
          <div className="cp-product-tabs" style={{ marginBottom: '24px' }}>
            <button
              className={`cp-tab-btn tab-dam ${activeTab === 'dam' ? 'active theme-emerald' : ''}`}
              onClick={() => setActiveTab('dam')}
              style={activeTab === 'dam' ? { borderColor: '#10b981', color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', boxShadow: '0 0 20px rgba(16, 185, 129, 0.25)' } : {}}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>AtherMind IntelliDAM (Zero-Trust Security)</span>
            </button>

            <button
              className={`cp-tab-btn tab-pdm ${activeTab === 'pdm' ? 'active theme-blue' : ''}`}
              onClick={() => setActiveTab('pdm')}
              style={activeTab === 'pdm' ? { borderColor: '#3b82f6', color: '#3b82f6', background: 'rgba(59, 130, 246, 0.15)', boxShadow: '0 0 20px rgba(59, 130, 246, 0.25)' } : {}}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
              </svg>
              <span>Metronik PDM (AI Digital Twin)</span>
            </button>

            <button
              className={`cp-tab-btn tab-aero ${activeTab === 'aero' ? 'active theme-purple' : ''}`}
              onClick={() => setActiveTab('aero')}
              style={activeTab === 'aero' ? { borderColor: '#a855f7', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', boxShadow: '0 0 20px rgba(168, 85, 247, 0.25)' } : {}}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.6-.1-1.2.1-1.5.6l-1.1 1.7c-.3.5-.2 1.2.3 1.6L8 15l-3 3-2.5-.5L1 19l3 3 1.5-1.5L5 18l3-3 3.4 5c.4.5 1.1.6 1.6.3l1.7-1.1c.5-.3.7-.9.6-1.5z" />
              </svg>
              <span>AtherMind AeroPulse (Aviation AI)</span>
            </button>
          </div>

          {/* Main Control Plane Board with Dynamic Color Matching Active Product */}
          <div
            className={`control-plane-board glass-panel ${activeData.theme}`}
            style={{
              borderColor: activeData.accentColor,
              boxShadow: `0 24px 60px ${activeData.accentColor}25`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: activeData.accentColor, background: `${activeData.accentColor}18`, padding: '6px 14px', borderRadius: '20px', border: `1px solid ${activeData.accentColor}44` }}>
                Active Product: {activeData.name || 'AtherMind IntelliDAM'}
              </span>
            </div>

            <p className="cp-subtitle text-left" style={{ fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '20px' }}>
              {activeData.subtitle}
            </p>

            {/* Top Flow Loop Arrow */}
            <div className="cp-flow-loop">
              <span style={{ color: activeData.accentColor }}>←</span>
              <div className="cp-loop-line" style={{ background: activeData.accentColor, opacity: 0.4 }}></div>
              <span className="cp-loop-title" style={{ color: activeData.accentColor, background: `${activeData.accentColor}18`, border: `1px solid ${activeData.accentColor}44` }}>
                {activeData.topLoop}
              </span>
              <div className="cp-loop-line" style={{ background: activeData.accentColor, opacity: 0.4 }}></div>
              <span style={{ color: activeData.accentColor }}>→</span>
            </div>

            {/* 5 Columns Architectural Grid */}
            <div className="cp-columns-grid" style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {/* Column 1: Sources */}
              <div className="cp-column-card glass-panel" style={{ padding: '20px 16px', textAlign: 'center', borderColor: `${activeData.accentColor}35` }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.85, marginBottom: '20px', textAlign: 'center' }}>
                  {activeData.col1Title}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                  {activeData.col1Items && activeData.col1Items.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: `${activeData.accentColor}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', border: `1px solid ${activeData.accentColor}44` }}>
                        {item.icon}
                      </div>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Discover / Ingest */}
              <div className={`pillar-card glass-panel cp-pillar-card ${activeData.theme}`} style={{ padding: '20px 16px', borderColor: `${activeData.accentColor}44` }}>
                <div className="cp-radar-icon" style={{ width: '44px', height: '44px', margin: '0 auto 12px', color: activeData.accentColor, background: `${activeData.accentColor}18`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${activeData.accentColor}44` }}>
                  {activeData.col2Icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '16px', color: activeData.accentColor }}>{activeData.col2Title}</h3>
                <ul className="cp-bullets-list" style={{ fontSize: '0.84rem', lineHeight: '1.5' }}>
                  {activeData.col2Points && activeData.col2Points.map((pt, idx) => (
                    <li key={idx} style={{ marginBottom: '10px' }}>{pt}</li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Control / Digitize */}
              <div className={`pillar-card glass-panel cp-pillar-card ${activeData.theme}`} style={{ padding: '20px 16px', borderColor: `${activeData.accentColor}44` }}>
                <div className="cp-radar-icon" style={{ width: '44px', height: '44px', margin: '0 auto 12px', color: activeData.accentColor, background: `${activeData.accentColor}18`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${activeData.accentColor}44` }}>
                  {activeData.col3Icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '16px', color: activeData.accentColor }}>{activeData.col3Title}</h3>
                <ul className="cp-bullets-list" style={{ fontSize: '0.84rem', lineHeight: '1.5' }}>
                  {activeData.col3Points && activeData.col3Points.map((pt, idx) => (
                    <li key={idx} style={{ marginBottom: '10px' }}>{pt}</li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Govern / Predict */}
              <div className={`pillar-card glass-panel cp-pillar-card ${activeData.theme}`} style={{ padding: '20px 16px', borderColor: `${activeData.accentColor}44` }}>
                <div className="cp-radar-icon" style={{ width: '44px', height: '44px', margin: '0 auto 12px', color: activeData.accentColor, background: `${activeData.accentColor}18`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${activeData.accentColor}44` }}>
                  {activeData.col4Icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '16px', color: activeData.accentColor }}>{activeData.col4Title}</h3>
                <ul className="cp-bullets-list" style={{ fontSize: '0.84rem', lineHeight: '1.5' }}>
                  {activeData.col4Points && activeData.col4Points.map((pt, idx) => (
                    <li key={idx} style={{ marginBottom: '10px' }}>{pt}</li>
                  ))}
                </ul>
              </div>

              {/* Column 5: Targets */}
              <div className="cp-column-card glass-panel" style={{ padding: '20px 16px', textAlign: 'center', borderColor: `${activeData.accentColor}35` }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.85, marginBottom: '20px', textAlign: 'center' }}>
                  {activeData.col5Title}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                  {activeData.col5Items && activeData.col5Items.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: `${activeData.accentColor}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', border: `1px solid ${activeData.accentColor}44` }}>
                        {item.icon}
                      </div>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Small Know More About Products CTA Button */}
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link
              href="/products"
              className="btn btn-outline btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 22px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 700,
                borderColor: `${activeData.accentColor}66`,
                color: activeData.accentColor,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <span>Know More About Products →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
