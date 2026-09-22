'use client';

import Image from 'next/image';

export default function MarqueeTicker({ items = [], speed = 28, activeIndex = null, onSelect = null }) {
  const duplicated = [...items, ...items];

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        padding: '10px 0',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: '16px',
          width: 'max-content',
          animation: `marqueeSlide ${speed}s linear infinite`,
          alignItems: 'center',
        }}
      >
        {duplicated.map((item, idx) => {
          const itemIndex = idx % items.length;
          const isSelected = activeIndex !== null && activeIndex === itemIndex;
          return (
            <div
              key={`${item.id || item.name}-${idx}`}
              onClick={() => onSelect && onSelect(itemIndex)}
              style={{
                backgroundColor: '#ffffff',
                padding: '6px 18px',
                borderRadius: '8px',
                border: isSelected ? '2px solid var(--brand-blue)' : '1px solid rgba(85, 164, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '136px',
                height: '46px',
                boxShadow: isSelected
                  ? '0 0 16px rgba(85, 164, 255, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)'
                  : '0 4px 12px rgba(0, 0, 0, 0.22)',
                cursor: onSelect ? 'pointer' : 'default',
                transition: 'all 0.2s ease',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '102px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={102}
                  height={28}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  unoptimized
                />
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
