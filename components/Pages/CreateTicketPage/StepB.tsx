import {
  POTENTIALUP,
  TIKETSTEP,
  TIMEHORIZON,
  useCreateTicket,
} from '@/providers/CreateTicketProvider'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

const StepB = () => {
  const { setStep, timeHorizon, setTimeHorizon, potentialUpside, setPotentialUpside, handlePost } =
    useCreateTicket()
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 w-full mt-4 gap-4">
        <div className="col-span-1 flex flex-col gap-4 w-full">
          <div className="text-[16px] font-poppins_semibold">1. Select Time Horizon</div>
          <button
            onClick={() => setTimeHorizon(TIMEHORIZON.NEXT1WEEK)}
            className="bg-blue-dark_100 p-4 flex gap-4 items-center rounded-lg"
          >
            <div
              className={`w-[15px] h-[15px] rounded-full ${timeHorizon === TIMEHORIZON.NEXT1WEEK ? 'bg-[#ffffff]' : 'bg-grey-light_200'}`}
            ></div>
            <div className="text-white font-poppins_bold text-[14px]">Next 1 Week</div>
          </button>
          <button
            onClick={() => setTimeHorizon(TIMEHORIZON.NEXT1MONTH)}
            className="bg-blue-dark_100 p-4 flex gap-4 items-center rounded-lg"
          >
            <div
              className={`w-[15px] h-[15px] rounded-full ${timeHorizon === TIMEHORIZON.NEXT1MONTH ? 'bg-[#ffffff]' : 'bg-grey-light_200'}`}
            ></div>
            <div className="text-white font-poppins_bold text-[14px]">Next 1 Month</div>
          </button>
          <button
            onClick={() => setTimeHorizon(TIMEHORIZON.NEXT1TO6MONTHS)}
            className="bg-blue-dark_100 p-4 flex gap-4 items-center rounded-lg"
          >
            <div
              className={`w-[15px] h-[15px] rounded-full ${timeHorizon === TIMEHORIZON.NEXT1TO6MONTHS ? 'bg-[#ffffff]' : 'bg-grey-light_200'}`}
            ></div>
            <div className="text-white font-poppins_bold text-[14px]">Next 1-6 Month</div>
          </button>
          <button
            onClick={() => setTimeHorizon(TIMEHORIZON.NEXT6TO12MONTHS)}
            className="bg-blue-dark_100 p-4 flex gap-4 items-center rounded-lg"
          >
            <div
              className={`w-[15px] h-[15px] rounded-full ${timeHorizon === TIMEHORIZON.NEXT6TO12MONTHS ? 'bg-[#ffffff]' : 'bg-grey-light_200'}`}
            ></div>
            <div className="text-white font-poppins_bold text-[14px]">Next 6-12 Month</div>
          </button>
          <button
            onClick={() => setTimeHorizon(TIMEHORIZON.MORETHAN1YEAR)}
            className="bg-blue-dark_100 p-4 flex gap-4 items-center rounded-lg"
          >
            <div
              className={`w-[15px] h-[15px] rounded-full ${timeHorizon === TIMEHORIZON.MORETHAN1YEAR ? 'bg-[#ffffff]' : 'bg-grey-light_200'}`}
            ></div>
            <div className="text-white font-poppins_bold text-[14px]">More Than 1 Year</div>
          </button>
        </div>
        <div className="col-span-1 flex flex-col gap-4 w-full">
          <div className="text-[16px] font-poppins_semibold">2. Select Potential Upside</div>
          <button
            onClick={() => setPotentialUpside(POTENTIALUP.UPTO5P)}
            className="bg-blue-dark_100 p-4 flex gap-4 items-center rounded-lg"
          >
            <div
              className={`w-[15px] h-[15px] rounded-full ${potentialUpside === POTENTIALUP.UPTO5P ? 'bg-[#ffffff]' : 'bg-grey-light_200'}`}
            ></div>
            <div className="text-white font-poppins_bold text-[14px]">Up to 5%</div>
          </button>
          <button
            onClick={() => setPotentialUpside(POTENTIALUP.BETWEEN5TO10P)}
            className="bg-blue-dark_100 p-4 flex gap-4 items-center rounded-lg"
          >
            <div
              className={`w-[15px] h-[15px] rounded-full ${potentialUpside === POTENTIALUP.BETWEEN5TO10P ? 'bg-[#ffffff]' : 'bg-grey-light_200'}`}
            ></div>
            <div className="text-white font-poppins_bold text-[14px]">Between 5%-10%</div>
          </button>
          <button
            onClick={() => setPotentialUpside(POTENTIALUP.BETWEEN10TO25)}
            className="bg-blue-dark_100 p-4 flex gap-4 items-center rounded-lg"
          >
            <div
              className={`w-[15px] h-[15px] rounded-full ${potentialUpside === POTENTIALUP.BETWEEN10TO25 ? 'bg-[#ffffff]' : 'bg-grey-light_200'}`}
            ></div>
            <div className="text-white font-poppins_bold text-[14px]">Between 10%-25%</div>
          </button>
          <button
            onClick={() => setPotentialUpside(POTENTIALUP.BETWEEN25TO50)}
            className="bg-blue-dark_100 p-4 flex gap-4 items-center rounded-lg"
          >
            <div
              className={`w-[15px] h-[15px] rounded-full ${potentialUpside === POTENTIALUP.BETWEEN25TO50 ? 'bg-[#ffffff]' : 'bg-grey-light_200'}`}
            ></div>
            <div className="text-white font-poppins_bold text-[14px]">Between 25%-50%</div>
          </button>
          <button
            onClick={() => setPotentialUpside(POTENTIALUP.MORETHAN50P)}
            className="bg-blue-dark_100 p-4 flex gap-4 items-center rounded-lg"
          >
            <div
              className={`w-[15px] h-[15px] rounded-full ${potentialUpside === POTENTIALUP.MORETHAN50P ? 'bg-[#ffffff]' : 'bg-grey-light_200'}`}
            ></div>
            <div className="text-white font-poppins_bold text-[14px]">More than 50%</div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className="col-span-1 flex justify-between">
          <button
            onClick={() => setStep(TIKETSTEP.STEPA)}
            className="rounded-full active:scale-[1.05]"
          >
            <FaArrowAltCircleLeft size={40} color={`#0A1B36`} />
          </button>
          <button
            type="button"
            onClick={() => setStep(TIKETSTEP.STEPC)}
            className="text-white text-[14px] font-poppins_semibold active:scale-[1.05] w-[150px] bg-blue-dark_100 px-8 py-4 rounded-lg"
          >
            Preview
          </button>
        </div>
        <div className="col-span-1">
          <button
            type="button"
            onClick={handlePost}
            className="text-white text-[14px] font-poppins_semibold active:scale-[1.05] w-[150px] bg-blue-dark_100 px-8 py-4 rounded-lg"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default StepB
