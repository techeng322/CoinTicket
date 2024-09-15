import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'coin-ticket-c0ace.firebaseapp.com',
  projectId: 'coin-ticket-c0ace',
  storageBucket: 'coin-ticket-c0ace.appspot.com',
  messagingSenderId: '730257195912',
  appId: '1:730257195912:web:391e9dcc5124bef146f03d',
  measurementId: 'G-RK1Y9Y81L4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
