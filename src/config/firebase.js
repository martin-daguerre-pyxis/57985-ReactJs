// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/******************************************************/
/******************************************************/

//   https://curso-1589d.web.app/

/******************************************************/
/******************************************************/

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOzq5x8AHbYc5BsQDwB5O1WyJqqwIcckI",
  authDomain: "curso-1589d.firebaseapp.com",
  databaseURL: "https://curso-1589d-default-rtdb.firebaseio.com",
  projectId: "curso-1589d",
  storageBucket: "curso-1589d.appspot.com",
  messagingSenderId: "850941432083",
  appId: "1:850941432083:web:6729bd64278b2c9685cae6",
  measurementId: "G-KNXR5XBLMD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);