import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config = {
  apiKey: "AIzaSyDMCTEB48E9BYkD6Uq1yblsLgk3mSijPkc",
  authDomain: "login-facebook-ad0ae.firebaseapp.com",
  databaseURL:
    "https://login-facebook-ad0ae-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "login-facebook-ad0ae.appspot.com",
  messagingSenderId: "622483026366",
};
firebase.initializeApp(config)
//export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()
