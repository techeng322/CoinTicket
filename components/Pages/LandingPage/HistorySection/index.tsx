import { useState } from 'react'
import Latest from './Latest'

enum tab {
  LATEST = 'Latest',
  MYCIRCLE = 'My Circle',
  TOPTICKETS = 'Top Tickets',
}

const HistorySection = () => {
  const [selectedTab, setSelectedTab] = useState(tab.LATEST)
  return (
    <div className="flex mt-4 flex-col">
      <div className="grid grid-cols-5 gap-4 mt-8">
        <div className="col-span-2">
          <div className="col-span-1 grid grid-cols-3 bg-[#F3F3F3] rounded-lg">
            <button
              onClick={() => setSelectedTab(tab.LATEST)}
              type="button"
              className="text-black flex justify-center items-center px-4 py-2 font-poppins_regular text-[14px]"
            >
              Latest
            </button>
            <button
              onClick={() => setSelectedTab(tab.MYCIRCLE)}
              type="button"
              className="text-black flex justify-center items-center px-4 py-2 font-poppins_regular text-[14px]"
            >
              My Circle
            </button>
            <button
              onClick={() => setSelectedTab(tab.TOPTICKETS)}
              type="button"
              className="text-black flex justify-center items-center px-4 py-2 font-poppins_regular text-[14px]"
            >
              Top Tickets
            </button>
          </div>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-1">
          <button className="bg-[#F3F3F3] flex justify-center items-center px-4 py-2 w-full rounded-lg text-[#232323] font-poppins_semibold">
            Market
          </button>
        </div>
      </div>
      <div className="mt-4">
        {selectedTab === tab.LATEST && <Latest />}
        {selectedTab === tab.MYCIRCLE && <Latest />}
        {selectedTab === tab.TOPTICKETS && <Latest />}
      </div>
    </div>
  )
}

export default HistorySection
