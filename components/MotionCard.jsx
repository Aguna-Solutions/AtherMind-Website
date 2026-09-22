'use client';

import { useState, useRef } from 'react';

export default function MotionCard({ children, className = '', style = {}, glowColor = 'rgba(85, 164, 255, 0.18)' }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    // Subtle 3D tilt
    const tiltX = (percentY - 50) * -0.06;
    const tiltY = (percentX - 50) * 0.06;

    setCoords({ x: percentX, y: percentY });
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        position: 'relative',
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)',
        transition: isHovered ? 'transform 0.1s ease-out, box-shadow 0.2s ease' : 'transform 0.4s ease, box-shadow 0.4s ease',
        boxShadow: isHovered
          ? '0 16px 36px -8px rgba(0, 0, 0, 0.7), 0 0 24px rgba(85, 164, 255, 0.2)'
          : '0 8px 24px -4px rgba(0, 0, 0, 0.45)',
        ...style,
      }}
    >
      {/* Subtle dynamic radial glow overlay following cursor */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: isHovered
            ? `radial-gradient(circle at ${coords.x}% ${coords.y}%, ${glowColor} 0%, transparent 65%)`
            : 'transparent',
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          opacity: isHovered ? 1 : 0,
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}
