import { RiCoinsLine, RiTrademarkLine } from "react-icons/ri";

import { FiActivity } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import PostModal from "@/components/PostModal";


const MenuButton = ({ children, icon }) => {
    return (
        <button type="button" className="relative text-white px-4 pt-6 pb-2 flex justify-center items-center bg-[#192943] rounded-lg text-[14px]">
            <div className="text-white relative">
                {children}
            </div>
            <div className="absolute top-[0] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] bg-[#192943] p-2">
                {icon}
            </div>
        </button>
    )
}

const MenuSection = () => {
    const [isOpen, setIsOpen] = useState(true)
    const toggleVisible = () => setIsOpen(!isOpen)

    return (
        <div className="grid grid-cols-5 mt-6 gap-4">
            <div className="col-span-4 grid grid-cols-4 gap-4">
                <MenuButton icon={<RiCoinsLine size={`20`} />}>Trending Coins</MenuButton>
                <MenuButton icon={<RiTrademarkLine size={`20`} />}>Top Traders</MenuButton>
                <MenuButton icon={<FiActivity size={`20`} />}>My Activity</MenuButton>
                <MenuButton icon={<FaRegEye size={`20`} />}>Watch List</MenuButton>

            </div>
            <div className="col-span-1">
                <button
                    type="button"
                    className="relative text-white px-4 flex justify-center items-center bg-[#192943] rounded-lg text-[14px] w-full h-full gap-4 active:scale-[1.05]"
                    onClick={toggleVisible}
                    >
                    
                    Create your post
                    <CiCirclePlus size={24} />
                </button>
                <PostModal isVisible={isOpen} onClose={()=>setIsOpen(false)}/>
            </div>
        </div>
    )
}

export default MenuSection