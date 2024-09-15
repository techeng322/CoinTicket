import { CiFilter } from 'react-icons/ci'

const FilterButton = () => {
  return (
    <div className="rounded-full bg-[#0A1B36] flex justify-center items-center p-2 shadow-lg hover:cursor-pointer">
      <CiFilter size={20} color="white"/>
    </div>
  )
}

export default FilterButton
