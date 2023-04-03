// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-gKfVRRRtfLuRqgZW8TDxqHOtfuGwr_A",
    authDomain: "react-cursos-8abc5.firebaseapp.com",
    projectId: "react-cursos-8abc5",
    storageBucket: "react-cursos-8abc5.appspot.com",
    messagingSenderId: "70941368690",
    appId: "1:70941368690:web:fd56b1c0db4e1bd5ebfdeb"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
