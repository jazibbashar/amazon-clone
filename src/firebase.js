import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from 'firebase'
const firebaseConfig = {
  // Your Firebase configuration here
  apiKey: "AIzaSyDX_scAl9SrED0_xofAE0wH2Vt_eClwbNM",
  authDomain: "clone-3a061.firebaseapp.com",
  projectId: "clone-3a061",
  storageBucket: "clone-3a061.appspot.com",
  messagingSenderId: "737389448327",
  appId: "1:737389448327:web:0a8e61f4c39d565d66bc22",
  measurementId: "G-X449P98SKB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };