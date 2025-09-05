// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3B_x-_MeLqmBjZfoyN9zOyew7ofjqSMw",
  authDomain: "english-ai-tutor-6a34b.firebaseapp.com",
  projectId: "english-ai-tutor-6a34b",
  storageBucket: "english-ai-tutor-6a34b.firebasestorage.app",
  messagingSenderId: "296028766801",
  appId: "1:296028766801:web:5bd536077edd3774dfee70",
  measurementId: "G-3SJLRH4LB9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

