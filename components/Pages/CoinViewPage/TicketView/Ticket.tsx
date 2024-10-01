import { useCoinView } from '@/providers/CoinViewProvider'
import Image from 'next/image'
import { FcBearish, FcBullish } from 'react-icons/fc'

// Define types for props
interface TicketProps {
  userId: string
  username: string
  coinId: string
  expecting: number // 1 for Bullish, -1 for Bearish
  caption: string
  timeHorizon: string
  potentialUpside: string
  price: string
}

const Ticket = ({
  userId,
  username,
  coinId,
  expecting,
  timeHorizon,
  potentialUpside,
  price,
}: TicketProps) => {
  const { coinInfo } = useCoinView()

  return (
    <div className="flex flex-col bg-blue-light_100 p-4 w-[500px] rounded-lg">
      {/* User Info Section */}
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[50px] relative">
          <Image
            src="/images/profile_img.png"
            alt="User profile"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            unoptimized
            className="rounded"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-poppins_semibold text-[20px]">{username || 'Phantomdev'}</div>
          <div className="text-[16px] text-grey-light_300">now</div>
        </div>
      </div>

      {/* Coin Info Section */}
      <div className="flex flex-col mt-2 border-b-[1px] border-b-[#919191] py-2">
        <div className="flex justify-between">
          <div className="text-[20px] font-bold flex items-center gap-2">
            <div className="w-[24px] h-[24px] relative">
              <Image
                src={coinInfo.image.small}
                alt={`${coinId} icon`}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                unoptimized
                className="rounded"
              />
            </div>
            {coinInfo.symbol}-{coinInfo.id}
          </div>
          <div className="font-poppins_semibold text-[20px] flex items-end">
            ${coinInfo.market_data.current_price.usd}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-[16px] text-grey-light_200">
            Added at <span className="font-bold">${price}</span>
          </div>
          <div className="flex text-green-light_100 text-[16px]">0.00 (0.00%)</div>
        </div>
      </div>

      {/* Expectation Section */}
      <div className="flex flex-col py-2 border-b-[1px] border-b-[#919191]">
        {expecting === 1 && (
          <div className="flex items-center gap-1 font-bold text-[20px]">
            Bullish <FcBullish color="green" size={20} />
          </div>
        )}
        {expecting === -1 && (
          <div className="flex items-center gap-1 font-bold text-[20px]">
            Bearish <FcBearish color="red" size={20} />
          </div>
        )}
        <div className="text-[14px] font-poppins_semibold">{timeHorizon}</div>
      </div>

      {/* Potential Upside Section */}
      <div className="flex flex-col py-2">
        <div className="text-[20px] font-bold">Potential Upside</div>
        <div className="text-[14px] font-poppins_semibold">{potentialUpside}</div>
      </div>
    </div>
  )
}

export default Ticket
