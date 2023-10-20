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

const authsCollectionRef = collection(db, "auth");

class AuthsDataService {

  getItem = (id) => {
    const authDoc = doc(db, "auth", id);
    const roleId = authDoc.role;
    const roleDoc = doc(db, "roles", roleId);
    return getDoc(roleDoc);
  };

}

const authsDataServiceInstance = new AuthsDataService();

export default authsDataServiceInstance;
