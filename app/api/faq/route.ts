import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, doc, getDoc, setDoc, Timestamp, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/clientApp';
import { FAQ } from "@/lib/types"


// In-memory store for demonstration purposes
// const now = Timestamp.now()
// const faqs: FAQ[] = [
//   {
//     id: 'faq1',
//     question: 'What is TypeScript?',
//     answer: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
//     category: 'Programming', // Optional field
//     createdAt: now,
//     updatedAt: now
//   },
//   {
//     id: 'faq2',
//     question: 'How does Express work?',
//     answer: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
//     category: 'Frameworks', // Optional field
//     createdAt: now,
//     updatedAt: now
//   }
// ];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (id) {
    try {
      const faqDoc = doc(db, 'faqs', id);
      const faqSnapshot = await getDoc(faqDoc);
      if (faqSnapshot.exists()) {
        return NextResponse.json({ id: faqSnapshot.id, ...faqSnapshot.data() });
      } else {
        return NextResponse.json({ message: 'FAQ not found' }, { status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch FAQ' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'ID parameter is required' }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    console.log("chani")
    const newFAQ = await req.json()
    await addDoc(collection(db, "faqs"), newFAQ);
    return NextResponse.json( { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create FAQ' }, { status: 500 });
  }
}

// export async function PUT(request: Request) {
//   const updatedFAQ: FAQ = await request.json();
//   const index = faqs.findIndex(faq => faq.id === updatedFAQ.id);
//   if (index !== -1) {
//     faqs[index] = updatedFAQ;
//     return NextResponse.json(updatedFAQ);
//   } else {
//     return NextResponse.json({ message: 'FAQ not found' }, { status: 404 });
//   }
// }

// export async function DELETE(request: Request) {
//   const url = new URL(request.url);
//   const id = url.searchParams.get('id');

//   if (id) {
//     const index = faqs.findIndex(faq => faq.id === id.toString());
//     if (index !== -1) {
//       const [deletedFAQ] = faqs.splice(index, 1);
//       return NextResponse.json(deletedFAQ);
//     } else {
//       return NextResponse.json({ message: 'FAQ not found' }, { status: 404 });
//     }
//   } else {
//     return NextResponse.json({ message: 'ID parameter is required' }, { status: 400 });
//   }
// }
