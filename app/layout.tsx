import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/header/navbar/navbar';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/footer/footer';

const font = Inter({ subsets: ['latin'] });

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
      <body className={cn('text-white', font.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
