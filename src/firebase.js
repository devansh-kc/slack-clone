import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVVurU2F6iaZI_iDJe_p0QsQzU3gc6mzI",
  authDomain: "slack-clone-cfc47.firebaseapp.com",
  projectId: "slack-clone-cfc47",
  storageBucket: "slack-clone-cfc47.appspot.com",
  messagingSenderId: "745352894380",
  appId: "1:745352894380:web:71ffeb01f2a1daf3be8c09",
  measurementId: "G-DY8LPHXJ2V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };

export default db;
