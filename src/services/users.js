import { db } from "../config/firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const usersCollectionRef = collection(db, "users");

class UsersDataService {
  addItems = (newItem) => {
    return addDoc(usersCollectionRef, newItem);
  };

  updateItem = (id, updatedItem) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedItem);
  };

  deleteItem = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };

  getAllItems = () => {
    return getDocs(usersCollectionRef);
  };

  getItem = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };
}

const usersDataServiceInstance = new UsersDataService();

export default usersDataServiceInstance;
