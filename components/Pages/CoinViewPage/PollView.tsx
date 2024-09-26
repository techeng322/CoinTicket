import Image from 'next/image'
import { MdOutlinePoll } from 'react-icons/md'
import { FaRegComment } from 'react-icons/fa'
import { CiBookmark , CiFilter , CiShare1 } from 'react-icons/ci'

const PollView = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="col-span-1">
        <div className="rounded-lg bg-blue-dark_100 p-4">
          <div className="flex flex-start gap-2">
            <div className="w-[80px] aspect-[1/1] relative flex justify-center">
              <Image
                src="/images/bear1.png"
                alt=""
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                unoptimized
                className="rounded"
              />
              <div className="font-poppins_bold rounded-lg text-[10px] text-black flex items-center justify-center w-[60px] h-[17px] cursor-pointer absolute bottom-0 bg-white">
                301
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-white font-poppins-bold text-[20px]">UJJAL KUMAR DAS</div>
              <div className="text-grey-light_200">4 days ago</div>
            </div>
          </div>
          <div className="flex justify-between mt-4 bg-brown-light_200 rounded-md">
            <div className="bg-white p-2 rounded-md">
              <div className="text-[14px] font-poppins_semibold">
                Central Depository Services NGE
              </div>
              <div className="text-[14px] font-poppins_semibold">NGE</div>
            </div>
            <div className="flex items-center text-black p-2">16.67%</div>
          </div>
          <div className="flex justify-between mt-4 bg-brown-light_200 rounded-md">
            <div className="bg-white p-2 rounded-md">
              <div className="text-[14px] font-poppins_semibold">
                Central Depository Services NGE
              </div>
              <div className="text-[14px] font-poppins_semibold">NGE</div>
            </div>
            <div className="flex items-center text-black p-2">16.67%</div>
          </div>
          <div className="flex justify-between mt-4 bg-brown-light_200 rounded-md">
            <div className="bg-white p-2 rounded-md">
              <div className="text-[14px] font-poppins_semibold">
                Central Depository Services NGE
              </div>
              <div className="text-[14px] font-poppins_semibold">NGE</div>
            </div>
            <div className="flex items-center text-black p-2">16.67%</div>
          </div>
          <div className="flex justify-between mt-4 bg-brown-light_200 rounded-md">
            <div className="bg-white p-2 rounded-md">
              <div className="text-[14px] font-poppins_semibold">
                Central Depository Services NGE
              </div>
              <div className="text-[14px] font-poppins_semibold">NGE</div>
            </div>
            <div className="flex items-center text-black p-2">16.67%</div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-4">
              <MdOutlinePoll size={20} color="#B5B5B5" className="cursor-pointer" />
              <FaRegComment size={20} color="#B5B5B5" className="cursor-pointer" />
            </div>
            <div className="flex gap-2">
              <CiShare1 size={20} color="#B5B5B5" className="cursor-pointer" />
              <CiBookmark size={20} color="#B5B5B5" className="cursor-pointer" />
              <CiFilter size={20} color="#B5B5B5" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  )
}

export default PollView
