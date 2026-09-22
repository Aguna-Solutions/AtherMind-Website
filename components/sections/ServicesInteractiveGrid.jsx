'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ServiceCard({ srv, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={srv.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        scrollMarginTop: '110px',
        opacity: 1,
        transform: 'none',
        filter: 'none',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
      }}
    >
      <div
        className="service-clean-card"
        style={{
          backgroundColor: '#0d172a',
          border: isHovered
            ? '1px solid rgba(85, 164, 255, 0.55)'
            : '1px solid rgba(85, 164, 255, 0.2)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          boxShadow: isHovered
            ? '0 16px 36px rgba(0, 0, 0, 0.7), 0 0 24px rgba(85, 164, 255, 0.22)'
            : '0 8px 24px rgba(0, 0, 0, 0.45)',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {/* Visual Header Stage */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '160px',
            backgroundColor: '#070d18',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(85, 164, 255, 0.15)',
          }}
        >
          <Image
            src={srv.img}
            alt={srv.title}
            fill
            style={{
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            sizes="(max-width: 900px) 100vw, 50vw"
            unoptimized
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(7, 13, 24, 0.1) 40%, rgba(13, 23, 42, 0.95) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Metric / SLA Badge */}
          <span
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'rgba(7, 13, 24, 0.9)',
              backdropFilter: 'blur(10px)',
              color: '#22d3ee',
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '0.72rem',
              fontWeight: 800,
              border: '1px solid rgba(34, 211, 238, 0.4)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              letterSpacing: '0.04em',
              zIndex: 3,
            }}
          >
            {srv.badge}
          </span>
        </div>

        {/* Card Body */}
        <div
          style={{
            padding: '1.25rem 1.4rem 1.4rem',
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
          }}
        >
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: 'var(--brand-blue)',
              marginBottom: '0.35rem',
              textTransform: 'uppercase',
            }}
          >
            {srv.tag}
          </span>

          <h2
            style={{
              fontSize: '1.18rem',
              fontWeight: 800,
              marginBottom: '0.55rem',
              lineHeight: '1.3',
              color: '#ffffff',
            }}
          >
            {srv.title}
          </h2>

          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.55',
              marginBottom: '1rem',
            }}
          >
            {srv.desc}
          </p>

          {/* Key Deliverables / Highlights */}
          {srv.highlights && srv.highlights.length > 0 && (
            <div style={{ marginBottom: '1.25rem', marginTop: 'auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {srv.highlights.map((h, hIdx) => (
                  <div
                    key={hIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '0.78rem',
                      color: '#cbd5e1',
                    }}
                  >
                    <span style={{ color: 'var(--brand-blue)', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>
                      ✓
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <Link
              href="/contact"
              className="btn btn-primary btn-sm"
              style={{
                flex: '1',
                minHeight: '36px',
                padding: '8px 14px',
                fontSize: '0.82rem',
                borderRadius: '8px',
                textAlign: 'center',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                fontWeight: 750,
                textDecoration: 'none',
              }}
            >
              <span>Inquire Service</span>
              <span className="btn-arrow" style={{ fontSize: '0.9rem' }}>→</span>
            </Link>

            <a
              href={srv.agunaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{
                minHeight: '36px',
                padding: '8px 14px',
                fontSize: '0.82rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                fontWeight: 700,
                textDecoration: 'none',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
              }}
            >
              <span>Aguna Portal</span>
              <span style={{ fontSize: '0.85rem' }}>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesInteractiveGrid({ services }) {
  return (
    <div
      className="services-grid-container"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'clamp(1.5rem, 2.5vw, 2.25rem)',
        marginBottom: '3.5rem',
      }}
    >
      {services.map((srv, idx) => (
        <ServiceCard key={srv.id} srv={srv} index={idx} />
      ))}

      <style jsx global>{`
        @media (max-width: 880px) {
          .services-grid-container {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
