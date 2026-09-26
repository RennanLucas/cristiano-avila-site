/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 384, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 192, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cristianoavilapsicologo.com.br',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/hipnoterapia-hipnose-clinica',
        destination: '/especialidades/hipnoterapia',
        permanent: true,
      },
      {
        source: '/programacao-neurolinguistica',
        destination: '/especialidades/pnl',
        permanent: true,
      },
      {
        source: '/resultado-de-busca',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/sobre-2',
        destination: '/sobre',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
