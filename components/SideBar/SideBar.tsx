'use client'

import LogoutButton from '../AuthButtons/LogoutButton'
import SettingButton from '../SettingButton'
import Adventage from './Adventage'
import Logo from './Logo'
import Menu from './Menu'
import TermsAndCondition from './TermsAndCondition'

const SideBar = () => {
  return (
    <div className="bg-[#0A1B36] w-[220px] px-4">
      <Logo />
      <Menu />
      <Adventage />
      <TermsAndCondition />
      <SettingButton />
      <LogoutButton />
    </div>
  )
}

export default SideBar
