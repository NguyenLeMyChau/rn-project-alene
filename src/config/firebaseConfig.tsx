// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSany2vGZepZhnOGX8vNaLEbn-rUTAFKU",
  authDomain: "anlene-firebase.firebaseapp.com",
  projectId: "anlene-firebase",
  storageBucket: "anlene-firebase.appspot.com",
  messagingSenderId: "14825508413",
  appId: "1:14825508413:web:6dbb202ce4b9171b2a6454",
  measurementId: "G-N5C5VJ72YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };