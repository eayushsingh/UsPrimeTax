import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SecurityProvider } from "@/components/providers/SecurityProvider";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Global Prime Tax | Expert Tax & Business Solutions",
  description: "Professional global tax preparation, business setup, bookkeeping, and international tax services for individuals, NRIs, and businesses worldwide.",
  keywords: "global tax services, international tax filing, business tax, bookkeeping, ITIN, tax planning",
  openGraph: {
    title: "Global Prime Tax",
    description: "Your trusted partner for global tax and business solutions.",
    url: "https://usprimetax.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Prime Tax",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
        <SecurityProvider>
          <SmoothScrollProvider>
            {children}
            <FloatingWhatsApp />
          </SmoothScrollProvider>
        </SecurityProvider>
      </body>
    </html>
  );
}
