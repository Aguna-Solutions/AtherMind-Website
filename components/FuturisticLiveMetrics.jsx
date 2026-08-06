'use client';

import { useState } from 'react';

export default function FuturisticLiveMetrics() {
  const [fleetSize, setFleetSize] = useState(500); // 50 to 5000 servers/drones
  const [dbQueriesPerSec, setDbQueriesPerSec] = useState(50000); // 10k to 500k

  // Calculate live dynamic ROI outcomes
  const downtimeSavedHours = Math.round((fleetSize * 0.42));
  const opexSavedUSD = (fleetSize * 820 + dbQueriesPerSec * 0.12).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
  const riskReductionPct = Math.min(99.9, (95 + (fleetSize / 5000) * 4.9)).toFixed(1);

  return (
    <div
      className="glass-panel"
      style={{
        borderRadius: '24px',
        padding: '32px',
        background: 'rgba(5, 10, 20, 0.85)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(203, 213, 225, 0.15)',
        boxShadow: '0 0 50px rgba(34, 211, 238, 0.15)',
        marginTop: '32px',
        marginBottom: '32px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 16px',
            borderRadius: '20px',
            background: 'rgba(34, 211, 238, 0.12)',
            border: '1px solid rgba(34, 211, 238, 0.3)',
            color: '#22d3ee',
            fontSize: '0.78rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}
        >
          ⚡ REAL-TIME ENTERPRISE IMPACT CALCULATOR
        </div>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#cbd5e1', margin: 0 }}>
          Interactive Enterprise ROI & Risk Mitigation Simulator
        </h3>
        <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginTop: '6px' }}>
          Adjust your infrastructure scale parameters to project AtherMind’s automated cost savings and SLA protection.
        </p>
      </div>

      {/* Sliders Input Controls */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '32px',
          padding: '20px',
          borderRadius: '16px',
          background: 'rgba(10, 18, 30, 0.7)',
          border: '1px solid rgba(203, 213, 225, 0.15)',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1' }}>
              Infrastructure Asset Scale (Servers / Edge IIoT / Aircraft):
            </label>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#22d3ee' }}>{fleetSize} Units</span>
          </div>
          <input
            type="range"
            min="50"
            max="5000"
            step="50"
            value={fleetSize}
            onChange={(e) => setFleetSize(Number(e.target.value))}
            style={{
              width: '100%',
              accentColor: '#22d3ee',
              cursor: 'pointer',
            }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1' }}>
              Daily Database Queries / Telemetry Packets:
            </label>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#14b8a6' }}>
              {(dbQueriesPerSec / 1000).toFixed(0)}k / sec
            </span>
          </div>
          <input
            type="range"
            min="10000"
            max="500000"
            step="10000"
            value={dbQueriesPerSec}
            onChange={(e) => setDbQueriesPerSec(Number(e.target.value))}
            style={{
              width: '100%',
              accentColor: '#14b8a6',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>

      {/* Calculated Dynamic Metrics Showcase Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        <div
          style={{
            padding: '20px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 211, 238, 0.05))',
            border: '1px solid rgba(20, 184, 166, 0.35)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
            Projected OPEX Savings / Yr
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#2dd4bf', marginTop: '6px' }}>
            {opexSavedUSD}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '4px' }}>
            Direct downtime & breach cut
          </div>
        </div>

        <div
          style={{
            padding: '20px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(13, 148, 136, 0.05))',
            border: '1px solid rgba(34, 211, 238, 0.35)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
            Downtime Hours Prevented
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#22d3ee', marginTop: '6px' }}>
            {downtimeSavedHours.toLocaleString()} hrs / yr
          </div>
          <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '4px' }}>
            14-Day predictive failure warning
          </div>
        </div>

        <div
          style={{
            padding: '20px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.2), rgba(203, 213, 225, 0.08))',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
            Threat Exposure Cut
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#cbd5e1', marginTop: '6px' }}>
            {riskReductionPct}%
          </div>
          <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '4px' }}>
            Zero-Trust inline SQL intercept
          </div>
        </div>
      </div>
    </div>
  );
}
