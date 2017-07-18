import {initializeApp, auth} from 'firebase'

const config = {
  apiKey: 'AIzaSyC5WATfwbgz3CMO9w8HeJdotr_HZwyZLQM',
  authDomain: 'rss-reader-c26fd.firebaseapp.com',
  databaseURL: 'https://rss-reader-c26fd.firebaseio.com',
  messagingSenderId: '268679253300',
  projectId: 'rss-reader-c26fd',
  storageBucket: 'rss-reader-c26fd.appspot.com'
}

initializeApp(config)

const provider = new auth.TwitterAuthProvider()
auth().signInWithRedirect(provider)
auth().getRedirectResult().then(result => {
  if (result.credential) {
    const token = result.credential.accessToken
    const secret = result.credential.secret
  }
  const user = result.user
}).catch(error => {
  const errorCode = error.code
  const errorMessage = error.message
  const email = error.email
  const credential = error.credential
})
