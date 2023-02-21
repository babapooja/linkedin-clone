
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA3wZqYDbMhrL4P3MNViHmk3yLzjItm7U",
  authDomain: "linkedin-clone-c2390.firebaseapp.com",
  projectId: "linkedin-clone-c2390",
  storageBucket: "linkedin-clone-c2390.appspot.com",
  messagingSenderId: "487224039548",
  appId: "1:487224039548:web:b3d0b7a5f154fad0f311f9",
  measurementId: "G-LRHMND1EYT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();

export { db, auth };
