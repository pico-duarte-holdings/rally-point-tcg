import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://rallypointtcg.com'),
  title: 'Rally Point TCG - Veteran Owned Trading Card Store',
  description: 'Veteran-owned trading card business. Our Pokémon, One Piece, Lorcana, and baseball collection is being prepared for online listings.',
  keywords: 'trading cards, TCG, Pokemon, One Piece, Lorcana, baseball, collectibles',
  authors: [{ name: 'Rally Point TCG' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Rally Point TCG',
    description: 'Veteran Owned. Mission Ready. Game On.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>

          <div className="flex flex-col min-h-screen bg-dark-bg">
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>

      </body>
    </html>
  );
}
