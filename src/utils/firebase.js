// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwugjUvHpYyuSEVd0JSJYiWnxhxw-USAg",
  authDomain: "netflixgpt-0100js.firebaseapp.com",
  projectId: "netflixgpt-0100js",
  storageBucket: "netflixgpt-0100js.appspot.com",
  messagingSenderId: "580029186269",
  appId: "1:580029186269:web:7eceab7311c46d20549b34",
  measurementId: "G-BXFK054LNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
