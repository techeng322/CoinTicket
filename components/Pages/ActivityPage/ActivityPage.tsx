'use client'
import Alert from '@/shared/Alert'
import { useState } from 'react'
import { FaChartLine } from 'react-icons/fa6'
import Polls from './Polls'
import Tickets from './Tickets'
import Insights from './Insights'

enum state {
  TICKETS = 'tickets',
  POLLS = 'polls',
  INSIGHTS = 'insights',
}

const ActivityPage = () => {
  const [method, setMethod] = useState(state.TICKETS)
  return (
    <div className="w-full flex flex-col gap-y-4 p-8 bg-white min-h-screen">
      <Alert icon={<FaChartLine />} text={`Tap to see how scoring works!`} />

      <div className="grid grid-cols-3 gap-x-8 gap-y-4 px-20">
        <div className="bg-[#F1F1F1] flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">0</div>
          <div className="text-black text-[12px] text-center">OpiGo Score</div>
        </div>
        <div className="bg-[#F1F1F1] flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">-</div>
          <div className="text-black flex items-center text-[12px] text-center">
            Avg of all cards
          </div>
        </div>
        <div className="bg-[#F1F1F1] flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">-</div>
          <div className="text-black text-[12px] text-center">Active Since</div>
        </div>
        <div className="bg-[#F1F1F1] flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">0</div>
          <div className="text-black text-[12px] text-center">Closed Cards</div>
        </div>
        <div className="bg-[#F1F1F1] flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">0</div>
          <div className="text-black flex justify-center text-[12px] text-center">
            Avg. Of Closed Cards
          </div>
        </div>
        <div className="bg-[#F1F1F1] flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">0 days</div>
          <div className="text-black text-[12px] text-center">Avg. Closing Duration</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-start gap-5 bg-[#F1F1F1] p-2">
            <button
              className={`${method === state.TICKETS ? 'text-white font-bold bg-[#192943]' : 'text-grey'} hover:cursor-pointer hover:text-[white] hover:bg-[#192943] hover:text-whtie rounded px-2 py-1 text-[14px] active:scale-[1.05]`}
              onClick={() => setMethod(state.TICKETS)}
            >
              Tickets(2)
            </button>
            <button
              className={`${method === state.POLLS ? 'text-white font-bold bg-[#192943]' : 'text-grey'} hover:cursor-pointer hover:text-[white] hover:bg-[#192943] hover:text-whtie rounded px-2 py-1 text-[14px] active:scale-[1.05]`}
              onClick={() => setMethod(state.POLLS)}
            >
              Polls(2)
            </button>
            <button
              className={`${method === state.INSIGHTS ? 'text-white font-bold bg-[#192943]' : 'text-grey'} hover:cursor-pointer hover:text-[white] hover:bg-[#192943] hover:text-whtie rounded px-2 py-1 text-[14px] active:scale-[1.05]`}
              onClick={() => setMethod(state.INSIGHTS)}
            >
              Insights
            </button>
          </div>
        <div className="rounded-default flex-grow">
          {method === state.TICKETS && <Tickets />}
          {method === state.POLLS && <Polls />}
          {method === state.INSIGHTS && <Insights />}
        </div>
      </div>
    </div>
  )
}

export default ActivityPage
