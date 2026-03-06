const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
