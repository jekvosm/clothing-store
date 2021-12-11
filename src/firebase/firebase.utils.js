import { initializeApp } from 'firebase/app'

import {
  getFirestore,
  doc,
  collection,
  getDoc,
  setDoc,
  writeBatch,
} from 'firebase/firestore'

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const usersRef = doc(firestore, `/users/${userAuth.uid}`)

  const snapShot = await getDoc(usersRef)

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(usersRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return usersRef
}

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(firestore, collectionKey)

  const batch = writeBatch(firestore)
  objectToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef)
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  promt: 'select_account',
})

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider)

export default firebase
