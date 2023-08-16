// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/auth'// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4BQZtSYi5D1rW669VQflruWH0zGsWn4g",
    authDomain: "salon-4d8b5.firebaseapp.com",
    projectId: "salon-4d8b5",
    storageBucket: "salon-4d8b5.appspot.com",
    messagingSenderId: "318258505021",
    appId: "1:318258505021:web:cd720d6ad99c608a99d154"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const Storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
