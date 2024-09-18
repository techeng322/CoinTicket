import Link from 'next/link'
import { BsTropicalStorm } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa'
import { MdOutlineDashboardCustomize } from 'react-icons/md'

const PostPoll = ({ setTab }) => {
  return (
    <div className="mt-8 bg-[#F3F3F3] w-[400px] h-[150px] flex justify-around pt-8 rounded-lg relative">
      <button className="absolute top-[20px] left-[20px]" onClick={() => setTab('root')}>
        <FaArrowLeft size={14} color={'black'} />
      </button>
      <div className="flex flex-col gap-2 w-[36px] h-[36px]">
        <Link
          href="/create-ct-poll"
          className="rounded-full bg-[white] p-2 flex justify-center items-center hover:mb-2 transition-[2] cursor-pointer"
        >
          <BsTropicalStorm size={20} color={'black'} />
        </Link>
        <div className="font-poppins_medium text-[14px]">CT Poll</div>
      </div>
      <div className="flex flex-col gap-2 w-[36px] h-[36px]">
        <Link
          href="/custom-poll"
          className="rounded-full bg-[white] p-2 flex justify-center items-center hover:mb-2 transition-[2] cursor-pointer"
        >
          <MdOutlineDashboardCustomize size={20} color={'black'} />
        </Link>
        <div className="font-poppins_medium text-[14px]">Custom Poll</div>
      </div>
    </div>
  )
}

export default PostPoll
