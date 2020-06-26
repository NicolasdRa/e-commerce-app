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

// initializes firestore
export const db = firebase.firestore()

// initializes auth
export const auth = firebase.auth()

// creates user profile doc
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = db.doc(`users/${userAuth.uid}`)
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

// loads data to firestore (to be manually used when needed)
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = db.collection(collectionKey)
  console.log(collectionRef)

  const batch = db.batch()

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
    console.log(newDocRef)
  })

  await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    //     console.log(doc.data())
    //   })
    // }

    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export default firebase
