// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoRzW3gUVQ6suqoVaTj2nc4-8HQSMgFTM",
  authDomain: "technoriya-909aa.firebaseapp.com",
  projectId: "technoriya-909aa",
  storageBucket: "technoriya-909aa.appspot.com",
  messagingSenderId: "654988696810",
  appId: "1:654988696810:web:5588d573c00c45c64bcb93",
  measurementId: "G-3GK7MKRRK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
