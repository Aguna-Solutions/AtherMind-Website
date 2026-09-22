import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import LenisProvider from '../components/LenisProvider';
import CyberMeshBackground from '../components/CyberMeshBackground';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Athermind - code. shield.evolve',
  description:
    'AtherMind by Aguna Solutions — Enterprise Zero-Trust Database Defense, AI Digital Twins, and 24/7 Managed NOC/SOC Operations.',
  icons: {
    icon: '/assets/fav3.webp',
    shortcut: '/assets/fav3.webp',
    apple: '/assets/fav3.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="icon" href="/assets/fav3.webp" type="image/webp" />
        <link rel="shortcut icon" href="/assets/fav3.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/assets/fav3.webp" />
      </head>
      <body className={montserrat.className}>
        <CyberMeshBackground />
        <LenisProvider>
          {/* Global Navigation Header */}
          <Navbar />

          {/* Main Landmark Container */}
          <main id="main-content" style={{ position: 'relative', minHeight: '80vh' }}>
            <PageTransition>{children}</PageTransition>
          </main>

          {/* Global Enterprise Footer */}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
