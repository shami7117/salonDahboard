import {
  arrayRemove,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../config/firebase";

// Add New Product
const addProduct = async (product) => {
  if (
    product.name === "" ||
    product.price === "" ||
    product.itemsInStock === ""
  ) {
    return {
      message:
        "Please Provide Complete Product Information! Product Name, Price & Items in Stock Required!",
      code: 0,
    };
  } else {
    const snapshot = collection(db, "products");
    let q = query(snapshot, where("name", "==", product.name));
    const productExist = await getDocs(q);

    if (productExist.docs.length > 0) {
      return {
        message: "Product name already exist, please choose other name!",
        code: 0,
      };
    } else {
      const ref = doc(db, "products", uuidv4());
      await setDoc(ref, product, { merge: true });
      const getRef = doc(db, "products", ref.id);
      const res = await getDoc(getRef);
      return res.data()
        ? {
            data: { ...res.data(), id: res.id },
            message: "Product added successfully!",
            code: 1,
          }
        : {
            message: "Something went wrong!",
            code: 0,
          };
    }
  }
};

// Get Single Product By Id
const getProduct = async (id) => {
  const ref = doc(db, "products", id);
  const res = await getDoc(ref);
  return {
    ...res.data(),
    id,
  };
};

// Get All Products
const getProdcuts = async () => {
  const ref = collection(db, "products");
  const res = await getDocs(ref);
  let docs = [];
  if (res.docs.length <= 0) {
    return [];
  } else {
    res.forEach((doc) => {
      docs.push({
        ...doc.data(),
        id: doc.id,
        createdAt: doc?.data()?.createdAt?.toDate()?.toString(),
      });
    });
    return docs;
  }
};

// Update Product
const updateProduct = async (productId, product) => {
  // console.log("product id", productId);
  // console.log("product", product);
  const ref = doc(db, "products", productId);
  // delete product.id;
  await setDoc(ref, product, { merge: true });
  // console.log("product", product);
  return {
    ...product,
    id: productId,
  };
};

// Delete Product
const deleteProduct = async (id) => {
  const ref = doc(db, "products", id);
  await deleteDoc(ref);
  return id;
};

// Get Stats
const getStats = async () => {
  // return response.data;
  const ordersSnapshot = collection(db, "orders");
  let q = query(ordersSnapshot, where("status", "==", "new"));
  const newOrders = await getDocs(q);
  // console.log("new orders", newOrders.docs.length);
  const pendingQuery = query(
    ordersSnapshot,
    where("status", "in", ["accepted", "shipped"])
  );
  const pendingOrders = await getDocs(pendingQuery);
  // console.log("pendingOrders orders", pendingOrders.docs.length);

  const deliveredQuery = query(
    ordersSnapshot,
    where("status", "==", "completed")
  );
  const deliveredOrders = await getDocs(deliveredQuery);
  // console.log("deliveredOrders", deliveredOrders.docs.length);

  const cusRef = collection(db, "customers");
  const customers = await getDocs(cusRef);
  // console.log("customers", customers.docs.length);

  const productsRef = collection(db, "products");
  const products = await getDocs(productsRef);
  // console.log("products", products.docs.length);

  const outOfStockSnapshot = collection(db, "products");
  let outOfStockQuery = query(
    outOfStockSnapshot,
    where("itemsInStock", "==", 0)
  );
  const outOfStock = await getDocs(outOfStockQuery);

  // console.log("outOfStock", outOfStock.docs.length);

  const earningSnapshot = collection(db, "orders");
  let earningQuery = query(
    earningSnapshot,
    where("status", "in", ["completed", "paid"])
  );
  const earnings = await getDocs(earningQuery);

  let totalEarning = 0;
  for (let i = 0; i < earnings.docs.length; i++) {
    totalEarning = totalEarning + earnings.docs[i].data().orderDetails.subtotal;
  }
  // earnings.docs.forEach((e, i) => {
  //   console.log("e", e.);
  // })
  // console.log("totalEarning", totalEarning);

  // console.log("stats: ", {
  //   newOrders: newOrders.docs.length,
  //   pendingOrders: pendingOrders.docs.length,
  //   deliveredOrders: deliveredOrders.docs.length,
  //   customers: customers.docs.length,
  //   products: products.docs.length,
  //   outOfStock: outOfStock.docs.length,
  //   totalEarning,
  // });

  return {
    newOrders: newOrders.docs.length,
    pendingOrders: pendingOrders.docs.length,
    deliveredOrders: deliveredOrders.docs.length,
    customers: customers.docs.length,
    products: products.docs.length,
    outOfStock: outOfStock.docs.length,
    totalEarning,
  };
};

const deleteProductImage = async (data) => {
  const ref = doc(db, "products", data.id);
  await setDoc(ref, { images: arrayRemove(data.url) }, { merge: true });
  const res = await getDoc(ref);
  return {
    ...res.data(),
    id: res.id,
  };
};

const productApi = {
  addProduct,
  getProduct,
  getProdcuts,
  updateProduct,
  deleteProductImage,
  deleteProduct,
  getStats,
};

export default productApi;
