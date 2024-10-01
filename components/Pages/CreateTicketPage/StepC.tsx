import { TIKETSTEP, useCreateTicket } from '@/providers/CreateTicketProvider'
import Image from 'next/image'
import { FcBullish } from 'react-icons/fc'
import { FcBearish } from 'react-icons/fc'

const StepC = () => {
  const { coinId, expecting, timeHorizon, potentialUpside, coinInfo, handlePost, setStep } =
    useCreateTicket()

  return (
    <div className="w-full flex flex-col mt-[100px] items-center">
      <div className="flex flex-col bg-blue-light_100 p-4 w-[500px] rounded-lg">
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px] relative">
            <Image
              src="/images/profile_img.png"
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              unoptimized
              className="rounded"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-poppins_semibold text-[20px]">Phantomdev</div>
            <div className="text-[16px] text-grey-light_300">now</div>
          </div>
        </div>
        <div className="flex flex-col mt-2 border-b-[1px] border-b-[#919191] py-2">
          <div className="flex justify-between">
            <div className="text-[20px] font-bold flex items-center gap-2">
              <div className="w-[24px] h-[24px] relative">
                <Image
                  src={coinInfo.image.small}
                  alt=""
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  unoptimized
                  className="rounded"
                />
              </div>
              {coinId}
            </div>
            <div className="font-poppins_semibold text-[20px] flex items-end">
              ${coinInfo.market_data.current_price.usd}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-[16px] text-grey-light_200">
              Added at <span className="font-bold">{coinInfo.market_data.current_price.usd}</span>
            </div>
            <div className="flex text-green-light_100 text-[16px]">0.00 (0.00%)</div>
          </div>
        </div>
        <div className="flex flex-col py-2 border-b-[1px] border-b-[#919191]">
          {expecting === 1 && (
            <div className="flex items-center gap-1 font-bold text-[20px]">
              Bullish
              <FcBullish color={'green'} size={20} />
            </div>
          )}
          {expecting === -1 && (
            <div className="flex items-center gap-1 font-bold text-[20px]">
              Bearish
              <FcBearish color={'red'} size={20} />
            </div>
          )}
          <div className="text-[14px] font-poppins_semibold">{timeHorizon}</div>
        </div>
        <div className="flex flex-col py-2">
          <div className="text-[20px] font-bold">Potential Upside</div>
          <div className="text-[14px] font-poppins_semibold">{potentialUpside}</div>
        </div>
      </div>
      <div className="w-[500px] mt-4">
        <div className="flex justify-between pt-4 border-t-[2px] border-t-blue-dark_100">
          <button
            type="button"
            className="w-[150px] font-semibold px-8 py-4 bg-blue-dark_100 text-white rounded-lg"
            onClick={() => setStep(TIKETSTEP.STEPB)}
          >
            Back
          </button>
          <button
            type="button"
            className="w-[150px] font-semibold px-8 py-4 bg-blue-dark_100 text-white rounded-lg"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default StepC
