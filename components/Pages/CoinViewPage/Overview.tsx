import CoinInfo from './CoinInfo'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { CiShoppingCart } from 'react-icons/ci'
import { CgWebsite } from 'react-icons/cg'

const OverView = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <CoinInfo />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="col-span-1 rounded-md bg-blue-light_300 p-4">
          <div className="flex justify-between items-center">
            <div className="text-[14px] font-poppins_semibold flex items-center gap-2">
              <AiOutlineDollarCircle size={25} color={'#98572C'} />
              New Net Income
            </div>
            <div className="flex gap-4">
              <div className="w-[25px] h-[25px] text-[10px] p-1 text-white rounded-full bg-[#98572C] flex justify-center items-center">
                25+
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <div className="flex flex-col">
              <div className="text-[32px] font-bold">£8,245.00</div>
              <div className="text-[14px] text-grey-light_200 mt-2">
                <span className="text-brown-light_100 mr-2">- 0,5%</span>
                from last week
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="col-span-1 rounded-md bg-blue-light_300 p-4">
          <div className="flex justify-between items-center">
            <div className="text-[14px] font-poppins_semibold flex items-center gap-2">
              <CiShoppingCart size={25} color={'#98572C'} />
              Max Supply
            </div>
            <div className="flex gap-4">
              <div className="w-[25px] h-[25px] text-[10px] p-1 text-white rounded-full bg-[#98572C] flex justify-center items-center">
                25+
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <div className="flex flex-col">
              <div className="text-[32px] font-bold">256</div>
              <div className="text-[14px] text-grey-light_200 mt-2">
                <span className="text-brown-light_100 mr-2">- 0,5%</span>
                from last week
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="col-span-1 rounded-md bg-blue-light_300 p-4">
          <div className="flex justify-between items-center">
            <div className="text-[14px] font-poppins_semibold flex items-center gap-2">
              <CgWebsite size={25} color={'#98572C'} />
              Website
            </div>
            <div className="flex gap-4">
              <div className="w-[25px] h-[25px] text-[10px] p-1 text-white rounded-full bg-[#98572C] flex justify-center items-center">
                25+
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <div className="flex flex-col">
              <div className="text-[32px] font-bold">1256</div>
              <div className="text-[14px] text-grey-light_200 mt-2">
                <span className="text-brown-light_100 mr-2">- 0,5%</span>
                from last week
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="col-span-1 rounded-md bg-blue-light_300 p-4">
          <div className="flex justify-between items-center">
            <div className="text-[14px] font-poppins_semibold flex items-center gap-2">
              <AiOutlineDollarCircle size={25} color={'#98572C'} />
              Holders
            </div>
            <div className="flex gap-4">
              <div className="w-[25px] h-[25px] text-[10px] p-1 text-white rounded-full bg-[#98572C] flex justify-center items-center">
                25+
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <div className="flex flex-col">
              <div className="text-[32px] font-bold">£8,245.00</div>
              <div className="text-[14px] text-grey-light_200 mt-2">
                <span className="text-brown-light_100 mr-2">1 %</span>
                from last week
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="col-span-1 rounded-md bg-blue-light_300 p-4">
          <div className="flex justify-between items-center">
            <div className="text-[14px] font-poppins_semibold flex items-center gap-2">
              <CiShoppingCart size={25} color={'#98572C'} />
              Chains
            </div>
            <div className="flex gap-4">
              <div className="w-[25px] h-[25px] text-[10px] p-1 text-white rounded-full bg-[#98572C] flex justify-center items-center">
                25+
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <div className="flex flex-col">
              <div className="text-[32px] font-bold">256</div>
              <div className="text-[14px] text-grey-light_200 mt-2">
                <span className="text-brown-light_100 mr-2">- 0,5%</span>
                from last week
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="col-span-1 rounded-md bg-blue-light_300 p-4">
          <div className="flex justify-between items-center">
            <div className="text-[14px] font-poppins_semibold flex items-center gap-2">
              <CgWebsite size={25} color={'#98572C'} />
              Circulating Supply
            </div>
            <div className="flex gap-4">
              <div className="w-[25px] h-[25px] text-[10px] p-1 text-white rounded-full bg-[#98572C] flex justify-center items-center">
                25+
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <div className="flex flex-col">
              <div className="text-[32px] font-bold">1356</div>
              <div className="text-[14px] text-grey-light_200 mt-2">
                <span className="text-brown-light_100 mr-2">0,5%</span>
                from last week
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverView
