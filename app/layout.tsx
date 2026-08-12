import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "언더독 | MBN 출연자 모집",
  description: "유기견과 사람이 함께 성장하는 MBN 언더독 출연자를 모집합니다.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f8f3e9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
