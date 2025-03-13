import type { Metadata } from "next";
import { Barlow_Condensed, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProvider from "./components/SessionProvider";
import Navbar from "./components/Navbar";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"]
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "BD_Restaurant",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable}`}>
        <SessionProvider>
          {/* ✅ Navbar will be inside the SessionProvider */}
          <Navbar />  
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
