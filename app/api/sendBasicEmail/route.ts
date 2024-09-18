import sendEmail from '@/lib/sendEmail'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const { subject, emailAddress } = await req.json()
  const data = {
    from: 'sidney@syncstream.ai',
    to: emailAddress,
    subject,
  }

  try {
    const response = await sendEmail(data)
    return response.data
  } catch (err) {
    return err.response.data
  }
}
