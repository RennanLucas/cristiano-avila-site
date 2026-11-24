/** @type {import('next').NextConfig} */
const metricsEnabled = process.env.NEXT_PUBLIC_CLINIC_METRICS_ENABLED === 'true';
// Keep third-party origins disabled until the container and consent are audited.
const gtmScript = metricsEnabled ? ' https://www.googletagmanager.com https://www.googleadservices.com https://www.google.com' : '';
const gtmConnect = metricsEnabled ? ' https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com' : '';
const gtmImage = metricsEnabled ? ' https://www.googletagmanager.com https://www.google.com https://google.com https://googleads.g.doubleclick.net' : '';
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "script-src 'self' 'unsafe-inline'" + gtmScript,
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "img-src 'self' data: blob: https://images.unsplash.com" + gtmImage,
      "connect-src 'self'" + gtmConnect,
      "frame-src https://www.google.com https://www.google.com.br",
      "media-src 'self'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 384, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 192, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/videos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=2592000' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/hipnoterapia-hipnose-clinica', destination: '/especialidades/hipnoterapia', permanent: true },
      { source: '/programacao-neurolinguistica', destination: '/especialidades/pnl', permanent: true },
      { source: '/resultado-de-busca', destination: '/blog', permanent: true },
      { source: '/sobre-2', destination: '/sobre', permanent: true },
    ];
  },
};

export default nextConfig;
