import { RiGalleryView2 , RiVerifiedBadgeLine } from 'react-icons/ri'
import { SiGreatlearning } from 'react-icons/si'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { FaQuestion } from 'react-icons/fa6'
import { CiMail } from 'react-icons/ci'

const MenuButton = ({ children }) => {
  return (
    <button className="mt-4 hover:bg-[#2C4369] text-[14px] text-white rounded-lg cursor-pointer py-4 px-6 relative flex items-center gap-4 active:scale-[1.05]">
      {children}
    </button>
  )
}
const Menu = () => {
  return (
    <div className="w-full flex flex-col font-poppins_semibold">
      <MenuButton>
        <div className="flex">
          <RiGalleryView2 size={20} />
        </div>
        Overview
      </MenuButton>
      <MenuButton>
        <RiVerifiedBadgeLine size={20} />
        Get Verified
      </MenuButton>
      <MenuButton>
        <SiGreatlearning size={20} />
        Tutorials
      </MenuButton>
      <MenuButton>
        <LiaUserFriendsSolid size={20} />
        Invite Friends
      </MenuButton>
      <MenuButton>
        <FaQuestion size={20} />
        FAQ
      </MenuButton>
      <MenuButton>
        <CiMail size={20} />
        Mail Box
      </MenuButton>
    </div>
  )
}

export default Menu
