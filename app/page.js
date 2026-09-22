'use client';

import Link from 'next/link';
import DynamicTextRotator from '../components/DynamicTextRotator';
import TechShowcaseSection from '../components/sections/TechShowcaseSection';
import ImpactSection from '../components/sections/ImpactSection';
import ProductsSection from '../components/sections/ProductsSection';
import ServicesSection from '../components/sections/ServicesSection';
import ClientsSection from '../components/sections/ClientsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION WITH CINEMATIC CYBER VIDEO BACKGROUND */}
      <section className="hero-section" id="home" style={{ position: 'relative', overflow: 'hidden', minHeight: 'clamp(620px, 86vh, 880px)', display: 'flex', alignItems: 'center', backgroundColor: '#070d18' }}>
        {/* Authentic Freepik Cyber Security & Data Protection HD Video Stage */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/provenrun_hero_animation.gif"
            alt="AtherMind Sovereign Cyber Defense"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '70% center',
              opacity: 0.72,
              filter: 'brightness(1.05) contrast(1.10)',
            }}
          />
          {/* Directional Contrast Scrim: Preserves left typography while showcasing animated holographic shield */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(6, 11, 23, 0.94) 0%, rgba(6, 11, 23, 0.78) 46%, rgba(6, 11, 23, 0.32) 78%, rgba(6, 11, 23, 0.12) 100%), linear-gradient(180deg, rgba(6, 11, 23, 0.35) 0%, transparent 42%, rgba(6, 11, 23, 0.92) 100%)',
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="hero-content" style={{ maxWidth: '900px' }}>
            <span className="hero-tagline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <span className="badge-pulse-dot" style={{ backgroundColor: 'var(--brand-blue)' }} />
              CODE · SHIELD · EVOLVE
            </span>

            <h1
              className="text-display hero-title"
              style={{
                marginBottom: '1.25rem',
                lineHeight: '1.16',
                letterSpacing: '-0.02em',
                color: '#ffffff',
              }}
            >
              <span style={{ display: 'block' }}>
                Build Intelligent Systems.
              </span>
              <span style={{ display: 'block', marginTop: '6px' }}>
                Protect
              </span>
              <span style={{ display: 'block', marginTop: '4px', minHeight: '1.2em' }}>
                <DynamicTextRotator words={['Database Assets.', 'Zero-Trust Defenses.', 'Aviation Fleets.', 'Industrial Lines.', 'Banking Rails.']} />
              </span>
            </h1>

            <p
              className="hero-lead"
              style={{
                fontSize: '0.92rem',
                color: '#cbd5e1',
                lineHeight: '1.65',
                marginBottom: '1.75rem',
                maxWidth: '680px',
              }}
            >
              AtherMind by Aguna Solutions architects mission-critical digital systems for global enterprises—unifying zero-trust database defense, living digital twins, and autonomous telemetry into a sovereign operational platform.
            </p>

            <div className="hero-actions" style={{ marginBottom: '2.25rem', gap: '12px', display: 'flex', flexWrap: 'wrap' }}>
              <a
                href="#products"
                className="btn btn-primary"
                style={{ padding: '9px 18px', fontSize: '0.86rem', minHeight: '38px', borderRadius: '8px' }}
              >
                <span>Explore Platform Suite</span>
                <span className="btn-arrow">↓</span>
              </a>
              <Link
                href="/contact"
                className="btn btn-secondary"
                style={{ padding: '9px 18px', fontSize: '0.86rem', minHeight: '38px', borderRadius: '8px' }}
              >
                <span>Talk to an Expert</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>

            {/* Verified Proof Strip - Strictly 1 Line */}
            <div
              className="hero-proof-bar"
              style={{
                background: 'rgba(11, 17, 32, 0.75)',
                backdropFilter: 'blur(10px)',
                borderRadius: '10px',
                border: '1px solid rgba(85, 164, 255, 0.2)',
                padding: '10px 18px',
                display: 'inline-flex',
                flexWrap: 'nowrap',
                alignItems: 'center',
                gap: '1.35rem',
                maxWidth: '100%',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
              }}
            >
              <div className="hero-proof-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', flexShrink: 0, fontSize: '0.82rem' }}>
                <span className="proof-icon-check" style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>✓</span>
                <span style={{ color: '#e2e8f0', fontWeight: 500 }}>NIST SP 800-207 Zero-Trust</span>
              </div>
              <div className="hero-proof-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', flexShrink: 0, fontSize: '0.82rem' }}>
                <span className="proof-icon-check" style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>✓</span>
                <span style={{ color: '#e2e8f0', fontWeight: 500 }}>Sub-5ms Query Enforcement</span>
              </div>
              <div className="hero-proof-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', flexShrink: 0, fontSize: '0.82rem' }}>
                <span className="proof-icon-check" style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>✓</span>
                <span style={{ color: '#e2e8f0', fontWeight: 500 }}>14-Day Failure Prediction</span>
              </div>
              <div className="hero-proof-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', flexShrink: 0, fontSize: '0.82rem' }}>
                <span className="proof-icon-check" style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>✓</span>
                <span style={{ color: '#e2e8f0', fontWeight: 500 }}>ISO 27001 &amp; SOC 2 Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Telemetry Floating Pill in Hero Bottom-Right */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(11, 17, 32, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(85, 164, 255, 0.3)',
            borderRadius: 'var(--radius-full)',
            padding: '6px 14px',
            fontSize: '0.74rem',
            color: '#22d3ee',
            fontWeight: 750,
          }}
          className="hero-live-indicator"
        >
          <span className="badge-pulse-dot" style={{ backgroundColor: '#22d3ee', width: '6px', height: '6px' }} />
          <span>24/7 Sovereign Cyber Defense Active</span>
        </div>
      </section>

      {/* 2. THE ENTERPRISE CHALLENGE SECTION */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--brand-silver)', borderBottom: '1px solid var(--brand-silver)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'center' }}>
            <div>
              <span className="badge-pill badge-pill-blue">The Enterprise Reality</span>
              <h2 className="text-h2" style={{ marginBottom: '1rem' }}>
                Complex Systems Demand <span className="text-blue-gradient">Proactive Engineering</span>
              </h2>
              <p className="text-body" style={{ marginBottom: '1.25rem' }}>
                As enterprise architectures expand across hybrid multi-cloud backbones, industrial edge IoT, and distributed microservices, traditional perimeter security and reactive maintenance fail to protect critical data.
              </p>
              <p className="text-body">
                AtherMind bridges this operational gap by continuously monitoring real-time telemetry, applying inline enforcement at the database kernel level, and predicting equipment anomalies weeks before they disrupt business continuity.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card-enterprise" style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--brand-blue)', marginBottom: '4px' }}>
                  CHALLENGE 01
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  Database Exfiltration &amp; Privileged Access Leaks
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Traditional firewalls cannot inspect mid-flight SQL transactions or prevent compromised DBA accounts from leaking sensitive datasets.
                </p>
              </div>

              <div className="card-enterprise" style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--brand-blue)', marginBottom: '4px' }}>
                  CHALLENGE 02
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  Unplanned Industrial Downtime &amp; High Penalties
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Periodic inspections fail to capture micro-vibrations and thermal stress that precede catastrophic machinery and flight engine failure.
                </p>
              </div>

              <div className="card-enterprise" style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--brand-blue)', marginBottom: '4px' }}>
                  CHALLENGE 03
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  24/7 Operations Coverage &amp; Sovereign Defense
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Internal IT teams face alert fatigue and staffing shortages, requiring dedicated sovereign NOC/SOC engineers to achieve sub-15m MTTR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES (BUILD · SECURE · PREDICT · OPERATE) */}
      <TechShowcaseSection />

      {/* 4. ATHERMIND PLATFORMS (IntelliDAM · Metronik PDM · AeroPulse) */}
      <ProductsSection />

      {/* 5. VERIFIED BUSINESS IMPACT METRICS */}
      <ImpactSection />

      {/* 6. ENTERPRISE ENGINEERING SERVICES */}
      <ServicesSection />

      {/* 7. CLIENT SUCCESS STORIES & CASE STUDIES */}
      <ClientsSection />

      {/* 8. ABOUT AGUNA SOLUTIONS & ATHERMIND */}
      <AboutSection />

      {/* 9. FINAL CALL TO ACTION */}
      <ContactSection />

      <style jsx>{`
        .hero-proof-bar::-webkit-scrollbar {
          height: 4px;
        }

        @media (max-width: 768px) {
          .hero-live-indicator {
            position: static !important;
            margin-top: 1.25rem !important;
            display: inline-flex !important;
          }
        }
        @media (max-width: 640px) {
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-cta-group :global(.btn) {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }
        }
        .hero-proof-bar::-webkit-scrollbar-thumb {
          background: rgba(85, 164, 255, 0.3);
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
