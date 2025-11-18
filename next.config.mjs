import createNextIntlPlugin from 'next-intl/plugin';
import dotenv from 'dotenv';

dotenv.config(); // 환경 변수 로드

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.teunsol.co.kr',
        port: '3000',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
