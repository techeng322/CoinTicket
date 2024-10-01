'use client'

import FilterButton from '@/components/FilterButton'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import ToastProvider from '@/providers/ToastProvider'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ReactNode, Suspense } from 'react'
import Loading from './loading'

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="w-full flex">
          <SideBar />
          <div className="flex-grow">
            <Header />
            <ToastProvider>
              <Suspense fallback={<Loading />}>
                <div className="p-4">{children}</div>
              </Suspense>
            </ToastProvider>
          </div>
        </main>
        <Analytics />
        <div className="fixed bottom-[100px] right-[20px]">
          <FilterButton />
        </div>
      </body>
    </html>
  )
}
