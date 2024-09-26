import axios from 'axios'
import { BASE_API_URL } from '../constants'

export const getCoins = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getCoinsList`)
    const { status, data } = response.data
    // Assuming the actual status is inside response.data.status
    if (status === 'failed!') {
      return []
    }
    return data
  } catch (error) {
    console.error('Error fetching coin list:', error)
    return []
  }
}
