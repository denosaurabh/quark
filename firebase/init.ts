import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAcuZttTpfmwOEES2YCe3N1cOaQuC1UAZI',
  authDomain: 'quark-b44e4.firebaseapp.com',
  databaseURL: 'https://quark-b44e4-default-rtdb.firebaseio.com',
  projectId: 'quark-b44e4',
  storageBucket: 'quark-b44e4.appspot.com',
  messagingSenderId: '424510500692',
  appId: '1:424510500692:web:dde1f71693612fe5bc22c1',
  measurementId: 'G-ECXBF1KV1L',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Get a reference to the database service
export const db = getDatabase(app)
