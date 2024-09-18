'use client'
import { useCreateCTPoll, POLLSTEP } from '@/providers/CreateCTPollProvider'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import SelectPollType from './SelectPollType'

const CreateCTPollPage = () => {
  const { step } = useCreateCTPoll()
  return (
    <div className="w-full">
      <div className="flex justify-center items-center relative">
        <Link href="/">
          <FaArrowLeft color="black" size={14} className="absolute left-0" />
        </Link>
        <div className="font-poppins_bold text-[20px]">Build Your Cointicket Poll</div>
      </div>
      <div className="mt-4">{step === POLLSTEP.SELECTPOLLTYPE && <SelectPollType />}</div>
    </div>
  )
}

export default CreateCTPollPage
