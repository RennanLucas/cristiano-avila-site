/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
