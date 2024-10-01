import { Timestamp } from 'firebase/firestore'

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface Poll {
  question: string
  options: string[]
}

export interface Post {
  title: string
  content: string[]
}

export interface Ticket {
  userId: string
  coinId: string
  expecting: number
  caption: string
  timeHorizon: string
  potentialUpside: string
}
