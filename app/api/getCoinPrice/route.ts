import { NextRequest, NextResponse } from 'next/server'
import getCoinPrice from '@/lib/getCoinPrice'

export async function POST(req: NextRequest) {
  try {
    const { coinType } = await req.json()
    const response = await getCoinPrice(coinType)
    return NextResponse.json({ message: 'success', price: response.data })
  } catch (error) {
    return NextResponse.json({ message: 'failed', error: 'can not get price' })
  }
}
