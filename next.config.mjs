/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages — generates static HTML/CSS/JS
  output: 'export',
  // Required if hosted at username.github.io/portfolio (sub-path)
  // Remove this line if using a custom domain or username.github.io root
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
