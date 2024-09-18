import Image from 'next/image'
import { MdArrowDropUp } from 'react-icons/md'

const ProfileSection = () => {
  return (
    <div className="w-full h-full bg-[#192943] rounded-lg p-2 flex flex-col justify-between">
      <div className="border-b flex flex-col gap-1 items-center">
        <div className="relative w-[35px] h-[35px] relative">
          <Image
            src="/images/profile_img.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            unoptimized
            className="rounded"
          />
        </div>
        <div className="text-[14px] text-white text-center font-poppins_semibold">Rifat4843</div>
      </div>
      <div className="mt-1 flex flex-col items-center">
        <div className="text-white text-[14px] font-poppins_medium">Total Balance</div>
        <div className="rounded-lg bg-[#3C5174] px-2 py-1 text-white text-[12px]">$1,1210.29</div>
      </div>
      <div className="flex flex-col items-center mt-2 text-white">
        <div className="text-[10px]">All Time Profit</div>
        <div className="text-[10px] flex items-center flex flex-col items-center text-green">
          <MdArrowDropUp size={14} color={'green'} />
          <span className="flex items-center text-[green]">56.32%</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
