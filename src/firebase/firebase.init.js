// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzHq-dtaEGII_JIkRNDiHsArcEFd7Zm7g",
    authDomain: "homify-25ffd.firebaseapp.com",
    projectId: "homify-25ffd",
    storageBucket: "homify-25ffd.appspot.com",
    messagingSenderId: "255808370935",
    appId: "1:255808370935:web:453546586de45871b9bbf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;