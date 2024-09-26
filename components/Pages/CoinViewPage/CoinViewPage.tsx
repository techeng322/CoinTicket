'use client'
import { useCoinView , CoinViewTab } from '@/providers/CoinViewProvider'
import OverView from './Overview'
import TicketView from './TicketView'
import PollView from './PollView'
import CTAlphaView from './CTAlphaView'
import Image from 'next/image'

const CoinViewPage = () => {
  const { viewTab, setViewTab, coinInfo } = useCoinView()
  if (!coinInfo) return
  return (
    <div className="w-full">
      <div className="text-Poppins_bold text-[20px] flex justify-center items-center gap-2">
        <div className="w-[30px] h-[30px] relative">
          <Image
            src={coinInfo.image.small}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            unoptimized
            className="rounded"
          />
        </div>
        <span className="font-bold">{coinInfo.name}</span>
        <div className="flex items-end text-grey-light_200">
          <span>{coinInfo.symbol}</span>
        </div>
      </div>
      <div className="bg-blue-light_300 w-[800px] p-2 rounded-lg mt-4 flex gap-4">
        <ViewTabButton
          onClick={() => setViewTab(CoinViewTab.OVERVIEW)}
          containerClasses={`${viewTab === CoinViewTab.OVERVIEW ? 'bg-blue-dark_100 text-white' : ''}`}
        >
          Overview
        </ViewTabButton>
        <ViewTabButton
          onClick={() => setViewTab(CoinViewTab.TICKET)}
          containerClasses={`${viewTab === CoinViewTab.TICKET ? 'bg-blue-dark_100 text-white' : ''}`}
        >
          Ticket
        </ViewTabButton>
        <ViewTabButton
          onClick={() => setViewTab(CoinViewTab.POLLS)}
          containerClasses={`${viewTab === CoinViewTab.POLLS ? 'bg-blue-dark_100 text-white' : ''}`}
        >
          Polls
        </ViewTabButton>
        <ViewTabButton
          onClick={() => setViewTab(CoinViewTab.CTALPHA)}
          containerClasses={`${viewTab === CoinViewTab.CTALPHA ? 'bg-blue-dark_100 text-white' : ''}`}
        >
          CT Alpha
        </ViewTabButton>
        <ViewTabButton
          onClick={() => setViewTab(CoinViewTab.MEMES)}
          containerClasses={`${viewTab === CoinViewTab.MEMES ? 'bg-blue-dark_100 text-white' : ''}`}
        >
          Memes
        </ViewTabButton>
      </div>
      <div className="mt-4">
        {viewTab === CoinViewTab.OVERVIEW && <OverView />}
        {viewTab === CoinViewTab.TICKET && <TicketView />}
        {viewTab === CoinViewTab.POLLS && <PollView />}
        {viewTab === CoinViewTab.CTALPHA && <CTAlphaView />}
        {viewTab === CoinViewTab.MEMES && <OverView />}
      </div>
    </div>
  )
}

export default CoinViewPage

const ViewTabButton = ({ children, containerClasses, onClick }) => {
  return (
    <button
      onMouseDown={onClick}
      className={`${containerClasses} text-poppins_medium text-[14px]  px-2 py-1 rounded-lg min-w-[100px]`}
    >
      {children}
    </button>
  )
}
