'use client'
import { CoinViewProvider } from '@/providers/CoinViewProvider'
import { ReactNode } from 'react'

export default function CoinViewLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { coinId: string }
}) {
  const { coinId } = params

  return <CoinViewProvider coinId={coinId}>{children}</CoinViewProvider>
}
