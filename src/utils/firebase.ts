// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_firebaseKey,
  authDomain: "suit-up-de599.firebaseapp.com",
  projectId: "suit-up-de599",
  storageBucket: "suit-up-de599.firebasestorage.app",
  messagingSenderId: "468705325710",
  appId: "1:468705325710:web:63327032b08863a289cfdf",
  measurementId: "G-5JEED1VJEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();