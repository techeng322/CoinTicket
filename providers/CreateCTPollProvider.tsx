'use client'
import { ReactNode, useContext, useState, createContext } from 'react'

export enum POLLTYPE {
  SINGLECOIN = 'Single Coin',
  COMPARE2COINS = 'Compare 2 Coins',
  RANKCOINS = 'Rank Coins(max limit to 8)',
}

export enum POLLSTEP {
  SELECTPOLLTYPE = 'select poll type',
  SELECTINVESTMENTTYPE = 'select investment type',
}

interface CreateCTPollContextType {
  pollType: string
  setPollType: (pollType: string) => void
  step: string
  setStep: (step: string) => void
  coinText: string
  setCoinText: (step: string) => void
}

const CreateCTPollContext = createContext<CreateCTPollContextType | undefined>(undefined)

export const CreateCTPollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pollType, setPollType] = useState<string>(POLLTYPE.SINGLECOIN)
  const [step, setStep] = useState<string>(POLLSTEP.SELECTPOLLTYPE)
  const [coinText, setCoinText] = useState<string>('')

  return (
    <CreateCTPollContext.Provider
      value={{
        pollType,
        setPollType,
        step,
        setStep,
        coinText,
        setCoinText,
      }}
    >
      {children}
    </CreateCTPollContext.Provider>
  )
}

export const useCreateCTPoll = () => {
  const context = useContext(CreateCTPollContext)
  if (!context) {
    throw new Error('useCreateCTPoll must be used within a CreateCTPollProvider')
  }
  return context
}
