import './globals.css';

export const metadata = {
  title: 'Jiasheng Lu — Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Node.js, and modern web technologies. Building elegant digital experiences.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'TypeScript', 'Portfolio', 'Jiasheng Lu'],
  authors: [{ name: 'Jiasheng Lu' }],
  creator: 'Jiasheng Lu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jonsnowljs.github.io/portfolio/',
    title: 'Jiasheng Lu — Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
    siteName: 'Jiasheng Lu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jiasheng Lu — Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#050816',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
