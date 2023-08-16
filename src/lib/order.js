import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";

// get all orders
const getAllOrders = async () => {
  const ref = collection(db, "orders");
  const res = await getDocs(ref);
  let docs = [];
  if (res.docs.length <= 0) {
    return [];
  } else {
    res.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    return docs;
  }
};

const OrderApi = {
  getAllOrders
};

export default OrderApi;
