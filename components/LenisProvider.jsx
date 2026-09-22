'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like exponential inertia
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
      anchors: { offset: -90 },
    });

    if (typeof window !== 'undefined') {
      window.__lenis = lenis;
      window.lenis = lenis;
    }

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      if (typeof window !== 'undefined') {
        window.__lenis = null;
        window.lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
}
