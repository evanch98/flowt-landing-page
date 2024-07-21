import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const font = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'flowt | App Builder',
  description: 'Landing Page for a fictional company flowt built by Kyaw Thu.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
