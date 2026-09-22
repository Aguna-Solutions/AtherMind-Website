'use client';

import { useState, useEffect } from 'react';

export default function ProductSideNav({ activeSection, onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show side nav only after scrolling past hero
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: '01 Overview' },
    { id: 'capabilities', label: '02 Capabilities' },
    { id: 'intelligence', label: '03 Intelligence' },
    { id: 'how-it-works', label: '04 How It Works' },
    { id: 'use-cases', label: '05 Use Cases' },
    { id: 'impact', label: '06 Impact' },
    { id: 'architecture', label: '07 Architecture' },
    { id: 'ecosystem', label: '08 Ecosystem' },
  ];

  if (!isVisible) return null;

  return (
    <aside className="editorial-side-nav" aria-label="Product Page Story Navigation">
      <div className="side-nav-inner">
        <div className="side-nav-track">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onNavigate) onNavigate(item.id);
                }}
                className={`side-nav-item ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                <span className="side-nav-indicator" />
                <span className="side-nav-label">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
