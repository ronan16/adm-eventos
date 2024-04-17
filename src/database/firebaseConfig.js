import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ_LWmmCaGpiDGDdXkx7HkhyyM6EOHfIc",
  authDomain: "ifpr-firebase.firebaseapp.com",
  projectId: "ifpr-firebase",
  storageBucket: "ifpr-firebase.appspot.com",
  messagingSenderId: "488216959052",
  appId: "1:488216959052:web:9fccf161ea2589ebc1fce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}


