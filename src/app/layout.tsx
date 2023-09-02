import './globals.css';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Traxion Map by eldavcorona',
  description: 'Frontend technical test Sep/2023',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          inter.className,
          'px-4 md:px-8',
          'bg-slate-100',
          'scrollbar-thin',
          'scrollbar-track-transparent',
          'scrollbar-thumb-brand scrollbar-thumb-rounded'
        )}
      >
        <nav
          className={clsx(
            'fixed top-0 left-0',
            'w-full h-12 px-4 md:px-8',
            'flex',
            'justify-between items-center',
            'bg-slate-100/25 backdrop-blur-sm'
          )}
        >
          <Image
            src='/traxion_logo.svg'
            alt='Traxion Logotype'
            width={140}
            height={10}
            priority
          />
        </nav>
        {children}
      </body>
    </html>
  );
}
