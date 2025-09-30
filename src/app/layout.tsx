import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextExpo - Yaratıcı Tasarım Ajansı",
  description: "Modern ve yaratıcı tasarım çözümleri sunan profesyonel tasarım ajansı. Web tasarım, grafik tasarım, marka kimliği ve dijital pazarlama hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
