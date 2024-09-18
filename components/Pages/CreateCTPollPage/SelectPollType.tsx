import { POLLSTEP, useCreateCTPoll, POLLTYPE } from '@/providers/CreateCTPollProvider'

import Image from 'next/image'

import { FaArrowRight } from 'react-icons/fa6'

const SelectPollType = () => {
  const { pollType, setPollType, setStep } = useCreateCTPoll()
  return (
    <div className="w-full">
      <div className="font-poppins_semibold text-[20px]">Select Poll Type</div>
      <div className="flex flex-col gap-y-4 mt-4">
        <div
          className="bg-[#0A1B36] flex items-center p-4 rounded cursor-pointer"
          onClick={() => setPollType(POLLTYPE.SINGLECOIN)}
        >
          <div
            className={`w-4 h-4 rounded-full cursor-pointer ${pollType === POLLTYPE.SINGLECOIN ? 'bg-[white]' : 'bg-[#929292]'}`}
          ></div>
          <div className="text-white font-poppins_bold text-[14px] ml-4">Single Coin</div>
        </div>

        <div
          className="bg-[#0A1B36] flex items-center p-4 rounded cursor-pointer"
          onClick={() => setPollType(POLLTYPE.COMPARE2COINS)}
        >
          <div
            className={`w-4 h-4 rounded-full cursor-pointer ${pollType === POLLTYPE.COMPARE2COINS ? 'bg-[white]' : 'bg-[#929292]'}`}
          ></div>
          <div className="text-white font-poppins_bold text-[14px] ml-4">Compare 2 coins</div>
        </div>

        <div
          className="bg-[#0A1B36] flex items-center p-4 rounded cursor-pointer"
          onClick={() => setPollType(POLLTYPE.RANKCOINS)}
        >
          <div
            className={`w-4 h-4 rounded-full cursor-pointer ${pollType === POLLTYPE.RANKCOINS ? 'bg-[white]' : 'bg-[#929292]'}`}
          ></div>
          <div className="text-white font-poppins_bold text-[14px] ml-4">
            Rank Coins (max limit to 8)
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={() => setStep(POLLSTEP.SELECTINVESTMENTTYPE)}
          className="bg-[#0A1B36] rounded-full text-[white] flex justify-center items-center p-4"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="w-[500px] h-[300px] relative">
          <Image
            src="/images/coin-ticket.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            unoptimized
            className="rounded"
          />
        </div>
      </div>
    </div>
  )
}

export default SelectPollType
