import Link from 'next/link'
import { useRouter } from 'next/navigation'

type CoinDataType = {
  id: string
  symbol: string
  name: string
  image: string
  usd: number
}

type CoinItemProps = {
  coinData: CoinDataType
}

const CoinItem: React.FC<CoinItemProps> = ({ coinData }) => {
  const router = useRouter()
  const handleClick = (coinId: string) => {
    router.push(`/coin-view/${coinId}`)
  }
  return (
    <button onClick={() => handleClick(coinData.id)}>
      <div className="text-[white] cursor-pointer hover:bg-[#0A1B36] px-4 py-2">
        <div className="">
          {coinData.symbol}({coinData.id})
        </div>
      </div>
    </button>
  )
}

export default CoinItem
