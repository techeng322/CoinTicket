'use client'
import { CreateCTPollProvider } from '@/providers/CreateCTPollProvider'
import { ReactNode } from 'react'

export default function CreatePollLayout({ children }: { children: ReactNode }) {
  return <CreateCTPollProvider>{children}</CreateCTPollProvider>
}
