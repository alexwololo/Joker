
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOdVaG2M47855bMw2XcEi8_sNPwptVeBc",
  authDomain: "joker-67f23.firebaseapp.com",
  databaseURL: "https://joker-67f23-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "joker-67f23",
  storageBucket: "joker-67f23.appspot.com",
  messagingSenderId: "1017425458996",
  appId: "1:1017425458996:web:835f0c343af1477dbad761"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);



export default firebaseApp;