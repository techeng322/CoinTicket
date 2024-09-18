import { IoSettingsOutline } from 'react-icons/io5'

const SettingButton = () => {
  return (
    <button className="text-[14px] text-white rounded-lg cursor-pointer py-4 px-6 font-bold relative flex items-center gap-4 hover:bg-[#2C4369] w-full active:scale-[1.05]">
      <IoSettingsOutline size={20} />
      Setting
    </button>
  )
}

export default SettingButton
