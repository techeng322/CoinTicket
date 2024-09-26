import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/list?order=market_cap_usd_desc&per_page=10&page=1`,
    )
    return NextResponse.json({
      status: 'success!',
      data: data,
    })
  } catch (error) {
    console.log('error', error)
    return NextResponse.json({
      status: 'failed!',
      message: 'server error',
    })
  }
}
