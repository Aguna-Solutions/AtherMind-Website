/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.agunasolutions.com',
      },
    ],
  },
  allowedDevOrigins: [
    'localhost:3000',
    '127.0.0.1:3000',
    '192.168.10.171',
    '192.168.10.171:3000',
    '172.20.144.1',
    '172.31.32.1',
    '*.ngrok-free.dev',
    '*.ngrok.io',
    'jaundice-scorpion-aged.ngrok-free.dev',
  ],
};

export default nextConfig;
