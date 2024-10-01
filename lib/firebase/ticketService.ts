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
  getDoc,
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
    const ticketsWithUserInfo = await Promise.all(
      ticketsSnapshot.docs.map(async (ticketDoc) => {
        const ticketData = ticketDoc.data()
        const userId = ticketData.userId

        // Query to fetch user data based on userId
        const userDocRef = doc(db, "users", userId) // Specify the collection and document ID
        const userSnapshot = await getDoc(userDocRef)

        let userData = null
        if (userSnapshot.exists()) {
          userData = userSnapshot.data() // Extract the document data
          console.log("User Data:", userData)
        } else {
          console.log("No such document!")
          userData = null
        }

        // Return the combined data for ticket and user
        return {
          id: ticketDoc.id,
          ...userData,
          ...ticketData,
        }
      }),
    )

    return ticketsWithUserInfo
  } catch (error) {
    console.error('Error getting ticket:', error)
    return []
  }
}
