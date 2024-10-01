import { useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import NotificationBox from './NotificationBox'

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleVisible = () => setIsOpen(!isOpen)

  return (
    <div className="relative">
      <button type="button" className="rounded-full relative flex" onClick={toggleVisible}>
        <div className="relative z-[1]">
          <IoIosNotificationsOutline size={30} color="white" />
        </div>
        <div className="absolute z-2 w-[5px] h-[5px] bg-[red] rounded-full top-1 right-1" />
      </button>
      <NotificationBox
        isVisible={isOpen}
        onClose={() => setIsOpen(false)}
        containerClasses="absolute top-[100%] right-[0px]"
      />
    </div>
  )
}

export default Notification
