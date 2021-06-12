import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = () => {
  return {
    apiKey: '<apiKey>',
    authDomain: '<authDomain>',
    projectId: '<projectId>',
    storageBucket: '<storageBucket>',
    messagingSenderId: '<messagingSenderId>',
    appId: '<appId>',
    measurementId: '<measurementId>'
  }
}

if (!firebase.apps.length) {
  const config = firebaseConfig()
  firebase.initializeApp(config)
  // if (process.browser) {
  // }
}

const firestore = firebase.firestore()

export { firebase, firestore }
