'use client'
import Alert from "@/shared/Alert";
import { useState } from "react";
import { FaChartLine } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import Cards from "./Cards";
import Polls from "./Polls";
import Post from "./Post";

enum state {
  CARDS = "cards",
  POLLS = "polls",
  POST = "post"
}

const MyActivity = () => {
  const [method, setMethod] = useState(state.CARDS)
  return (
    <div className="w-full flex flex-col gap-y-4 p-4 bg-blue-light_100">
      <div className="flex justify-center relative items-center text-lg font-bold">
        <div className="absolute left-0">
          <FaArrowLeft />
        </div>
        My Activity
      </div>
      <Alert icon={<FaChartLine />} text={`Tap to see how scoring works!`} />

      <div className="grid grid-cols-3 gap-x-4 gap-y-2">
        <div className="bg-white flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">0</div>
          <div className="text-grey text-[12px] text-center">OpiGo Score</div>
        </div>
        <div className="bg-white flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">-</div>
          <div className="text-grey flex items-center text-[12px] text-center">Avg of all cards</div>
        </div>
        <div className="bg-white flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">-</div>
          <div className="text-grey text-[12px] text-center">Active Since</div>
        </div>
        <div className="bg-white flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">0</div>
          <div className="text-grey text-[12px] text-center">Closed Cards</div>
        </div>
        <div className="bg-white flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">0</div>
          <div className="text-grey flex justify-center text-[12px] text-center">Avg. Of Closed Cards</div>
        </div>
        <div className="bg-white flex flex-col gap-2 items-center rounded-md p-2">
          <div className="font-bold">0 days</div>
          <div className="text-grey text-[12px] text-center">Avg. Closing Duration</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex justify-center gap-5">
          <div className={`${method === state.CARDS ? "text-black font-bold" : "text-grey"} `} onClick={() => setMethod(state.CARDS)}>Cards(2)</div>
          <div className={`${method === state.POLLS ? "text-black font-bold" : "text-grey"} `} onClick={() => setMethod(state.POLLS)}>Polls(1)</div>
          <div className={`${method === state.POST ? "text-black font-bold" : "text-grey"}` } onClick={() => setMethod(state.POST)}>Posts</div>
        </div>
        <div className="rounded-default flex-grow">
          {method === state.CARDS && <Cards />}
          {method === state.POLLS && <Polls />}
          {method === state.POST && <Post />}
        </div>
      </div>
    </div>
  )
}

export default MyActivity
