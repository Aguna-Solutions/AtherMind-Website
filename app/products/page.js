'use client';

import { useState, useEffect } from 'react';
import './products.css';

import ProductSideNav from '../../components/products/ProductSideNav';
import ProductHero from '../../components/products/ProductHero';
import ProductOverview from '../../components/products/ProductOverview';
import ProductCapabilities from '../../components/products/ProductCapabilities';
import ProductInAction from '../../components/products/ProductInAction';
import ProductHowItWorks from '../../components/products/ProductHowItWorks';
import ProductUseCases from '../../components/products/ProductUseCases';
import ProductImpact from '../../components/products/ProductImpact';
import ProductArchitecture from '../../components/products/ProductArchitecture';
import ProductEcosystem from '../../components/products/ProductEcosystem';
import ProductCTA from '../../components/products/ProductCTA';

export default function ProductsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  // Smooth scroll handler with header offset
  const scrollToSection = (id) => {
    setActiveSection(id);
    if (typeof document === 'undefined') return;
    const element = document.getElementById(id);
    if (element) {
      let scrolled = false;
      if (typeof window !== 'undefined' && window.__lenis) {
        try {
          window.__lenis.scrollTo(element, { offset: -90, duration: 1.2 });
          scrolled = true;
        } catch (e) {
          console.warn('Lenis scroll error:', e);
        }
      }
      if (!scrolled) {
        const navOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + (window.pageYOffset || window.scrollY || 0) - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  // Listen to hash changes in URL and smooth scroll
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // If element exists with that exact id (e.g. ecosystem product card), scroll directly to it!
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          scrollToSection(hash);
          targetElement.classList.add('is-targeted');
          setTimeout(() => targetElement.classList.remove('is-targeted'), 3000);
          return;
        }

        // Map any legacy hashes to section IDs
        const map = {
          dam: 'overview',
          pdm: 'use-cases',
          aero: 'use-cases',
          consoles: 'intelligence',
          'industry-analytics': 'ecosystem',
          'cctv-anomaly': 'ecosystem',
          'database-monitor': 'overview',
          'integrity-platform': 'ecosystem',
          'document-governance': 'ecosystem',
        };
        const targetId = map[hash] || hash;
        scrollToSection(targetId);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Directional Scroll Animation Observer & Active Section Tracking
  useEffect(() => {
    // Safety reveal: mark elements visible immediately so page is never black
    const animElements = document.querySelectorAll('.scroll-anim-item');
    animElements.forEach((el) => el.classList.add('is-visible'));

    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    animElements.forEach((el) => animObserver.observe(el));

    // Section scroll spy observer
    const sectionIds = [
      'overview',
      'capabilities',
      'intelligence',
      'how-it-works',
      'use-cases',
      'impact',
      'architecture',
      'ecosystem',
    ];

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px',
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) spyObserver.observe(el);
    });

    return () => {
      animObserver.disconnect();
      spyObserver.disconnect();
    };
  }, []);

  return (
    <div className="product-page-root">
      {/* Floating Side Navigation Progress Dock */}
      <ProductSideNav activeSection={activeSection} onNavigate={scrollToSection} />

      {/* 1. Product Hero */}
      <ProductHero onExplore={() => scrollToSection('overview')} />

      {/* 2. Product Introduction (01 / OVERVIEW) */}
      <ProductOverview />

      {/* 3. Key Value / Capabilities */}
      <ProductCapabilities />

      {/* 4. Product In Action (02 / INTELLIGENCE) */}
      <ProductInAction />

      {/* 5. How It Works (03 / HOW IT WORKS) */}
      <ProductHowItWorks />

      {/* 6. Use Cases (04 / USE CASES) */}
      <ProductUseCases />

      {/* 7. Product Impact (05 / IMPACT) */}
      <ProductImpact />

      {/* 8. Product Architecture (06 / ARCHITECTURE) */}
      <ProductArchitecture />

      {/* 9. Related Products (07 / ECOSYSTEM) */}
      <ProductEcosystem />

      {/* 10. CTA (08 / CONVERT) */}
      <ProductCTA />
    </div>
  );
}
