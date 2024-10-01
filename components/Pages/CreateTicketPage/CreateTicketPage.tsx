'use client'
import { TIKETSTEP, useCreateTicket } from '@/providers/CreateTicketProvider'
import StepA from './StepA'
import StepC from './StepC'
import StepB from './StepB'

const CreateTicketPage = () => {
  const { step } = useCreateTicket()
  return (
    <div className="w-full p-4">
      <div className="w-full flex justify-center items-center text-[24px] font-bold">
        Create Your Ticket
      </div>
      <div className="flex">
        {step === TIKETSTEP.STEPA && <StepA />}
        {step === TIKETSTEP.STEPB && <StepB />}
        {step === TIKETSTEP.STEPC && <StepC />}
      </div>
    </div>
  )
}

export default CreateTicketPage
