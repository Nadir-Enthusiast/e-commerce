import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "e-commerce1-ae557.firebaseapp.com",
  projectId: "e-commerce1-ae557",
  storageBucket: "e-commerce1-ae557.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
  measurementId: `${REACT_APP_FIREBASE_MEASURMENT_ID}`
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage, analytics};