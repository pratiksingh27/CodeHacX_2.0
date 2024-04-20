// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; 
// import { getAnalytics } from "firebase/analytics";

console.log(import.meta.env.REACT_SOME_KEY)

const firebaseConfig = {
  /* apiKey: "AIzaSyCTK0uG2GLeUMqSqSHDsG5kWXdh73aPoS0",
  authDomain: "codehacx-5af2e.firebaseapp.com",
  projectId: "codehacx-5af2e",
  storageBucket: "codehacx-5af2e.appspot.com",
  messagingSenderId: "536705295612",
  appId: "1:536705295612:web:b376394ccf19cd060be379",
  measurementId: "G-459FSWQLX0" */
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { firestore, auth, storage };
// const analytics = getAnalytics(app);