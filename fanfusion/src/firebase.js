/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY7APUkQNxYAU1K6OMdo4k-JGEKraRqJk",
  authDomain: "fanfusion-61fa5.firebaseapp.com",
  projectId: "fanfusion-61fa5",
  storageBucket: "fanfusion-61fa5.appspot.com",
  messagingSenderId: "31305446469",
  appId: "1:31305446469:web:00766247b98d6f72aedf2c",
  measurementId: "G-MZ66JX4TD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage};