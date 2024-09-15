import CoinCard from "./CoinCard"
import Image from "next/image"

const Content = () => {
    return (
        <div className="grid grid-cols-5 mt-6 gap-4">
            <div className="col-span-4 rounded-lg px-6 py-6 bg-[#E4EAF3]">
                <div className="flex gap-4 items-center">
                    <div className="flex justify-center items-center">
                        <div className="w-[60px] aspect-[1/1] relative">
                            <Image
                                src="/images/avatar1.png"
                                alt=""
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                unoptimized
                                className='rounded'
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[#232323] text-[22px] font-bold">Shakib Chowdhury</div>
                        <div className="flex gap-2 text-[grey] items-center text-[15px] mt-2">
                            4 days ago
                            <div className="w-[8px] h-[8px] bg-[#0075FF] rounded-full"></div>
                            <div className="text-[#0075FF] cursor-pointer">Follow</div>
                        </div>
                    </div>
                </div>
                <div className="text-[14px] mt-2">
                    Rank the belove stocks from bullish to bearish
                </div>
                <div className="text-[14px] mt-2">
                    for next <span className="font-bold">1 month</span> tome frame
                </div>
                <div className="flex flex-col mt-4 gap-2">
                    <div className="border border-t-[#D9D9D9] flex justify-between items-center pt-2">
                        <div className="flex flex-col">
                            <div className="font-bold text-[14px] text-[#232323]">
                                Rama Steel Limited
                            </div>
                            <div className="text-[13px] font-poppins_medium text-grey">
                                Added at 10.47
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold text-[14px]">520.00</div>
                            <div className="rounded border-[#00B84A] text-[#00B84A] text-[14px] p-1 flex items-center gap-1">
                                <div className="w-[8px] h-[8px] bg-[#00B84A] rounded-full"></div>
                                UAE
                            </div>
                        </div>
                    </div>
                    <div className="border border-t-[#D9D9D9] flex justify-between items-center pt-2">
                        <div className="flex flex-col">
                            <div className="font-bold text-[14px] text-[#232323]">
                                Mamo Limited
                            </div>
                            <div className="text-[13px] text-grey font-poppins_medium">
                                Added at 11.10
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold text-[14px]">520.00</div>
                            <div className="rounded border-[#00B84A] text-[#00B84A] text-[14px] p-1 flex items-center gap-1">
                                <div className="w-[8px] h-[8px] bg-[#00B84A] rounded-full"></div>
                                UAE
                            </div>
                        </div>
                    </div>
                    <div className="border border-t-[#D9D9D9] flex justify-between items-center pt-2">
                        <div className="flex flex-col">
                            <div className="font-bold text-[14px] text-[#232323]">
                                Jaja Limited
                            </div>
                            <div className="text-[13px] text-grey font-poppins_medium">
                                Added at 12.57
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold text-[14px]">520.00</div>
                            <div className="rounded border-[#00B84A] text-[#00B84A] text-[14px] p-1 flex items-center gap-1">
                                <div className="w-[8px] h-[8px] bg-[#00B84A] rounded-full"></div>
                                UAE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <CoinCard />
            </div>
        </div>
    )
}

export default Content