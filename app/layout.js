import './globals.css';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import LenisProvider from '../components/LenisProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'AtherMind — CODE . SHIELD . EVOLVE | Aguna Solutions',
  description:
    'AtherMind (Aguna Solutions) — Driving Digital Transformation with AI, Cloud Native DevSecOps, Big Data Analytics, Cyber Security (24/7 Managed NOC/SOC) & Robotics.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning className={montserrat.variable}>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              var theme = localStorage.getItem('theme') || 'dark';
              document.documentElement.setAttribute('data-theme', theme);
            })();
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        <LenisProvider>

          {/* Global Navigation Header */}
          <Navbar />

          {/* Page Content with Smooth Route Transition */}
          <main style={{ position: 'relative', overflow: 'hidden' }}>
            <PageTransition>{children}</PageTransition>
          </main>

          {/* Global Footer */}
          <Footer />
        </LenisProvider>

        <Script src="/three.min.js" strategy="beforeInteractive" />
        <Script src="/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
