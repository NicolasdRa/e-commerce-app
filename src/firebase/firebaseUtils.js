import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Google authentication setup
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
