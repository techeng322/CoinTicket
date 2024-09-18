import { useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { MdOutlineFormatListBulleted } from 'react-icons/md'

const Poll = () => {
  const [bullish, setBullish] = useState('')
  const [bearish, setBearish] = useState('')
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <FaRegCircleUser size={40} color="grey" />
          <div className="flex flex-col">
            <div className="font-bold">N W</div>
            <div className="text-[12px] text-grey">1 hour ago</div>
          </div>
        </div>
        <div className="rounded-full p-2 active:bg-[#514e4ee3]">
          <MdOutlineFormatListBulleted size={20} />
        </div>
      </div>
      <div className="text-[14px] mt-2">Are you feeling bullish or bearish?</div>
      <div className="flex flex-col gap-2 w-full mt-2">
        <input
          type="text"
          value={bullish}
          className="w-full bg-blue-light_100 h-8 pl-2 font-bold"
          onChange={(e) => setBullish(e.target.value)}
        />
        <input
          type="text"
          value={bearish}
          className="w-full bg-blue-light_100 h-8 pl-2 font-bold"
          onChange={(e) => setBearish(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="w-full h-[40px] text-white bg-[#0069ff] rounded-lg active:scale-[1.1]"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Poll
