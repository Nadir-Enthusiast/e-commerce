import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqQQMM3SIbOddG_f8TcjIQZo4RI345TOM",
  authDomain: "e-commerce1-ae557.firebaseapp.com",
  projectId: "e-commerce1-ae557",
  storageBucket: "e-commerce1-ae557.appspot.com",
  messagingSenderId: "1043609877846",
  appId: "1:1043609877846:web:ae0f903ed2cc8b91332af7",
  measurementId: "G-4DG0DKVWDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
