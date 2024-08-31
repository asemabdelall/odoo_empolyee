// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://goldproerp.odoo.com/:path*', // خادم Odoo
        },
      ];
    },
  };
  
  export default nextConfig;
  