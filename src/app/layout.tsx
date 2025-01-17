import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const joystix = localFont({
  src: "./fonts/joystix.ttf",
  variable: "--font-joystix",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nazarly Digital",
  description: "Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/logo/logo.svg" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${joystix.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
