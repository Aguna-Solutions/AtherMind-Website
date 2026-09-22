'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  };
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsDropdownOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setProductsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Auto-close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products', hasDropdown: true },
    { href: '/services', label: 'Services' },
    { href: '/clients', label: 'Clients' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  // Left Column: Existing Core Telemetry Platforms
  const corePlatforms = [
    {
      id: 'dam',
      href: '/products#overview',
      title: 'AtherMind IntelliDAM',
      desc: 'Zero-Trust Database Activity Monitoring & Mid-Flight SQL Intercept',
      tag: 'Database Proxy',
    },
    {
      id: 'pdm',
      href: '/products#use-cases',
      title: 'Metronik PDM',
      desc: 'Predictive Equipment Maintenance & Industrial Digital Twin',
      tag: 'Digital Twin',
    },
    {
      id: 'aero',
      href: '/products#use-cases',
      title: 'AtherMind AeroPulse',
      desc: 'Commercial Aviation AI Telemetry & Aircraft Health Monitoring',
      tag: 'Aviation AI',
    },
  ];

  // Right Column: Aguna Solutions AI & Security Products (from agunasolutions.com/products)
  const agunaProducts = [
    {
      id: 'cctv-anomaly',
      href: '/products#cctv-anomaly',
      title: 'CCTV Anomaly Detection',
      desc: 'Edge-Native Video AI Surveillance & YOLO v8 Intrusion Triage',
      tag: 'Security AI',
    },
    {
      id: 'integrity-platform',
      href: '/products#integrity-platform',
      title: 'Athermind Integrity Platform',
      desc: 'Distributed Ledger Cryptographic Hash Anchoring & Audit Provenance',
      tag: 'Audit Provenance',
    },
    {
      id: 'document-governance',
      href: '/products#document-governance',
      title: 'Document & Workflow Governance',
      desc: 'Enterprise NLP Classification & Zero-Trust ABAC Lifecycle',
      tag: 'Enterprise ABAC',
    },
    {
      id: 'industry-analytics',
      href: '/products#industry-analytics',
      title: 'Industry 4.0 Analytics',
      desc: 'Machine Telemetry Monitoring & Predictive Outage Forecasting',
      tag: 'Industrial AI',
    },
  ];

  const handleSubmenuClick = (e, href) => {
    setProductsDropdownOpen(false);
    closeMobileMenu();
    const targetHash = href.split('#')[1];
    if (targetHash && typeof window !== 'undefined' && pathname === '/products') {
      const el = document.getElementById(targetHash);
      if (el) {
        e.preventDefault();
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -90 });
        } else {
          const navOffset = 90;
          const pos = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) - navOffset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
        el.classList.add('is-targeted');
        setTimeout(() => el.classList.remove('is-targeted'), 3000);
      }
    }
  };

  const isLinkActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link href="/" className="brand-logo" aria-label="AtherMind Home">
          <span className="brand-logo-text">ATHERMIND</span>
          <span className="brand-logo-sub">CODE • SHIELD • EVOLVE</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu" aria-label="Primary Navigation">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div
                  key={item.href}
                  className="nav-dropdown-wrapper"
                  ref={dropdownRef}
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <Link
                    href="/products"
                    className={`nav-link nav-dropdown-trigger ${isLinkActive(item.href) ? 'active' : ''}`}
                    onClick={() => {
                      setProductsDropdownOpen(false);
                      if (typeof window !== 'undefined' && pathname === '/products') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    aria-expanded={productsDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{
                        transform: productsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </Link>

                  {/* 2-COLUMN BALANCED DROPDOWN */}
                  <div className={`nav-dropdown-panel ${productsDropdownOpen ? 'is-open' : ''}`}>
                    <div className="nav-dropdown-cols">
                      {/* Left Column: Existing Core Platforms */}
                      <div className="nav-dropdown-col">

                        {corePlatforms.map((prod) => (
                          <Link
                            key={prod.id}
                            href={prod.href}
                            className="dropdown-item"
                            onClick={(e) => handleSubmenuClick(e, prod.href)}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                              <span className="dropdown-item-title">{prod.title}</span>
                              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--brand-blue)', backgroundColor: 'var(--brand-blue-subtle)', padding: '2px 8px', borderRadius: '4px' }}>
                                {prod.tag}
                              </span>
                            </div>
                            <p className="dropdown-item-desc">{prod.desc}</p>
                          </Link>
                        ))}
                      </div>

                      {/* Right Column: Aguna Solutions AI & Security Products */}
                      <div className="nav-dropdown-col">

                        {agunaProducts.map((prod) => (
                          <Link
                            key={prod.id}
                            href={prod.href}
                            className="dropdown-item"
                            onClick={(e) => handleSubmenuClick(e, prod.href)}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                              <span className="dropdown-item-title">{prod.title}</span>
                              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#22d3ee', backgroundColor: 'rgba(34, 211, 238, 0.12)', padding: '2px 8px', borderRadius: '4px' }}>
                                {prod.tag}
                              </span>
                            </div>
                            <p className="dropdown-item-desc">{prod.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="nav-dropdown-footer">
                      <Link href="/products#ecosystem" className="nav-dropdown-footer-link" onClick={(e) => handleSubmenuClick(e, "/products#ecosystem")}
                      >
                        <span>View All Products &amp; Ecosystem</span>
                        <span>→</span>
                      </Link>
                      <Link href="/contact" className="nav-dropdown-footer-link ghost" onClick={closeMobileMenu}
                      >
                        Request Technical Demo
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isLinkActive(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger-btn ${mobileMenuOpen ? 'is-active' : ''}`}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-products-section">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link
              href="/products"
              className="nav-link"
              onClick={() => {
                setMobileMenuOpen(false);
                if (typeof window !== 'undefined' && pathname === '/products') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              style={{ fontWeight: 700 }}
            >
              Products
            </Link>
            <button
              type="button"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', padding: '8px 12px', cursor: 'pointer' }}
              aria-label="Toggle Products Menu"
            >
              <span style={{ display: 'inline-block', transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
                ▼
              </span>
            </button>
          </div>

          {mobileProductsOpen && (
            <div style={{ marginTop: '8px', paddingLeft: '8px' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--brand-blue)', textTransform: 'uppercase', padding: '4px 12px', letterSpacing: '0.08em' }}>
                Core Platforms
              </div>
              {corePlatforms.map((prod) => (
                <Link
                  key={prod.id}
                  href={prod.href}
                  className="mobile-product-link"
                  onClick={(e) => handleSubmenuClick(e, prod.href)}
                >
                  <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{prod.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{prod.tag}</div>
                </Link>
              ))}

              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', padding: '12px 12px 4px', letterSpacing: '0.08em' }}>
                Aguna AI &amp; Security Suite
              </div>
              {agunaProducts.map((prod) => (
                <Link
                  key={prod.id}
                  href={prod.href}
                  className="mobile-product-link"
                  onClick={(e) => handleSubmenuClick(e, prod.href)}
                >
                  <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{prod.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{prod.tag}</div>
                </Link>
              ))}

              <Link href="/products#ecosystem" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--brand-blue)', padding: '12px 12px 8px' }} onClick={(e) => handleSubmenuClick(e, "/products#ecosystem")}
              >
                View Full Products Overview →
              </Link>
            </div>
          )}
        </div>

        {navItems.filter(item => !item.hasDropdown).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${isLinkActive(item.href) ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            {item.label}
          </Link>
        ))}

        <div className="mobile-cta-box">
          <Link href="/contact" className="btn btn-primary btn-lg" style={{ width: '100%', textAlign: 'center' }} onClick={closeMobileMenu}
          >
            <span>Request Demo</span>
            <span className="btn-arrow">→</span>
          </Link>
          <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Aguna Solutions · Enterprise Technologies
          </div>
        </div>
      </div>
    </header>
  );
}
