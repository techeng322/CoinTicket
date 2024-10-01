import { getTickets } from '@/lib/firebase/ticketService'
import { useCoinView } from '@/providers/CoinViewProvider'
import { useEffect, useState } from 'react'
import Ticket from './Ticket'

const TicketView = () => {
  const { coinInfo } = useCoinView()
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const init = async () => {
      const response = await getTickets(coinInfo.id)
      setTickets(response)
    }
    init()
  }, [coinInfo.id])
  console.log("chani-response", tickets)

  return (
    <div className="w-full flex flex-wrap gap-8">
      {tickets.map((ticket, i) => (
        <Ticket key={i} {...ticket} />
      ))}
    </div>
  )
}

export default TicketView
