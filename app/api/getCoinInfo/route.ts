import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json()
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    return NextResponse.json({ status: 'success!', data: response.data })
  } catch (error) {
    return NextResponse.json({ status: 'failed!', error })
  }
}
