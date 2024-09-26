import Link from 'next/link'

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
  return (
    <Link href={`/coin-view/${coinData.id}`}>
      <div className="text-[white] cursor-pointer hover:bg-[#0A1B36] px-4 py-2">
        <div className="">
          {coinData.symbol}({coinData.name})
        </div>
      </div>
    </Link>
  )
}

export default CoinItem
