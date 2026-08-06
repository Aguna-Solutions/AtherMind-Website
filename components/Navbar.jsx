'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        setIsHidden(true); // Hide on scroll down
      } else {
        setIsHidden(false); // Show on scroll up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/clients', label: 'Clients' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contacts' },
  ];

  const isLinkActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`nav ${isScrolled ? 'is-scrolled' : ''} ${isHidden ? 'is-hidden' : ''}`} id="nav">
        <div className="nav-inner">
          <Link className="nav-logo header-brand" href="/" data-cursor="lg">
            <div className="logo-animated-container">
              <Image
                src="/assets/logo3.webp"
                alt="AtherMind Brand Logo"
                width={180}
                height={40}
                priority
                className="brand-logo-img brand-svg-logo logo-visible"
                id="brandSvgLogo"
              />
              <Image
                src="/assets/fav3.webp"
                alt="AtherMind Scroll Logo"
                width={40}
                height={40}
                priority
                className="brand-logo-img brand-png-logo logo-hidden"
                id="brandPngLogo"
              />
            </div>
          </Link>

          <nav className="nav-links" aria-label="Primary" id="primaryNav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="md"
                className={`nav-link ${isLinkActive(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}

          </nav>

          <div className="header-actions" id="headerActions">
            <button
              className={`nav-burger ${mobileMenuOpen ? 'is-active' : ''}`}
              id="navBurger"
              aria-label="Open menu"
              data-cursor="lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`} id="mobileMenu" aria-hidden={!mobileMenuOpen}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isLinkActive(item.href) ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <button
          className="theme-toggle-btn mobile-theme-btn"
          id="mobileThemeToggleBtn"
          aria-label="Toggle Light/Dark Theme"
          onClick={toggleTheme}
        >
          <span className="theme-mode-label">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </>
  );
}
