'use client'
import { getTickets } from '@/lib/firebase/ticketService'
import { getCoinInfo } from '@/lib/request/getCoinInfo'
import { ReactNode, useContext, useState, createContext, useEffect } from 'react'

export enum CoinViewTab {
  OVERVIEW = 'Overview',
  TICKET = 'Ticket',
  POLLS = 'Polls',
  CTALPHA = 'CT Alpha',
  MEMES = 'Memes',
}

interface CoinViewContextType {
  viewTab: string
  setViewTab: (viewTab: string) => void
  coinInfo: any
}

const CoinViewContext = createContext<CoinViewContextType | undefined>(undefined)

export const CoinViewProvider = ({ children, coinId }: { children: ReactNode; coinId: string }) => {
  const [viewTab, setViewTab] = useState<string>(CoinViewTab.OVERVIEW)
  const [coinInfo, setCoinInfo] = useState(null)

  useEffect(() => {
    const fetchCoinInfo = async () => {
      const response = await getCoinInfo(coinId)
      setCoinInfo(response)
      console.log('fetchCoinInfo')
    }
    fetchCoinInfo()
  }, [coinId])

  return (
    <CoinViewContext.Provider
      value={{
        coinInfo,
        viewTab,
        setViewTab,
      }}
    >
      {children}
    </CoinViewContext.Provider>
  )
}

export const useCoinView = () => {
  const context = useContext(CoinViewContext)
  if (!context) {
    throw new Error('useCreateCTPoll must be used within a CreateCTPollProvider')
  }
  return context
}
