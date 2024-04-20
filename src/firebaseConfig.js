// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTK0uG2GLeUMqSqSHDsG5kWXdh73aPoS0",
  authDomain: "codehacx-5af2e.firebaseapp.com",
  projectId: "codehacx-5af2e",
  storageBucket: "codehacx-5af2e.appspot.com",
  messagingSenderId: "536705295612",
  appId: "1:536705295612:web:b376394ccf19cd060be379",
  measurementId: "G-459FSWQLX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { firestore, auth };
// const analytics = getAnalytics(app);