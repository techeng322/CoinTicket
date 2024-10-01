import useClickOutside from '@/hooks/useClickOutsite'
import { getCoins } from '@/lib/request/getCoins'
import { useEffect, useState } from 'react'
import CoinItem from './CoinItem'

interface SearchCoinProps {
  isVisible: boolean
  onClose: () => void
  containerClasses: string
}

const SearchCoin: React.FC<SearchCoinProps> = ({ isVisible, onClose, containerClasses }) => {
  const { ref } = useClickOutside(onClose)
  const [coins, setCoins] = useState([])

  useEffect(() => {
    if (isVisible) return
    const init = async () => {
      const coinsData = await getCoins()
      const temp = coinsData.slice(0, 10)
      setCoins(temp)
    }
    init()
  }, [isVisible])

  if (!isVisible) return null

  return (
    isVisible && (
      <div
        className={`w-[450px] h-[600px] bg-[#192943] ${containerClasses} z-[100] shadow-[1px_1px_5px_5px_#00000036] rounded-lg transition-[10] p-4`}
        ref={ref}
      >
        <div className="flex mt-4 justify-between gap-4">
          <button
            type="button"
            className="rounded-[10px] bg-[#0A1B36] w-[100px] p-2 text-white active:scale-[1.05] poppins_semibold text-[14px]"
          >
            All
          </button>
          <button
            type="button"
            className="rounded-[10px] bg-[#0A1B36] w-[100px] p-2 text-white active:scale-[1.05] poppins_semibold text-[14px]"
          >
            Find Users
          </button>
          <button
            type="button"
            className="rounded-[10px] bg-[#0A1B36] w-[100px] p-2 text-white active:scale-[1.05] poppins_semibold text-[14px]"
          >
            Find Coins
          </button>
        </div>
        <div className="flex flex-col gap-2 border-[1px] border-[white] min-h-[500px] mt-4 ">
          {coins?.map((coin, i) => <CoinItem key={i} coinData={coin} />)}
        </div>
      </div>
    )
  )
}

export default SearchCoin
