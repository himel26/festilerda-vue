// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpNbHHUqBvY_X1x1qU98mdz7RaN7cDsEU",
  authDomain: "festilerda.firebaseapp.com",
  projectId: "festilerda",
  storageBucket: "festilerda.firebasestorage.app",
  messagingSenderId: "1036668597053",
  appId: "1:1036668597053:web:6ae5de592d6455f5d94b54",
  measurementId: "G-SELPJDZ09M"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize and export Firestore Database
export const db = getFirestore(app)