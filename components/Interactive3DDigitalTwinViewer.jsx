'use client';

import { useState, useEffect } from 'react';

export default function Interactive3DDigitalTwinViewer() {
  const [selectedNode, setSelectedNode] = useState('turbine');
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, [isRotating]);

  const nodes = {
    turbine: {
      title: 'Turbine Engine Shaft #02',
      category: 'Metronik PDM 3D Spatial Replica',
      status: 'OPTIMAL (98.4% Health)',
      temp: '642°C',
      vibration: '0.042 mm/s',
      efficiency: '99.1%',
      recommendation: 'Next scheduled maintenance in 14 days. Zero anomaly detected.',
      color: '#06b6d4',
    },
    database: {
      title: 'Zero-Trust SQL Control Plane',
      category: 'AtherMind IntelliDAM',
      status: 'ACTIVE ENFORCEMENT',
      temp: '32°C (CPU Load 14%)',
      vibration: 'Sub-5ms Query Latency',
      efficiency: '100.0%',
      recommendation: 'ABAC Inline Query Proxy intercept active. 14+ DB targets secured.',
      color: '#14b8a6',
    },
    avionic: {
      title: 'Airframe Flight Telemetry Datalink',
      category: 'AeroPulse Aviation AI',
      status: 'SATCOM LIVE STREAM',
      temp: 'Altitude 36,000 ft',
      vibration: 'Mach 0.84',
      efficiency: '99.8%',
      recommendation: 'EASA / FAA Part-145 Audit Chain intact. BITE diagnostics normal.',
      color: '#22d3ee',
    },
  };

  const currentNode = nodes[selectedNode];

  return (
    <div
      className="glass-panel"
      style={{
        borderRadius: '24px',
        padding: '32px',
        background: 'rgba(5, 10, 20, 0.85)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(203, 213, 225, 0.15)',
        boxShadow: `0 0 50px ${currentNode.color}20`,
        position: 'relative',
        overflow: 'hidden',
        marginTop: '40px',
        marginBottom: '40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#22d3ee',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}
          >
            <span>🌀 3D SPATIAL DIGITAL TWIN EXPLORER</span>
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#cbd5e1', margin: 0 }}>
            Interactive Living Asset Twin Simulator
          </h3>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="btn btn-outline btn-sm"
            style={{
              borderColor: 'rgba(203, 213, 225, 0.2)',
              fontSize: '0.78rem',
              color: isRotating ? '#22d3ee' : '#cbd5e1',
            }}
          >
            {isRotating ? '⏸ Pause 3D Spin' : '▶ Resume 3D Spin'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '28px', alignItems: 'center' }}>
        {/* Interactive Holographic Canvas Display */}
        <div
          style={{
            height: '340px',
            borderRadius: '18px',
            background: 'radial-gradient(circle, rgba(10, 20, 35, 0.95) 0%, rgba(2, 6, 23, 0.98) 100%)',
            border: `1px solid ${currentNode.color}40`,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)',
          }}
        >
          {/* Grid Background Effect */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `linear-gradient(rgba(203, 213, 225, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(203, 213, 225, 0.05) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
              opacity: 0.7,
            }}
          />

          {/* Glowing Holographic Object */}
          <div
            style={{
              transform: `rotateY(${rotation}deg) rotateX(18deg)`,
              transformStyle: 'preserve-3d',
              width: '180px',
              height: '180px',
              position: 'relative',
              transition: 'transform 0.05s linear',
            }}
          >
            {/* Outer Ring */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: `2px dashed ${currentNode.color}`,
                boxShadow: `0 0 25px ${currentNode.color}`,
                animation: 'pulse 2s infinite',
              }}
            />

            {/* Inner Ring */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                border: `2px solid rgba(203, 213, 225, 0.25)`,
                transform: 'rotateX(60deg)',
              }}
            />

            {/* Core Node */}
            <div
              style={{
                position: 'absolute',
                top: '55px',
                left: '55px',
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${currentNode.color}, #0d9488)`,
                boxShadow: `0 0 35px ${currentNode.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000000',
                fontSize: '1.8rem',
                fontWeight: 900,
              }}
            >
              ⚡
            </div>
          </div>

          {/* Floating Data Tags */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              fontSize: '0.78rem',
              color: '#cbd5e1',
              fontFamily: 'monospace',
            }}
          >
            SPATIAL COORD: [X: {(Math.sin(rotation * 0.05) * 42).toFixed(1)}, Y: 18.4, Z: {(Math.cos(rotation * 0.05) * 42).toFixed(1)}]
          </div>
        </div>

        {/* Node Detail Inspector & Switcher */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase' }}>
              Select Digital Twin Node:
            </span>
            {Object.keys(nodes).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedNode(key)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: selectedNode === key ? `1px solid ${nodes[key].color}` : '1px solid rgba(203, 213, 225, 0.15)',
                  background: selectedNode === key ? `${nodes[key].color}20` : 'rgba(10, 18, 30, 0.7)',
                  color: selectedNode === key ? '#ffffff' : '#cbd5e1',
                  fontWeight: 700,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{nodes[key].title}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    background: `${nodes[key].color}30`,
                    color: nodes[key].color,
                  }}
                >
                  {nodes[key].category.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '14px',
              background: 'rgba(10, 18, 30, 0.8)',
              border: '1px solid rgba(203, 213, 225, 0.15)',
            }}
          >
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px' }}>OPERATIONAL METRICS</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: currentNode.color, marginBottom: '8px' }}>
              {currentNode.status}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
              <strong>Primary Parameter:</strong> {currentNode.temp}
              <br />
              <strong>Secondary Sensor:</strong> {currentNode.vibration}
              <br />
              <strong>Model Accuracy:</strong> {currentNode.efficiency}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
