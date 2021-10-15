import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const config = {
  apiKey: 'AIzaSyD-w0jTRlDt0Y5A0PLKT3G6rvf98Z5RmqA',
  authDomain: 'clothing-db-28518.firebaseapp.com',
  projectId: 'clothing-db-28518',
  storageBucket: 'clothing-db-28518.appspot.com',
  messagingSenderId: '243186436269',
  appId: '1:243186436269:web:5a9632fee7a3f402149e24',
  measurementId: 'G-20L1PS1KYM',
}

const firebase = initializeApp(config)

export const auth = getAuth(firebase)
export const firestore = getFirestore(firebase)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ promt: 'select_account' })

export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default firebase
