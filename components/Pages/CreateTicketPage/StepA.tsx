import { TIKETSTEP, useCreateTicket } from '@/providers/CreateTicketProvider'
import { CiSearch } from 'react-icons/ci'
import { ImArrowDown, ImArrowUp } from 'react-icons/im'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const StepA = () => {
  const { coinId, setCoinId, expecting, setExpecting, setStep, caption, setCaption } =
    useCreateTicket()
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <div className="font-poppins_semibold text-[20px]">Enter Coin name</div>
        <div className="flex w-full relative items-center">
          <input
            onChange={(e) => setCoinId(e.target.value)}
            type="text"
            value={coinId}
            placeholder="Search .."
            className="px-4 py-2 border-none focus:outline-none bg-blue-light_100 w-full rounded-lg"
          />
          <div className="absolute right-0 p-2">
            <CiSearch size={18} />
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center mt-4 gap-10">
        <button
          type="button"
          onClick={() => setExpecting(1)}
          className="flex bg-blue-dark_100 flex gap-4 items-center rounded-lg px-4 py-2 active:scale-[1.05]"
        >
          <div
            className={`rounded-full w-[14px] h-[14px] ${expecting === 1 ? 'bg-[#00FF0A]' : 'bg-white'}`}
          ></div>
          <div className="text-white">Bullish</div>
          <ImArrowUp color={expecting === 1 ? '#00FF0A' : 'white'} />
        </button>
        <button
          type="button"
          onClick={() => setExpecting(-1)}
          className="flex bg-blue-dark_100 flex gap-4 items-center rounded-lg px-4 py-2 active:scale-[1.05]"
        >
          <div
            className={`rounded-full w-[14px] h-[14px] ${expecting === -1 ? 'bg-[#FF0000]' : 'bg-white'}`}
          ></div>
          <div className="text-white">Bearish</div>
          <ImArrowDown color={expecting === -1 ? '#FF0000' : 'white'} />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-poppins_semibold text-[20px]">
          Enter caption
          <span className="font-poppins_regular text-[14px]">(Optional)</span>
        </div>
        <div className="w-full border-1">
          <textarea
            value={caption}
            placeholder="Share your Thought"
            onChange={(e) => setCaption(e.target.value)}
            className="w-full h-[200px] px-4 py-2 bg-blue-light_100 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setStep(TIKETSTEP.STEPB)}
          className="rounded-full active:scale-[1.05]"
        >
          <FaArrowAltCircleRight size={40} color={`#0A1B36`} />
        </button>
      </div>
    </div>
  )
}

export default StepA
