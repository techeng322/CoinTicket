'use client'

import HistorySection from "./HistorySection"
import SortButtons from "./HistorySection/SortButtons"
import MenuSection from "./MenuSection"
import TopSection from "./TopSection"

const LandingPage = () => {
  return (
    <div className="border-green p-10">
      <TopSection />
      <MenuSection />
      <HistorySection />
    </div>
  )
}

export default LandingPage
