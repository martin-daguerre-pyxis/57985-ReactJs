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

const categoriesCollectionRef = collection(db, "categories");

class CategoriesDataService {
  addItems = (newItem) => {
    return addDoc(categoriesCollectionRef, newItem);
  };

  updateItem = (id, updatedItem) => {
    const categoryDoc = doc(db, "categories", id);
    return updateDoc(categoryDoc, updatedItem);
  };

  deleteItem = (id) => {
    const categoryDoc = doc(db, "categories", id);
    return deleteDoc(categoryDoc);
  };

  getAllItems = () => {
    return getDocs(categoriesCollectionRef);
  };

  getItem = (id) => {
    const categoryDoc = doc(db, "categories", id);
    return getDoc(categoryDoc);
  };
}

const categoriesDataServiceInstance = new CategoriesDataService();

export default categoriesDataServiceInstance;
