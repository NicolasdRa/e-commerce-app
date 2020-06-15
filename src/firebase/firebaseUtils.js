import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyC4w_WCqKb-bAUFgssyNkjE-YEXo2ri-Qs',
  authDomain: 'e-commerce-app-af2c0.firebaseapp.com',
  databaseURL: 'https://e-commerce-app-af2c0.firebaseio.com',
  projectId: 'e-commerce-app-af2c0',
  storageBucket: 'e-commerce-app-af2c0.appspot.com',
  messagingSenderId: '562676286803',
  appId: '1:562676286803:web:80cce960f8c2ca4e6f4da6',
  measurementId: 'G-W2WEKMT7ET'
}

// initializes firebase
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

// // initializes firestore
// const db = firebase.firestore()

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

// Google authentication setup
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
