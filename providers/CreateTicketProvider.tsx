'use client'
import { ReactNode, useContext, useState, createContext } from 'react'

export enum TIKETSTEP {
  STEPA = 'step a',
  STEPB = 'step b',
  STEPC = 'step c',
}

export enum TIMEHORIZON {
  NEXT1WEEK = 'Next 1 Week',
  NEXT1MONTH = 'Next 1 Month',
  NEXT1TO6MONTHS = 'Next 1-6 Months',
  NEXT6TO12MONTHS = 'Next 6-12 Months',
  MORETHAN1YEAR = 'More Than 1 Year',
}

export enum POTENTIALUP {
  UPTO5P = 'Up to 5%',
  BETWEEN5TO10P = 'Between 5% - 10%',
  BETWEEN10TO25 = 'Between 10% - 25%',
  BETWEEN25TO50 = 'Between 25% - 50%',
  MORETHAN50P = 'more than 50%',
}

interface CreateCTPollContextType {
  step: string
  setStep: (param: string) => void
  coinText: string
  setCoinText: (param: string) => void
  expecting: number
  setExpecting: (param: number) => void
  timeHorizon: string
  setTimeHorizon: (param: string) => void
  caption: string
  setCaption: (param: string) => void
  potentialUpside: string
  setPotentialUpside: (param: string) => void
}

const CreateTicketContext = createContext<CreateCTPollContextType | undefined>(undefined)

export const CreateTicketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState<string>(TIKETSTEP.STEPA)
  const [coinText, setCoinText] = useState<string>('')
  const [expecting, setExpecting] = useState<number>(0) // bullihs: 1, bearish: -1, neutral: 0
  const [caption, setCaption] = useState<string>('')
  const [timeHorizon, setTimeHorizon] = useState<string>(TIMEHORIZON.NEXT1WEEK)
  const [potentialUpside, setPotentialUpside] = useState<string>(POTENTIALUP.UPTO5P)

  return (
    <CreateTicketContext.Provider
      value={{
        step,
        setStep,
        coinText,
        setCoinText,
        caption,
        setCaption,
        expecting,
        setExpecting,
        timeHorizon,
        setTimeHorizon,
        potentialUpside,
        setPotentialUpside,
      }}
    >
      {children}
    </CreateTicketContext.Provider>
  )
}

export const useCreateTicket = () => {
  const context = useContext(CreateTicketContext)
  if (!context) {
    throw new Error('useCreateCTPoll must be used within a CreateCTPollProvider')
  }
  return context
}
