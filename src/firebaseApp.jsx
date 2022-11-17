// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_apiKey,
    authDomain: import.meta.env.VITE_APP_authDomain,
    databaseURL: import.meta.env.VITE_APP_databaseURL,
    projectId: import.meta.env.VITE_APP_projectId,
    storageBucket: import.meta.env.VITE_APP_storageBucket,
    messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
    appId: import.meta.env.VITE_APP_appId,
};

console.log(import.meta.env);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export default firebaseApp;
