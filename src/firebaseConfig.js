import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCjvOq3ZJqXgaJwd8cIeiQpWMAPEBvH3Q",
  authDomain: "myportfolio-meo.firebaseapp.com",
  projectId: "myportfolio-meo",
  storageBucket: "myportfolio-meo.firebasestorage.app",
  messagingSenderId: "626149232334",
  appId: "1:626149232334:web:e9e87179e5c4b6b9324a9f",
  measurementId: "G-4F98RE0JM1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);