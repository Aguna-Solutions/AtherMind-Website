'use client';

import Image from 'next/image';

export default function ProductOverview() {
  return (
    <section id="overview" className="product-section product-overview-section">
      <div className="product-container">
        {/* Editorial Section Header */}
        <div className="editorial-section-tag scroll-anim-item anim-from-top">
          <span className="tag-number">01</span>
          <span className="tag-divider">/</span>
          <span className="tag-name">OVERVIEW</span>
        </div>

        <div className="product-editorial-two-col">
          {/* Left: Headline & Story */}
          <div className="editorial-text-col scroll-anim-item anim-from-left">
            <h2 className="editorial-headline-large">
              Complete visibility for complex assets.
            </h2>
            <div className="editorial-divider-line" />
            <p className="editorial-body-lead">
              Enterprises manage fragmented data estates spanning cloud databases, distributed SCADA 
              controllers, and mission-critical aviation avionics. AtherMind connects these disparate 
              streams into a unified, low-latency operational plane.
            </p>
            <p className="editorial-body-secondary">
              Through <strong>AtherMind IntelliDAM</strong> (Zero-Trust Database Security), 
              <strong> Metronik PDM</strong> (Predictive Maintenance AI Digital Twin), and 
              <strong> AtherMind AeroPulse</strong> (Aviation AI Telemetry), our platform intercepts 
              query threats mid-flight, forecasts mechanical fatigue 14 days early, and guarantees 
              auditable compliance across the enterprise.
            </p>

            <div className="overview-stats-cluster">
              <div className="overview-stat-unit">
                <span className="stat-value">&lt; 50ms</span>
                <span className="stat-caption">Monitoring Latency</span>
              </div>
              <div className="overview-stat-unit">
                <span className="stat-value">100K+</span>
                <span className="stat-caption">Samples / Sec Throughput</span>
              </div>
              <div className="overview-stat-unit">
                <span className="stat-value">Sub-5ms</span>
                <span className="stat-caption">Query Intercept Blocking</span>
              </div>
            </div>
          </div>

          {/* Right: Decoupled Independent Visual (User Given Image) */}
          <div className="editorial-media-col scroll-anim-item anim-from-right">
            <div className="editorial-media-wrapper">
              <Image
                src="/assets/asset.webp"
                alt="AtherMind Living 3D Digital Twin Platform Core"
                width={720}
                height={460}
                className="editorial-showcase-img"
              />
              <div className="media-caption-bar">
                <span className="caption-label">PHYSICAL-TO-DIGITAL TWIN FABRIC</span>
                <span className="caption-status">REAL-TIME TELEMETRY MAPPING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
