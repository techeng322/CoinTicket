'use client'

import Filter from '@/components/Filter'
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
        {children}
        <ToastContainer />
        <Analytics />
        <div className="fixed bottom-[100px] right-[20px]">
          <Filter/>
        </div>
      </body>
    </html>
  )
}
