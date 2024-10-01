import HeaderMenu from './HeaderMenu'
import Notification from './Notification'
import ProfileButton from './ProfileButton'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <div className="w-full h-[100px] border-l-[1px] py-6 flex items-center bg-[#0A1B36] px-8 justify-between">
      <HeaderMenu />
      <SearchInput />
      <div className="flex gap-4">
        <Notification />
        <ProfileButton />
      </div>
    </div>
  )
}

export default Header
