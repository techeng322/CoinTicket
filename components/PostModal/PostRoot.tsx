import { BiPoll } from 'react-icons/bi'
import { IoTicket } from 'react-icons/io5'
import { MdOutlineInsights } from 'react-icons/md'

const PostRoot = ({ setTab }) => {
  return (
    <div className="mt-8 bg-[#F3F3F3] w-[400px] h-[150px] flex justify-around pt-8 rounded-lg">
      <div className="flex flex-col gap-2 w-[36px] h-[36px]">
        <button className="rounded-full bg-[white] p-2 flex justify-center items-center hover:mb-2 transition-[2]">
          <IoTicket size={20} color={'black'} />
        </button>
        <div className="font-poppins_medium text-[14px]">Ticket</div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="rounded-full bg-[#0A1B36] p-2 flex justify-center items-center hover:mb-2 transition-[2]"
          onClick={() => setTab('poll')}
        >
          <BiPoll size={20} color={'white'} />
        </button>
        <div className="font-poppins_medium text-[14px]">Polls</div>
      </div>
      <div className="flex flex-col gap-2 w-[36px] h-[36px]">
        <button className="rounded-full bg-[white] p-2 flex justify-center items-center hover:mb-2 transition-[2]">
          <MdOutlineInsights size={20} color={'black'} />
        </button>
        <div className="font-poppins_medium text-[14px]">Insights</div>
      </div>
    </div>
  )
}

export default PostRoot
