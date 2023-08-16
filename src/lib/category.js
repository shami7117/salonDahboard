import { db } from "../config/firebase";
import {
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

// Add New Category
const addCategory = async (data) => {
  console.log("data", data);
  const snapshot = collection(db, "categories");
  let q = query(snapshot, where("name", "==", data.name));
  const categoryExist = await getDocs(q);

  if (categoryExist.docs.length > 0) {
    return {
      message: "Category already exist!",
      code: 0,
    };
  } else {
    const ref = doc(db, "categories", uuidv4());
    await setDoc(ref, data, { merge: true });
    const getRef = doc(db, "categories", ref.id);
    const res = await getDoc(getRef);
    return res.data()
      ? {
        data: { ...res.data(), id: res.id },
        message: "Category added successfully!",
        code: 1,
      }
      : {
        message: "Something went wrong!",
        code: 0,
      };
  }
  // return categoryExist
};

// Get Single Category By Id
// const getCategory = async (id) => {
// };

// Get All Categories
const getCategories = async () => {
  const ref = collection(db, "categories");
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

// Update Category
const updateCategory = async (id, category) => {
  console.log("category in api", category);
  const ref = doc(db, "categories", id);
  await setDoc(ref, { name: category }, { merge: true });
  return {
    ...category,
    id,
  };
};

// Delete Category
const deleteCategory = async (id) => {
  const ref = doc(db, "categories", id);
  await deleteDoc(ref);
  console.log("DELETED")
  return id;
};

// Update Category Status
const activateCategory = async (category) => {
  const data = {
    id: category.key,
    name: category.name,
    isEnabled: true,
  };
  const ref = doc(db, "categories", category.key);
  await setDoc(ref, data, { merge: true });
  return data;
};
// Update Category Status
const deActivateCategory = async (category) => {
  const data = {
    id: category.key,
    name: category.name,
    isEnabled: false,
  };
  const ref = doc(db, "categories", data.id);
  await setDoc(ref, data, { merge: true });
  return data;
};

const categoryApi = {
  addCategory,
  getCategories,
  updateCategory,
  activateCategory,
  deActivateCategory,
  deleteCategory,
};

export default categoryApi;
