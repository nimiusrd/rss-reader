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

interface writePreferenceParams {
  userId: string,
  feedId: string,
  itemId: string,
  preference: string
}

const writePreference = ({userId, feedId, itemId, preference}: writePreferenceParams): void => {
  firebase.database().ref(`preferences/${userId}/${feedId}/${itemId}`)
    .update({
      'value': preference,
      userId,
      feedId,
      itemId
    })
}

interface writeFeedParams {
  userId: string,
  feedId: string,
  title: string,
  url: string
}

const writeFeed = ({userId, feedId, title, url}: writeFeedParams): void => {
  firebase.database().ref(`users/${userId}/feeds`)
    .update({
      [feedId]: true
    })
  firebase.database().ref(`feeds/${feedId}`)
    .update({
      title,
      url,
      users: {
        [userId]: true
      }
    })
}

interface writeItemParams {
  userId: string,
  feedId: string,
  itemId: string,
  title: string,
  link: string,
  description: string
}

const writeItem = ({userId, feedId, itemId, title, link, description}: writeItemParams) => {
  firebase.database().ref(`items/${feedId}/${itemId}`)
    .update({
      title,
      link,
      description,
      feedId,
      'users': {
        [userId]: true
      }
    })

  firebase.database().ref(`feeds/${feedId}/items`)
    .update({
      [userId]: true
    })
}

export {
  writePreference,
  writeFeed,
  writeItem
}
