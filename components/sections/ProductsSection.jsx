'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MotionCard from '../MotionCard';

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState('dam');

  const products = {
    dam: {
      id: 'dam',
      name: 'AtherMind IntelliDAM',
      tag: 'ZERO-TRUST DATABASE DEFENSE',
      headline: 'Sub-5ms Query Inspection & Real-Time Exfiltration Block',
      summary:
        'AtherMind IntelliDAM safeguards enterprise databases by monitoring raw SQL query streams, applying inline attribute-based access controls (ABAC), and isolating data exfiltration attempts in real-time without client code modifications.',
      highlights: [
        '100% Traffic & SQL Capture with Sub-50ms Monitoring Overhead',
        'ABAC & Zero-Trust Enforcement Aligned with NIST SP 800-207',
        'Native Multi-DB Support: Oracle, PostgreSQL, MySQL, MongoDB, SAP ERP',
        'Tamper-Proof Merkle Tree Cryptographic Audit Logging',
      ],
      mediaType: 'video',
      src: '/AtherMind_IntelliDAM.mp4',
      poster: '/assets/AtherMind_IntelliDAM_poster.webp',
      badge: 'Animated AST Parser',
      client: 'GNFC Chemical Core',
      link: '/products#overview',
    },
    soc: {
      id: 'soc',
      name: '24/7 Sovereign Cyber Shield & SOC',
      tag: 'CONTINUOUS THREAT INTERCEPT & DEFENSE',
      headline: 'Sub-15 Min Incident Resolution & 99.999% SLA Uptime',
      summary:
        'AtherMind Managed SOC provides real-time automated packet inspection, kernel eBPF threat neutralization, and AI SIEM triage. Deployed for banking networks and telecom backbones with zero alert fatigue.',
      highlights: [
        'Autonomous Kernel Threat Intercept & Live Session Isolation',
        'Sub-15 Minute MTTD/MTTR with Cryptographic Forensic Audit Trails',
        'ISO 27001, SOC 2 Type II & DPDPA Sovereign Compliance Shield',
        '24/7 Dedicated Systems Engineering & Red Team Pod Support',
      ],
      mediaType: 'video',
      src: '/assets/cyber_security_freepik.mp4',
      poster: '/assets/cyber_security_freepik_poster.jpg',
      badge: 'Live SOC Cyber Feed',
      client: 'NPST & Orange Telecom',
      link: '/services',
    },
    pdm: {
      id: 'pdm',
      name: 'Metronik PDM',
      tag: 'PREDICTIVE MAINTENANCE DIGITAL TWIN',
      headline: '14-Day Advance Equipment Failure Forecasting',
      summary:
        'Metronik PDM fuses high-frequency SCADA telemetry and drone LiDAR feeds into a living 3D spatial replica. Neural AI ensembles analyze vibration and thermal curves to detect anomalies 14 days before failure.',
      highlights: [
        'MQTT, OPC-UA & Modbus Edge Protocol Ingestion at 100K+ samples/sec',
        'Living 3D Spatial Digital Asset Twin Synchronized at 60 FPS',
        'LSTM + XGBoost Predictive Degradation Models (95%+ Accuracy)',
        'Automated Maintenance Work-Order Ticket Dispatch (SAP PM & Maximo)',
      ],
      mediaType: 'image',
      src: '/assets/ather_digital_twin_core.webp',
      badge: 'Living 3D Replica',
      client: 'Musashi Precision Auto',
      link: '/products#capabilities',
    },
    aero: {
      id: 'aero',
      name: 'AtherMind AeroPulse',
      tag: 'COMMERCIAL AVIATION TELEMETRY AI',
      headline: '50% AOG Maintenance Delay Reduction for Fleets',
      summary:
        'AeroPulse ingests live ACARS, EHM, and ARINC 664 flight datalinks to create live aircraft engine twins, predicting exhaust gas temperature decay and scheduling proactive line maintenance before delays occur.',
      highlights: [
        'Direct ARINC 664 / AFDX SATCOM Flight Datalink Decoding',
        'Predictive Turbofan Engine Degradation & Rotor Thermal Health',
        'Continuous EASA & FAA Part-145 Tamper-Proof Audit Trails',
        'Slashed Commercial Aircraft-on-Ground (AOG) Incidents by >50%',
      ],
      mediaType: 'image',
      src: '/assets/aeropulse_aviation_preview.webp',
      badge: 'Aerospace Telemetry',
      client: 'Star Air Regional Fleet',
      link: '/products#use-cases',
    },
  };

  const current = products[activeProduct] || products.dam;

  return (
    <section className="section-spacing" id="products" style={{ paddingTop: '1.25rem', paddingBottom: '1.5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" style={{ marginBottom: '1.15rem' }}>
          <span className="badge-pill badge-pill-blue" style={{ marginBottom: '0.4rem' }}>
            <span className="badge-pulse-dot"></span>
            AtherMind Platform Suite
          </span>
          <h2 className="text-h2" style={{ marginBottom: '0.4rem' }}>
            Mission-Critical Software for <span className="text-blue-gradient">High-Reliability Enterprises</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '0.92rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.5 }}>
            Purpose-built platforms designed to protect sovereign database infrastructure, forecast industrial equipment failure, and defend enterprise backbones 24/7.
          </p>
        </div>

        {/* Platform Pill */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          <div
            className="btn btn-sm btn-primary"
            style={{
              padding: '6px 18px',
              fontSize: '0.84rem',
              borderRadius: 'var(--radius-full)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 0 16px rgba(85, 164, 255, 0.3)',
              cursor: 'default',
            }}
          >
            <span>🛡️ AtherMind IntelliDAM</span>
          </div>
        </div>

        {/* Full-Card Cinematic Media Showcase — Zero Text Inside Card, Enlarged Card Length */}
        <MotionCard
          glowColor="transparent"
          style={{
            maxWidth: '880px',
            width: '100%',
            margin: '0 auto',
            backgroundColor: '#070d18',
            border: '1px solid rgba(85, 164, 255, 0.35)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(85, 164, 255, 0.15)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1920 / 897',
              backgroundColor: '#070d18',
              overflow: 'hidden',
            }}
          >
            {current.mediaType === 'video' ? (
              <video
                key={current.src}
                autoPlay
                loop
                muted
                playsInline
                poster={current.poster}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              >
                <source src={current.src} type="video/mp4" />
              </video>
            ) : (
              <div
                style={{
                  position: 'absolute',
                  top: '-14.05%',
                  left: 0,
                  width: '100%',
                  height: '120.4%',
                }}
              >
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 992px) 100vw, 880px"
                  priority
                  unoptimized
                />
              </div>
            )}
          </div>
        </MotionCard>

        {/* Bottom CTA Strip */}
        <div style={{ textAlign: 'center', marginTop: '1.15rem' }}>
          <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginRight: '8px' }}>
            Need a custom architectural deployment or air-gapped installation?
          </span>
          <Link href="/contact" style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.84rem' }}>
            Consult our engineering team →
          </Link>
        </div>
      </div>
    </section>
  );
}
