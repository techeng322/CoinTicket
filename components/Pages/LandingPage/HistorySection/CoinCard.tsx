import { FiArrowDownLeft } from "react-icons/fi";
import { LuArrowUpRight } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";



const CoinCard = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="bg-[#192943] rounded-lg relative w-full aspect-[220/167] p-4">
                <div className="flex justify-between items-center">
                    <div className="flex text-[white] gap-2">
                        <div className="w-[35px] h-[35px] relative">
                            <Image src="/images/bitcoin-cryptocurrency.svg"
                                alt=""
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                unoptimized
                                className='rounded' />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[14px]">Bitcoin</span>
                            <span className="text-[14px]">$ 38.769,45</span>
                        </div>
                    </div>
                    <span className="#AB9F9F text-[16px] text-white">BTC</span>
                </div>
                <div className="w-full aspect-[184/36] mt-4 relative">
                    <Image src="/images/down_vector.png"
                        alt=""
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        unoptimized
                        className='rounded' />
                </div>
                <div className="flex justify-end font-bold text-[red] mt-4 items-center">
                    <FiArrowDownLeft size={20} color="#A13D2F" />
                    3.7%
                </div>
            </div>
            <div className="bg-[#192943] rounded-lg relative w-full aspect-[220/167] p-4">
                <div className="flex justify-between items-center">
                    <div className="flex text-[white] gap-2">
                        <div className="w-[35px] h-[35px] relative">
                            <Image src="/images/ethereum-cryptocurrency.svg"
                                alt=""
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                unoptimized
                                className='rounded' />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[14px]">Ethereum</span>
                            <span className="text-[14px]">$ 38.769,45</span>
                        </div>
                    </div>
                    <span className="#AB9F9F text-[16px] text-white">BTC</span>
                </div>
                <div className="w-full aspect-[184/36] mt-4 relative">
                    <Image src="/images/up_vector.png"
                        alt=""
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        unoptimized
                        className='rounded' />
                </div>
                <div className="flex justify-end font-bold text-[#2FA15D] mt-4 items-center">
                    <LuArrowUpRight size={20} color="#2FA15D" />
                    3.7%
                </div>
            </div>
            <div className="bg-[#192943] rounded-lg px-4 py-2 flex text-white items-center gap-2 cursor-pointer">
                <FaChevronRight size={14} />
                View all
            </div>
        </div>
    )
}

export default CoinCard