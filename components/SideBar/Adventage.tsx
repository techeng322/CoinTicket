import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const Adventage = () => {
  return (
    <div className="w-full relative h-fit-content mt-10">
      <div className="w-full aspect-[1/1] rounded-lg overflow-hidden relative">
        <Image
          src="/images/trade_crypto.svg"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          unoptimized
          className="rounded"
        />
      </div>
      <div className="z-[2] w-full h-full p-6 absolute top-0 l-0">
        <div className="text-[16px] text-white font-spaceGrotesk_medium">
          Trade Crypto With Your Phone.
        </div>
        <div className="text-[14px] text-white flex gap-2 hover:gap-4 transition-[2] items-center leading-4 mt-4 hover:cursor-pointer hover:underline">
          Get App
          <FaArrowRight size={14} />
        </div>
      </div>
    </div>
  )
}

export default Adventage
