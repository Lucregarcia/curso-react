// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbwBAalao-Q0I_yjKLt0Vv7QPwDqRinIk",
  authDomain: "basset-complements.firebaseapp.com",
  projectId: "basset-complements",
  storageBucket: "basset-complements.appspot.com",
  messagingSenderId: "610679533599",
  appId: "1:610679533599:web:048392a1774be7d942a52a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);