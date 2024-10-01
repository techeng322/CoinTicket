import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDocs,
  deleteDoc,
  where,
  and,
  query,
} from 'firebase/firestore'
import { db } from './clientApp'
import { Ticket } from '@/lib/types'

export async function createTicket(ticket: Ticket): Promise<void> {
  try {
    const pollsCollection = collection(db, 'tickets')
    await addDoc(pollsCollection, ticket)
    console.log('ticket successfully saved!')
  } catch (error) {
    console.error('Error saving ticket:', error)
  }
}

export async function getTickets(coinId: string): Promise<any> {
  try {
    // First, fetch tickets based on coinId
    const ticketsQuery = query(collection(db, 'tickets'), where('coinId', '==', coinId))
    const ticketsSnapshot = await getDocs(ticketsQuery)

    // Map over the results and fetch related user data for each ticket
    const ticketsWithUsernames = await Promise.all(
      ticketsSnapshot.docs.map(async (ticketDoc) => {
        const ticketData = ticketDoc.data()
        const userId = ticketData.userId

        // Query to fetch user data based on userId
        const userQuery = query(
          collection(db, 'users'), // This should query the 'users' collection, not 'ticket'
          where('id', '==', userId),
        )
        const userSnapshot = await getDocs(userQuery)

        let username = 'Unknown'
        if (!userSnapshot.empty) {
          const userData = userSnapshot.docs[0].data()
          username = userData.username || 'Unknown'
        }

        // Return the combined data for ticket and user
        return {
          id: ticketDoc.id,
          username,
          ...ticketData,
        }
      }),
    )

    return ticketsWithUsernames
  } catch (error) {
    console.error('Error getting ticket:', error)
    return []
  }
}
