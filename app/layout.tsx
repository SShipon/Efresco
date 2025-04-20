import type { Metadata } from 'next';
import { Barlow_Condensed, } from 'next/font/google';
import './globals.css';
import SessionProvider from './components/SessionProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'EFRESCO',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${barlowCondensed.variable}`}>
        <SessionProvider>
          {/* ✅ Navbar will be inside the SessionProvider */}
          <Navbar />  
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}