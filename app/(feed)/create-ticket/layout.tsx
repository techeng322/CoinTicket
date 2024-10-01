'use client'
import { CreateTicketProvider } from '@/providers/CreateTicketProvider'
import { ReactNode } from 'react'

export default function CreateTicketLayout({ children }: { children: ReactNode }) {
  return <CreateTicketProvider>{children}</CreateTicketProvider>
}
