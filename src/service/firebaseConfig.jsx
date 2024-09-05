// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2N8DErmWNKHtz0qTIwJMX8WvRLBUyBmk",
  authDomain: "traveler-db113.firebaseapp.com",
  projectId: "traveler-db113",
  storageBucket: "traveler-db113.appspot.com",
  messagingSenderId: "441443951983",
  appId: "1:441443951983:web:b8c297b043cfffedeab49a",
  measurementId: "G-X0J97KYQN0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);