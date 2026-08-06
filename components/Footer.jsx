'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" style={{ borderTop: '1px solid rgba(203, 213, 225, 0.15)', paddingTop: '32px', paddingBottom: '32px' }}>
      <div className="container">
        <div className="footer-compact-main" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div className="footer-brand-section">
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <p className="brand-mini-tagline" style={{ cursor: 'pointer' }}>CODE · SHIELD · EVOLVE</p>
            </Link>
          </div>

          <div className="footer-nav-pills">
            <Link href="/" className="footer-nav-link">Home</Link>
            <Link href="/products" className="footer-nav-link">Products</Link>
            <Link href="/services" className="footer-nav-link">Services</Link>
            <Link href="/clients" className="footer-nav-link">Clients</Link>
            <Link href="/about" className="footer-nav-link">About Us</Link>
            <Link href="/contact" className="footer-nav-link">Contacts</Link>
          </div>

          <div className="footer-right-section" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div className="compliance-pills" style={{ display: 'flex', gap: '8px' }}>
              <Link href="/about" className="comp-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>🛡️ ISO 27001</Link>
              <Link href="/about" className="comp-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>🔒 SOC2 Ready</Link>
              <Link href="/services" className="comp-badge" style={{ textDecoration: 'none', cursor: 'pointer' }}>🌐 99.99% SLA</Link>
            </div>

            {/* UPWARD ARROW BUTTON WITH RELIABLE SMOOTH SCROLL */}
            <button
              type="button"
              onClick={scrollToTop}
              className="scroll-top-btn"
              title="Back to Top"
              style={{ cursor: 'pointer', background: 'transparent', border: '1px solid rgba(20, 184, 166, 0.4)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22d3ee', fontWeight: 800 }}
            >
              ↑
            </button>

            {/* THEME TOGGLE BUTTON */}
            <button
              type="button"
              onClick={toggleTheme}
              className="btn btn-outline btn-sm"
              aria-label="Toggle Light/Dark Theme"
              title="Toggle Light or Dark Theme"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 700,
                background: theme === 'dark' ? 'rgba(20, 184, 166, 0.15)' : 'rgba(15, 23, 42, 0.08)',
                borderColor: theme === 'dark' ? 'rgba(34, 211, 238, 0.4)' : 'rgba(15, 23, 42, 0.25)',
                color: theme === 'dark' ? '#22d3ee' : '#0f172a',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {theme === 'dark' ? (
                <>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                  </svg>
                  <span>Light</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="footer-bottom-line" style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>© 2026 Aguna Solutions Pvt. Ltd. (AtherMind). All Rights Reserved.</div>
          <div className="footer-legal-links">
            <Link href="/contact">Privacy Policy</Link> • <Link href="/contact">Terms of Service</Link> •{' '}
            <Link href="/contact">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
