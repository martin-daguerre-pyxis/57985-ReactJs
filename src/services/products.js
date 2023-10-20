import { db } from "../config/firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  // limit,
  where,
} from "firebase/firestore";

const productCollectionRef = collection(db, "items");

class ProductsDataService {
  addItems = (newItem) => {
    return addDoc(productCollectionRef, newItem);
  };

  updateItem = (id, updatedItem) => {
    const productDoc = doc(db, "items", id);
    return updateDoc(productDoc, updatedItem);
  };

  deleteItem = (id) => {
    const productDoc = doc(db, "items", id);
    return deleteDoc(productDoc);
  };

  getAllItems = () => {
    return getDocs(productCollectionRef);
  };

  getCategory = async (categoryId) => {
    const collection_ref = collection(db, "items")
    const q = query(collection_ref, where("category", "==", categoryId))
    const doc_refs = await getDocs(q);
    const res = []
    doc_refs.forEach(category => {
        res.push({
            id: category.id, 
            ...category.data()
        })
    })

    return doc_refs
}

  getItem = (id) => {
    const productDoc = doc(db, "items", id);
    return getDoc(productDoc);
  };
}

const productsDataServiceInstance = new ProductsDataService();

export default productsDataServiceInstance;
