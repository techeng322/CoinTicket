'use client'
import Alert from "@/shared/Alert";
import { useState } from "react";
import { FaChartLine } from "react-icons/fa6";
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
    <div className="w-full flex flex-col gap-y-4 p-4 bg-[#e5e7eb]">
      <Alert icon={<FaChartLine />} text={`Tap to see how scoring works!`} />

      <div className="grid grid-cols-3 gap-x-5 gap-y-3">
        <div className="bg-white flex flex-col gap-2 items-center">
          <div className="font-bold">0</div>
          <div className="text-grey">OpiGo Score</div>
        </div>
        <div className="bg-white flex flex-col gap-2 items-center">
          <div className="font-bold">-</div>
          <div className="text-grey flex items-center">Avg of all cards</div>
        </div>
        <div className="bg-white flex flex-col gap-2 items-center">
          <div className="font-bold">-</div>
          <div className="text-grey">Active Since</div>
        </div>
        <div className="bg-white flex flex-col gap-2 items-center">
          <div className="font-bold">0</div>
          <div className="text-grey">Closed Cards</div>
        </div>
        <div className="bg-white flex flex-col gap-2 items-center">
          <div className="font-bold">0</div>
          <div className="text-grey flex justify-center">Avg. Of Closed Cards</div>
        </div>
        <div className="bg-white flex flex-col gap-2 items-center">
          <div className="font-bold">0 days</div>
          <div className="text-grey ">Avg. Closing Duration</div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center gap-2">
          <div className="" onClick={()=>setMethod(state.CARDS)}>Cards</div>
          <div className="" onClick={()=>setMethod(state.POLLS)}>Polls</div>
          <div className="" onClick={()=>setMethod(state.POST)}>Posts</div>
        </div>
        <div className="border border-black">
          {method === state.CARDS && <Cards />}
          {method === state.POLLS && <Polls />}
          {method === state.POST && <Post />}
        </div>
      </div>
    </div>
  )
}

export default MyActivity
