import 'firebase/auth'
import 'firebase/database'
import * as firebase from 'firebase/app'

// Ref: https://firebase.google.com/docs/reference/js/firebase.auth.Error
interface AuthError extends firebase.auth.Error, Error {
  code: string
  credential: string
  email: string
}

const config = {
  apiKey           : 'AIzaSyC5WATfwbgz3CMO9w8HeJdotr_HZwyZLQM',
  authDomain       : 'rss-reader-c26fd.firebaseapp.com',
  databaseURL      : 'https://rss-reader-c26fd.firebaseio.com',
  messagingSenderId: '268679253300',
  projectId        : 'rss-reader-c26fd',
  storageBucket    : 'rss-reader-c26fd.appspot.com'
}

firebase.initializeApp(config)

const authenticateWithTwitter = () => {
  const provider = new firebase.auth.TwitterAuthProvider()

  firebase.auth().signInWithRedirect(provider)
  firebase.auth().getRedirectResult()
    .then(result => {
      if (result.credential) {
        const token = result.credential.accessToken
        const secret = result.credential.secret
      }
      const user = result.user
    })
    .catch((error: AuthError) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.email
      const credential = error.credential
    })
}

firebase.auth().onAuthStateChanged((user: any) => {
  if (user) {
    console.log(user)
  } else {
    authenticateWithTwitter()
  }
})

const writePreference = (userId: string, feedId: string, itemId: string, preference: string) => {
  firebase.database().ref(`preferences/${userId}/${feedId}/${itemId}`).set({
    preference
  })
}

export {writePreference}
