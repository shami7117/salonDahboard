import { notification } from "antd";
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";

const { auth, db } = require("@/config/firebase");
const { signOut, updateEmail } = require("firebase/auth");

// Logout user
const logout = async () => {
  await signOut(auth)
    .then(() => console.log("logout"))
    .catch((e) => console.log("error", e));
};

const updateProfile = async (id, data) => {
  const userRef = doc(db, "users", id);
  const res = await getDoc(userRef);
  if (res.data().email === data.email) {
    await setDoc(userRef, data, { merge: true });
    notification.open({
      type: "success",
      message: "Profile updated successfully",
      placement: "top",
    });
    return data;
  } else {
    console.log("auth.currentUser",auth.currentUser);
    updateEmail(auth.currentUser, data.email)
      .then(async () => {
        const ref = doc(db, "users", id);
        await setDoc(ref, data, { merge: true });
        return data;
      })
      .catch((e) => {
        notification.open({
          message: "Please login again to update profile!",
          type: "error",
          placement: "top",
        });
      });
  }
};

// get all orders
const getAllCustomers = async () => {
  const ref = collection(db, "customers");
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

const authApi = {
  logout,
  updateProfile,
  getAllCustomers
};

export default authApi;
