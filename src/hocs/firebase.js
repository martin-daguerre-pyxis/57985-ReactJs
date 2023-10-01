// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/*
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2023, 10, 29);
    }
  }
}
*/
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOzq5x8AHbYc5BsQDwB5O1WyJqqwIcckI",
  authDomain: "curso-1589d.firebaseapp.com",
  projectId: "curso-1589d",
  storageBucket: "curso-1589d.appspot.com",
  messagingSenderId: "850941432083",
  appId: "1:850941432083:web:6c41464e36cf4e7e85cae6",
  measurementId: "G-LYR84QNKLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

