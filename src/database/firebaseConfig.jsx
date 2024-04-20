// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhvWJ3rm7l7sgcu4TzRbz-l70-1eirgXI",
  authDomain: "adminevento.firebaseapp.com",
  projectId: "adminevento",
  storageBucket: "adminevento.appspot.com",
  messagingSenderId: "815900577092",
  appId: "1:815900577092:web:18817fff1466b9d0825b11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


