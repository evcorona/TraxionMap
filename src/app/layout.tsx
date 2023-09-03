import './globals.css'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Traxion Map by eldavcorona',
  description: 'Frontend technical test Sep/2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          'relative',
          'bg-slate-100',
          'scrollbar-thin',
          'scrollbar-track-transparent',
          'scrollbar-thumb-brand scrollbar-thumb-rounded'
        )}
      >
        <nav
          className={clsx(
            'w-full',
            'fixed left-0 top-0 z-50',
            'bg-slate-100/25 backdrop-blur-sm'
          )}
        >
          <div
            className={clsx(
              'container h-14',
              'mx-auto px-4 md:px-8',
              'flex',
              'items-center justify-center'
            )}
          >
            <Image
              src="/traxion_logo.svg"
              alt="Traxion Logotype"
              width={140}
              height={10}
              priority
            />
          </div>
        </nav>
        <main
          className={clsx(
            'container h-screen',
            'mx-auto mt-16 px-4 pb-4 md:px-8'
          )}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
