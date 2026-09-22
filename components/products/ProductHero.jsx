'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductHero({ onExplore }) {
  const handleExploreClick = (e) => {
    e.preventDefault();
    if (onExplore) {
      onExplore();
    } else if (typeof window !== 'undefined') {
      const el = document.getElementById('overview');
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -90 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="product-hero-section">
      <div className="product-container">
        <div className="product-hero-grid">
          {/* Left Column: Decoupled Editorial Typography */}
          <div className="product-hero-copy scroll-anim-item anim-from-left is-visible">
            <div className="product-eyebrow-wrapper">
              <span className="product-eyebrow">PRODUCTS / INTELLIDAM</span>
              <span className="product-eyebrow-pill">NIST SP 800-207</span>
            </div>

            <h1 className="product-hero-headline">
              Intelligent Data.
              <br />
              <span className="teal-accent-text">Smarter Decisions.</span>
            </h1>

            <p className="product-hero-lead">
              AtherMind IntelliDAM secures enterprise database transactions with a unified Zero-Trust 
              control plane — monitoring traffic, applying inline AST query policies dynamically, and 
              governing the full operational lifecycle from cloud core to industrial edge.
            </p>

            <div className="product-hero-actions">
              <button
                type="button"
                onClick={handleExploreClick}
                className="btn-enterprise btn-enterprise-primary"
                id="heroExploreBtn"
              >
                <span>Explore IntelliDAM</span>
                <span className="btn-arrow">↓</span>
              </button>

              <Link
                href="/contact"
                className="btn-enterprise btn-enterprise-ghost"
              >
                <span>Request a Demo</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="product-hero-trust-bar">
              <div className="trust-item">
                <span className="trust-dot" />
                <span>100% Traffic &amp; SQL Capture</span>
              </div>
              <div className="trust-item">
                <span className="trust-dot" />
                <span>&lt; 50ms Monitoring Latency</span>
              </div>
              <div className="trust-item">
                <span className="trust-dot" />
                <span>PostgreSQL • MySQL • Oracle • MongoDB</span>
              </div>
            </div>
          </div>

          {/* Right Column: Independent Product Visual */}
          <div className="product-hero-visual-stage scroll-anim-item anim-from-right is-visible">
            <div className="hero-visual-canvas">
              <div className="hero-image-frame">
                <Image
                  src="/assets/intelligent_data.gif"
                  alt="AtherMind IntelliDAM Zero-Trust Platform UI"
                  width={760}
                  height={480}
                  priority
                  className="hero-product-img"
                />
              </div>

              {/* Floating Real-Time Operational Badges */}
              <div className="hero-floating-chip chip-top-right">
                <div className="chip-pulse-dot" />
                <div className="chip-content">
                  <span className="chip-title">INLINE SQL INTERCEPT</span>
                  <span className="chip-metric">&lt; 5ms Intercept Overhead</span>
                </div>
              </div>

              <div className="hero-floating-chip chip-bottom-left">
                <span className="chip-badge-text">250,000 QUERIES/SEC</span>
                <span className="chip-sub">Zero Client Code Alteration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
