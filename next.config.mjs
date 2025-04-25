/** @type {import('next').NextConfig} */


export default {
    async headers() {
      return [
        {
          // Apply to all static assets (e.g., JS, CSS, images)
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // 1 year
            },
          ],
        },
        {
          // Apply to dynamic or API routes with shorter cache
          source: '/api/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=3600', // 1 hour
            },
          ],
        },
      ];
    },
  };