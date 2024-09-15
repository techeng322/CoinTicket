import Image from "next/image";
import { TbPointFilled } from "react-icons/tb";

const OverviewPage = () => {
    return (
        <div className="p-8">
            <div className="grid grid-cols-2 gap-20 max-w-[800px]">
                <div className="col-span-1 flex flex-col gap-8">

                    <div className="flex flex-col bg-[#F3F3F3] p-4">
                        <div className="font-poppins_bold text-[20px] font-bold">Cards</div>
                        <div className="text-[14px] mt-4">
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />
                                Create cards to predict stock movements</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Keep notifications on to get card alerts</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Close cards to book your returns & score</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Cards cannot be deleted once shared</div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-[#F3F3F3] p-4">
                        <div className="font-poppins_bold text-[20px] font-bold">Active since</div>
                        <div className="text-[14px] mt-4">
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />
                                Performance of cards decides your score</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Scoring activates on minimum of 3 cards</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />It is the sum of % returns of all your cards</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Cards cannot be deleted once shared</div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-[#F3F3F3] p-4">
                        <div className="font-poppins_bold text-[20px] font-bold">Avg. of all cards</div>
                        <div className="text-[14px] mt-4">
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />
                                Create cards to predict stock movements</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Keep notifications on to get card alerts</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Close cards to book your returns & score</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Cards cannot be deleted once shared</div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-[#F3F3F3] p-4">
                        <div className="font-poppins_bold text-[20px] font-bold">Avg. of all cards</div>
                        <div className="text-[14px] mt-4">
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />
                                Create cards to predict stock movements</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Keep notifications on to get card alerts</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Close cards to book your returns & score</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Cards cannot be deleted once shared</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-4">

                    <div className="flex flex-col bg-[#F3F3F3] p-4">
                        <div className="font-poppins_bold text-[20px] font-bold">Avg. of all cards</div>
                        <div className="text-[14px] mt-4">
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />
                                It calculates the avg returns of all cards
                            </div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Open and closed cards are considered
                            </div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Close cards to book your returns & score
                            </div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />If 3 cardxs gave 6%, -1%, & 1%, avg = 2%
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-[#F3F3F3] p-4">
                        <div className="font-poppins_bold text-[20px] font-bold">Active since</div>
                        <div className="text-[14px] mt-4">
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />
                                Performance of cards decides your score</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Scoring activates on minimum of 3 cards</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />It is the sum of % returns of all your cards</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Cards cannot be deleted once shared</div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-[#F3F3F3] p-4">
                        <div className="font-poppins_bold text-[20px] font-bold">Avg. of all cards</div>
                        <div className="text-[14px] mt-4">
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />
                                Create cards to predict stock movements</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Keep notifications on to get card alerts</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Close cards to book your returns & score</div>
                            <div className="font-poppins_regular flex gap-2 items-center">
                                <TbPointFilled size={8} color="black" />Cards cannot be deleted once shared</div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="w-[400px] aspect-[400/270] relative">
                            <Image
                                src="/images/coin_ticket.png"
                                alt=""
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                unoptimized
                                className='rounded'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewPage