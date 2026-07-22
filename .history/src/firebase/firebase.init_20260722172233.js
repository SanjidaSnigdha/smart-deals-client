// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apikey: import.meta.env.,
  authDomain: import.meta.env.,
  projectId: import.meta,
  VITE_STORAGEBUCKET: "smart-deals-9bbc6.firebasestorage.app",
  VITE_MESSAGINGSENDERID: "910543777816",
  VITE_APPID: "1:910543777816:web:104e81ce4f6b9a981fd36d",
};

//  VITE_APIKEY: "AIzaSyDi7yIgz1rycy73_M0ap84ksmwaioF7KSg",
//   VITE_AUTHDOMAIN: "smart-deals-9bbc6.firebaseapp.com",
//   VITE_PROJECTID: "smart-deals-9bbc6",
//   VITE_STORAGEBUCKET: "smart-deals-9bbc6.firebasestorage.app",
//   VITE_MESSAGINGSENDERID: "910543777816",
//   VITE_APPID: "1:910543777816:web:104e81ce4f6b9a981fd36d",

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the to the service
export const auth = getAuth(app);
