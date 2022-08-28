import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaUcyHBdQDfkYJ65uF3OB92bxZsyCJGyE",
  authDomain: "formsib.firebaseapp.com",
  projectId: "formsib",
  storageBucket: "formsib.appspot.com",
  messagingSenderId: "457525098154",
  appId: "1:457525098154:web:f3b71189af78492fe842d3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
