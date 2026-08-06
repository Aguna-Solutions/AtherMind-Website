'use client';

import { useState, useEffect } from 'react';

export default function InteractiveTelemetryConsole() {
  const [activeTab, setActiveTab] = useState('dam');
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState('ALL SYSTEMS NOMINAL');
  const [latency, setLatency] = useState('0.42ms');
  const [metricCount, setMetricCount] = useState(1485290);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetricCount((prev) => prev + Math.floor(Math.random() * 18) + 4);
      setLatency((0.35 + Math.random() * 0.15).toFixed(2) + 'ms');
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const scenarios = {
    dam: {
      name: 'AtherMind IntelliDAM',
      badge: 'ZERO-TRUST DATABASE SECURITY',
      accentColor: '#14b8a6',
      btnLabel: '⚡ Test Mid-Flight Threat Intercept',
      defaultLogs: [
        '[SECURITY] Air-Gapped Proxy Pipeline Initialized',
        '[MONITOR] Ingesting 100% SQL Transactions from Oracle, Postgres & MongoDB',
        '[ENFORCE] Zero-Trust ABAC Policy Verified: User DBA_Admin_04',
        '[SIEM] Live Sync Active with Splunk & Microsoft Sentinel',
      ],
      attackLog: [
        '⚠️ ALERT: Unauthorized SQL Injection Attempt Detected from IP 192.168.1.142',
        '🛡️ INTERCEPT: Inline Mid-Flight Query Terminated in < 3.2ms',
        '🔒 ACTION: Session Quarantined & Automated SIEM Security Alert Raised',
        '✅ POSTURE: Database Engine Protected, Zero Data Leaked',
      ],
    },
    pdm: {
      name: 'Metronik PDM',
      badge: 'PREDICTIVE MAINTENANCE DIGITAL TWIN',
      accentColor: '#06b6d4',
      btnLabel: '📡 Ingest LiDAR & Drone Telemetry',
      defaultLogs: [
        '[IIoT] Sub-50ms MQTT Protocol Stream Active across 1,200 Sensors',
        '[TWIN] Living 3D Spatial Digital Replica Synced at 60 FPS',
        '[AI MODEL] LSTM + XGBoost Ensemble Analyzing Vibration & Thermal Curves',
        '[HEALTH] Fleet Average Operational Health Index: 98.6%',
      ],
      attackLog: [
        '⚠️ ANOMALY: Vibration Spike (+42%) Detected on Turbine B-4 Bearing',
        '🔮 AI PREDICTION: Bearing Breakdown Forecast in 11.4 Days (97.8% Confidence)',
        '🤖 AUTOMATION: SAP PM Work-Order Ticket #WO-88491 Automatically Issued',
        '✅ OUTCOME: Unplanned Downtime Risk Mitigated with $140,000 OPEX Savings',
      ],
    },
    aero: {
      name: 'AeroPulse Aviation',
      badge: 'COMMERCIAL FLEET ENGINE HEALTH AI',
      accentColor: '#0284c7',
      btnLabel: '✈️ Parse Flight ACARS & Avionics Stream',
      defaultLogs: [
        '[AVIONICS] Listening on ARINC 664 / AFDX SATCOM Datalink',
        '[FLEET] 84 Commercial Aircraft Flight Twins Updated Live',
        '[ENGINE] EGT Decay & Hydro Pressure Curves within Standard Limits',
        '[COMPLIANCE] Continuous EASA & FAA Part-145 Audit Logging Engaged',
      ],
      attackLog: [
        '⚠️ TELEMETRY: EGT Margin Drift Detected on Engine #2 (Boeing 787 Fleet)',
        '🔮 AI FORECAST: Rotor Thermal Fatigue Threshold Reached in 48 Flight Hours',
        '📦 DISPATCH: Parts Staged at Destination Hub (Borescope Inspection Scheduled)',
        '✅ OUTCOME: Zero AOG Delay, Aircraft Remains Fully Flight-Safe',
      ],
    },
  };

  const currentScenario = scenarios[activeTab];

  const handleSimulate = () => {
    setIsSimulating(true);
    setStatus('SIMULATING HIGH-THREAT EVENT...');
    setLogs((prev) => [...prev, ...currentScenario.attackLog]);

    setTimeout(() => {
      setIsSimulating(false);
      setStatus('PROTECTED & SECURED — ALL THREATS MITIGATED');
    }, 1800);
  };

  return (
    <div
      className="glass-panel interactive-telemetry-card"
      style={{
        borderRadius: '24px',
        padding: '28px',
        border: '1px solid rgba(20, 184, 166, 0.4)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Background Animated Light Sweep */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `radial-gradient(circle, ${currentScenario.accentColor}12 0%, transparent 60%)`,
          pointerEvents: 'none',
          transition: 'all 0.5s ease',
        }}
      />

      {/* Header Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              borderRadius: '20px',
              background: `${currentScenario.accentColor}22`,
              border: `1px solid ${currentScenario.accentColor}55`,
              color: currentScenario.accentColor,
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              marginBottom: '6px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: currentScenario.accentColor,
                boxShadow: `0 0 10px ${currentScenario.accentColor}`,
                animation: 'pulse 1.5s infinite',
              }}
            />
            {currentScenario.badge}
          </div>
          <h3 className="telemetry-title" style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
            {currentScenario.name} Interactive Telemetry Console
          </h3>
        </div>

        {/* Tab Selector - Theme Colored Buttons, No Outer Container Box */}
        <div style={{ display: 'flex', gap: '8px', background: 'transparent', border: 'none', padding: 0 }}>
          {Object.keys(scenarios).map((key) => {
            const isTabActive = activeTab === key;
            const accent = scenarios[key].accentColor;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  setLogs([]);
                  setStatus('ALL SYSTEMS NOMINAL');
                }}
                className={`telemetry-tab-btn ${isTabActive ? 'active' : ''}`}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  border: isTabActive ? `1px solid ${accent}` : '1px solid rgba(15, 23, 42, 0.18)',
                  background: isTabActive ? `${accent} !important` : 'rgba(203, 213, 225, 0.25)',
                  color: isTabActive ? '#ffffff !important' : '#0f172a',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isTabActive ? `0 0 15px ${accent}80` : 'none',
                }}
              >
                {key.toUpperCase()} ENGINE
              </button>
            );
          })}
        </div>
      </div>

      {/* Metrics Banner */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '20px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="telemetry-metric-card">
          <div className="t-metric-lbl">
            Processed Telemetry
          </div>
          <div className="t-metric-val" style={{ color: currentScenario.accentColor }}>
            {metricCount.toLocaleString()} events
          </div>
        </div>

        <div className="telemetry-metric-card">
          <div className="t-metric-lbl">
            Telemetry Latency
          </div>
          <div className="t-metric-val" style={{ color: '#06b6d4' }}>{latency}</div>
        </div>

        <div className="telemetry-metric-card">
          <div className="t-metric-lbl">
            Engine Posture
          </div>
          <div className="t-metric-val" style={{ color: '#10b981' }}>
            {status}
          </div>
        </div>
      </div>

      {/* Terminal Console View with High-Contrast Direct Colors */}
      <div className="telemetry-terminal-box" style={{ background: '#030812', padding: '16px', borderRadius: '14px', border: '1px solid rgba(20, 184, 166, 0.45)' }}>
        <div className="t-log-hdr" style={{ marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.04em' }}>
          <span style={{ color: '#22d3ee' }}>// ATHERMIND LIVE CONTROL STREAM - PROTOCOL ACTIVE</span>
        </div>
        {currentScenario.defaultLogs.map((log, i) => (
          <div key={`def-${i}`} className="t-log-line-default" style={{ marginBottom: '4px' }}>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>{log}</span>
          </div>
        ))}
        {logs.map((log, i) => {
          const isAlert = log.includes('ALERT') || log.includes('ANOMALY') || log.includes('TELEMETRY');
          return (
            <div key={`log-${i}`} className="t-log-line-attack" style={{ marginBottom: '4px' }}>
              <span style={{ color: isAlert ? '#22d3ee' : '#34d399', fontWeight: 800 }}>{log}</span>
            </div>
          );
        })}
      </div>

      {/* Action Trigger Button */}
      <div style={{ marginTop: '20px', textAlign: 'right', position: 'relative', zIndex: 1 }}>
        <button
          onClick={handleSimulate}
          disabled={isSimulating}
          className="btn btn-primary"
          style={{
            background: `linear-gradient(135deg, ${currentScenario.accentColor}, #0d9488)`,
            border: 'none',
            color: '#ffffff',
            fontWeight: 800,
            padding: '12px 24px',
            borderRadius: '12px',
            cursor: isSimulating ? 'wait' : 'pointer',
            boxShadow: `0 0 20px ${currentScenario.accentColor}60`,
            transition: 'all 0.3s ease',
          }}
        >
          <span>{isSimulating ? 'Processing Event Simulation...' : currentScenario.btnLabel}</span>
        </button>
      </div>
    </div>
  );
}
