import { NextResponse } from 'next/server'
import { collection, doc, getDoc, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase/clientApp'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')

  if (id) {
    try {
      const faqDoc = doc(db, 'faqs', id)
      const faqSnapshot = await getDoc(faqDoc)
      if (faqSnapshot.exists()) {
        return NextResponse.json({ id: faqSnapshot.id, ...faqSnapshot.data() })
      } else {
        return NextResponse.json({ message: 'FAQ not found' }, { status: 404 })
      }
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch FAQ' }, { status: 500 })
    }
  } else {
    return NextResponse.json({ message: 'ID parameter is required' }, { status: 400 })
  }
}

export async function POST(req: Request) {
  try {
    const newFAQ = await req.json()
    await addDoc(collection(db, 'faqs'), newFAQ)
    return NextResponse.json({ status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create FAQ' }, { status: 500 })
  }
}
