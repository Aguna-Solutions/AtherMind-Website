export const controlPlaneData = {
  dam: {
    name: 'AtherMind IntelliDAM (Zero-Trust Database Security)',
    theme: 'teal-theme',
    accentColor: '#14b8a6',
    subtitle:
      'AtherMind IntelliDAM secures every database transaction with a unified Zero-Trust control plane that monitors traffic, applies inline query policies dynamically, and governs the full lifecycle from cloud core to industrial edge.',
    topLoop: 'AGENTIC ANOMALY DETECTION & REAL TIME QUERY INTERCEPT',
    bottomLoop: 'AUTOMATED POLICY ENFORCEMENT, ISO 27001 & COMPLIANCE AUDITING',
    col1Title: 'ALL DATA SOURCES',
    col1Items: [
      { icon: '👤', name: 'Human DBAs' },
      { icon: '💻', name: 'App Microservices' },
      { icon: '⚡', name: 'Edge / PLCs' },
    ],
    col2Title: 'Discover & Monitor',
    col2Icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    col2Points: [
      '100% Traffic & SQL Capture',
      '<50ms Monitoring Latency',
      '10+ DBs: Postgres, MySQL, Oracle, Mongo',
      'Session & Resource I/O Analytics',
    ],
    col3Title: 'Control & Enforce',
    col3Icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    col3Points: [
      'Zero-Trust RBAC & ABAC Policy',
      'Sub-5ms Mid-Flight Query Blocking',
      'Passwordless & JIT Privileged Access',
      'TLS 1.3 & AES-256 Air-Gapped OT Guard',
    ],
    col4Title: 'Govern & Comply',
    col4Icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    col4Points: [
      'Behavioural AI Injection & Leak Triage',
      'Tamper-Proof Chain-of-Custody Logs',
      '1-Click GDPR, HIPAA, DPDPA Export',
      'Splunk, QRadar & Sentinel SIEM Sync',
    ],
    col5Title: 'ALL TARGETS',
    col5Items: [
      { icon: '☁️', name: 'Cloud Core DBs' },
      { icon: '🗄️', name: 'SaaS Stores' },
      { icon: '📡', name: 'Industrial Edge' },
    ],
  },
  pdm: {
    name: 'Metronik PDM (Predictive Maintenance AI Digital Twin)',
    theme: 'cyan-theme',
    accentColor: '#06b6d4',
    subtitle:
      'Metronik PDM fuses IIoT sensor telemetry and autonomous drone feeds into a living 3D digital replica, predicting equipment failure 14 days before breakdown with 95%+ accuracy.',
    topLoop: 'REAL-TIME IIOT SENSOR & AUTONOMOUS DRONE TELEMETRY INGESTION',
    bottomLoop: 'PREDICTIVE FAILURE FORECASTING & AUTOMATED WORK-ORDER DISPATCH',
    col1Title: 'DATA SOURCES',
    col1Items: [
      { icon: '📡', name: 'IIoT Sensors' },
      { icon: '🚁', name: 'LiDAR Drones' },
      { icon: '🏭', name: 'SCADA / PLCs' },
    ],
    col2Title: 'Connect & Ingest',
    col2Icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    col2Points: [
      'MQTT, OPC-UA & Modbus Protocol Bridge',
      'Autonomous MAVLink Drone Telemetry',
      '100K+ Samples/sec Stream Throughput',
      'Sub-50ms Edge Ingestion Pipeline',
    ],
    col3Title: 'Digitize & Replicate',
    col3Icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
      </svg>
    ),
    col3Points: [
      'Live 3D Spatial Asset Replica',
      'Real-Time Thermal & Stress Heatmaps',
      'ATA / ISO Parameter State Machine',
      'Continuous Asset Health Scoring',
    ],
    col4Title: 'Predict & Act',
    col4Icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    col4Points: [
      'LSTM + XGBoost + CNN AI Ensemble',
      '95%+ Failure Forecast Accuracy',
      'Auto-Raised SAP PM & Maximo Tickets',
      '60% Downtime & Maintenance OPEX Cut',
    ],
    col5Title: 'OPERATIONAL IMPACT',
    col5Items: [
      { icon: '📉', name: '60% Downtime Cut' },
      { icon: '⏱️', name: '14-Day Warning' },
      { icon: '📈', name: '400% 5-Yr ROI' },
    ],
  },
  aero: {
    name: 'AtherMind AeroPulse (Aviation AI Telemetry)',
    theme: 'teal-theme',
    accentColor: '#22d3ee',
    subtitle:
      'AeroPulse transforms terabytes of flight telemetry (ACARS, FOQA, EHM) into live aircraft digital twins, forecasting engine decay and eliminating AOG delays across commercial fleets.',
    topLoop: 'AVIONICS & FLIGHT DATALINK TELEMETRY STREAM INGESTION',
    bottomLoop: 'PREDICTIVE ENGINE HEALTH SCORING & EASA/FAA AUDIT COMPLIANCE',
    col1Title: 'FLIGHT FEEDS',
    col1Items: [
      { icon: '✈️', name: 'ARINC Avionics' },
      { icon: '📡', name: 'ACARS & FOQA' },
      { icon: '🔍', name: 'Borescope & CV' },
    ],
    col2Title: 'Stream & Decode',
    col2Icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.93 4.93A10 10 0 0 1 19.07 4.93" />
        <path d="M7.76 7.76a6 6 0 0 1 8.48 0" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    col2Points: [
      'ACARS, CPDLC & SATCOM Datalinks',
      'ARINC 664 (AFDX) Avionics Tap',
      'BITE Code & EHM Margin Extraction',
      'Sub-second Flight Deck Parsing',
    ],
    col3Title: 'Flight Digital Twin',
    col3Icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.6-.1-1.2.1-1.5.6l-1.1 1.7c-.3.5-.2 1.2.3 1.6L8 15l-3 3-2.5-.5L1 19l3 3 1.5-1.5L5 18l3-3 3.4 5c.4.5 1.1.6 1.6.3l1.7-1.1c.5-.3.7-.9.6-1.5z" />
      </svg>
    ),
    col3Points: [
      'Live Tail-by-Tail Systems Map',
      'Turbine EGT Decay & Oil Temp Curves',
      'Airframe Fatigue & Hydraulic Maps',
      '3D Borescope Anomaly Alignment',
    ],
    col4Title: 'Forecast & Dispatch',
    col4Icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polygon points="12 6 12 12 16 14" />
      </svg>
    ),
    col4Points: [
      '95%+ Component RUL Prediction',
      'Auto-Reserved AMOS & TRAX Parts Staging',
      '50% Aircraft-on-Ground Delay Cut',
      'EASA & FAA Part-145 Audit Evidence',
    ],
    col5Title: 'FLEET OUTCOMES',
    col5Items: [
      { icon: '🛬', name: '50% AOG Cut' },
      { icon: '⛽', name: '1.5% Fuel Saved' },
      { icon: '🛡️', name: '100% EASA/FAA' },
    ],
  },
};
