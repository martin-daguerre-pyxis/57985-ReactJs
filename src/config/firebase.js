import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOzq5x8AHbYc5BsQDwB5O1WyJqqwIcckI",
  authDomain: "curso-1589d.firebaseapp.com",
  databaseURL: "https://curso-1589d-default-rtdb.firebaseio.com",
  projectId: "curso-1589d",
  storageBucket: "curso-1589d.appspot.com",
  messagingSenderId: "850941432083",
  appId: "1:850941432083:web:6729bd64278b2c9685cae6",
  measurementId: "G-KNXR5XBLMD",
};

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
