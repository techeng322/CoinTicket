import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

interface AlertProps {
  icon: React.ReactNode
  text: React.ReactNode // The content inside the alert
}

const Alert: React.FC<AlertProps> = ({ icon, text }) => {
  return (
    <div className="flex justify-between w-full rounded-md bg-[#F1F1F1] p-4 items-center text-[14px]">
      <div className="flex items-center gap-2">
        {icon}
        {text}
      </div>
      <div className="mr-2">
        <MdOutlineClose className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Alert
