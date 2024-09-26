import formatCurrency from '@/lib/utils/formatCurrency'
import { useCoinView } from '@/providers/CoinViewProvider'
import Image from 'next/image'
import { BiSolidUpArrow , BiSolidDownArrow } from 'react-icons/bi'

const CoinInfo = () => {
  const { coinInfo } = useCoinView()

  return (
    <div className="bg-blue-light_300 p-4 rounded-lg">
      <div className="flex justify-between">
        <div className="font-poppins_bold flex gap-1 items-center">
          <div className="w-[18px] h-[18px] relative">
            <Image
              src={coinInfo.image.small}
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              unoptimized
              className="rounded"
            />
          </div>
          <span className="text-[18px]">{coinInfo.name}</span>
          <div className="flex items-end">
            <span className="text-[14px] text-grey-light_200">{coinInfo.symbol}</span>
          </div>
          <div className="">#{coinInfo.market_cap_rank}</div>
        </div>
      </div>
      <div className="flex gap-2 border-b-[1px] border-b-grey-light_300">
        <div className="font-poppins_medium text-[30px] font-bold">
          ${coinInfo.market_data.current_price.usd}
        </div>
        {coinInfo.market_data.price_change_percentage_24h > 0 && (
          <div className="flex text-[20px] items-center text-green-light_100 font-bold">
            <BiSolidUpArrow size={16} color={'#00a83e'} />
            {coinInfo.market_data.price_change_percentage_24h}%
          </div>
        )}
        {coinInfo.market_data.price_change_percentage_24h < 0 && (
          <div className="flex text-[20px] items-center text-[red] font-bold">
            <BiSolidDownArrow size={16} color={'red'} />
            {coinInfo.market_data.price_change_percentage_24h}%
          </div>
        )}
      </div>
      <div className="mt-4">
        <div className="flex justify-between p-1">
          <div className="font-poppins_medium text-[14px]">Market Cap</div>
          <div className="font-poppins-medium text-[14px] font-bold">
            $
            {coinInfo.market_data.market_cap.usd
              ? formatCurrency(coinInfo.market_data.market_cap.usd)
              : '0'}
          </div>
        </div>
        <div className="flex justify-between p-1">
          <div className="font-poppins_medium text-[14px]">Fully Diluted Valuation</div>
          <div className="font-poppins-medium text-[14px] font-bold">
            $
            {coinInfo.market_data.fully_diluted_valuation.usd
              ? formatCurrency(coinInfo.market_data.fully_diluted_valuation.usd)
              : '0'}
          </div>
        </div>
        <div className="flex justify-between p-1">
          <div className="font-poppins_medium text-[14px]">Circulating Supply</div>
          <div className="font-poppins-medium text-[14px] font-bold">
            $
            {coinInfo.market_data.circulating_supply
              ? formatCurrency(coinInfo.market_data.circulating_supply)
              : '0'}
          </div>
        </div>
        <div className="flex justify-between p-1">
          <div className="font-poppins_medium text-[14px]">Total Supply</div>
          <div className="font-poppins-medium text-[14px] font-bold">
            $
            {coinInfo.market_data.total_supply
              ? formatCurrency(coinInfo.market_data.total_supply)
              : '0'}
          </div>
        </div>
        <div className="flex justify-between p-1">
          <div className="font-poppins_medium text-[14px]">Max Supply</div>
          <div className="font-poppins-medium text-[14px] font-bold">
            $
            {coinInfo.market_data.max_supply
              ? formatCurrency(coinInfo.market_data.max_supply)
              : '0'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinInfo
