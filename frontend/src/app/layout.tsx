/**
 * @since 2023/07/16
 * @author ThinhHV <thinh@thinhhv.com>
 * @description description
 * @copyright (c) 2023 Company Platform
 */

import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import cx from 'classnames'
import { sfPro, inter } from './fonts'
import Nav from '@/components/layout/nav'
import Footer from '@/components/layout/footer'
import { Suspense } from 'react'
import { NextAuthProvider } from './providers'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Proposal Voting',
  description: 'A electoral system based blockchain.',
  twitter: {
    card: 'summary_large_image',
    title: 'Proposal Voting',
    description: 'A electoral system based blockchain.',
    creator: '@steventey',
  },
  metadataBase: new URL('http://localhost:3000'),
  themeColor: '#FFF',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <Suspense fallback="...">
          <NextAuthProvider>
            <Toaster />
            <div className="fixed h-screen w-full bg-gradient-to-br from-purple-50 via-white to-red-100" />
            {/* @ts-expect-error Server Component */}
            <Nav session={session} />
            <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
              {children}
            </main>
            <Footer />
            <Analytics />
          </NextAuthProvider>
        </Suspense>
      </body>
    </html>
  )
}
