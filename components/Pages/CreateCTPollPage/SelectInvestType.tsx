import { useCreateCTPoll } from '@/providers/CreateCTPollProvider'

const SelectInvestType = () => {
  const { coinText, setCoinText } = useCreateCTPoll()
  return (
    <div className="w-full">
      <div className="w-full">
        <input
          type="text"
          value={coinText}
          onChange={(e) => setCoinText(e.target.value)}
          placeholder="Search coin"
          className="p-2 bg-[#9E9E9E]"
        />
      </div>
      <div className="">
        Select Investment Type
        <input type="text" value={coinText} onChange={(e)=>setCoinText(e.target.value)} />
      </div>
    </div>
  )
}

export default SelectInvestType
