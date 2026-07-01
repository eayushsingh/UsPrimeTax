import type { NextConfig } from "next";
import helmet from 'helmet';

const nextConfig: NextConfig = {
  experimental: {
    turbopack: {
      root: process.cwd(),
    },
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          // Prevent MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // XSS Protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // HSTS (force HTTPS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          // Content Security Policy (CSP) — most important
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net", // Framer Motion, GSAP CDN
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://wa.me https://api.whatsapp.com https://api.emailjs.com",
              "frame-src 'self' https://calendly.com",
              "object-src 'none'",
              "media-src 'self'",
              "manifest-src 'self'",
            ].join('; ')
          },
          // Permissions Policy (old Feature-Policy)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), usb=(), payment=()'
          },
          // Prevent browsers from caching sensitive data
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
    ]
  },
  // Hide Next.js version
  poweredByHeader: false,
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Enable strict mode
  reactStrictMode: true,
  // Compress responses
  compress: true,
}

export default nextConfig;
