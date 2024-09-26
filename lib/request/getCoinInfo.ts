import axios from 'axios'
import { BASE_API_URL } from '../constants'

export const getCoinInfo = async (id: string) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/getCoinInfo`, { id })
    const { status, data } = response.data

    // Assuming the actual status is inside response.data.status
    if (status === 'failed!') {
      return null
    }
    return data
  } catch (error) {
    console.error('Error fetching coin list:', error)
    return null
  }
}
