

import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getShoppingList(userId) {
    
    const shoppingList = [];
    const querySnapshot = await getDocs(collection(db, "shopping-list"));
    querySnapshot.forEach((doc) => {
        shoppingList.push({ ...doc.data(), id: doc.id });
    });
    return shoppingList;
}