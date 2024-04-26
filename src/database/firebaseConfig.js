import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbdsN4VlWRzL0lSEPWb2ibkvknX3zV7rI",
    authDomain: "ronan-admin-evento.firebaseapp.com",
    projectId: "ronan-admin-evento",
    storageBucket: "ronan-admin-evento.appspot.com",
    messagingSenderId: "345124784036",
    appId: "1:345124784036:web:aeafbe7f139b649a64e331"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
