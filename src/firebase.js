import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCYiUhO5v6QfSfqr0O70u8SOxiJuKH3uSk",
    authDomain: "vue-firebase-ede32.firebaseapp.com",
    databaseURL: "https://vue-firebase-ede32.firebaseio.com",
    projectId: "vue-firebase-ede32",
    storageBucket: "vue-firebase-ede32.appspot.com",
    messagingSenderId: "743877093077",
    appId: "1:743877093077:web:09cf42a6f8ba79f4d2e45c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth } 