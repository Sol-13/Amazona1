//revisar si esto esta bien configurado

// Import the functions you need from the SDKs you need
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC--JFeBOFNydBWF8dGyHNDIRreA7aiz50",
  authDomain: "a1-7bb0e.firebaseapp.com",
  projectId: "a1-7bb0e",
  storageBucket: "a1-7bb0e.appspot.com",
  messagingSenderId: "851051396406",
  appId: "1:851051396406:web:d6fc0138f51d9b609c8797",
  measurementId: "G-P8DXN32TQC"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };