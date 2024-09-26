'use client'

import FilterButton from '@/components/FilterButton'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

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
            <div className="p-4">{children}</div>
          </div>
        </main>
        <ToastContainer />
        <Analytics />
        <div className="fixed bottom-[100px] right-[20px]">
          <FilterButton />
        </div>
      </body>
    </html>
  )
}
