import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NomadKorea — 대한민국 디지털 노마드 도시 탐색",
  description:
    "한국에서 디지털 노마드로 살기 좋은 도시를 찾아보세요. 와이파이, 카페, 물가, 교통 등 노마드 생활 조건을 한눈에 비교하세요.",
  keywords: ["디지털노마드", "한국", "카페", "코워킹", "한달살기"],
  openGraph: {
    title: "NomadKorea",
    description: "대한민국 디지털 노마드를 위한 도시 평가 플랫폼",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
