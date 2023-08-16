import { db } from "../../firebase/firebase";
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



const addBusiness = async (data, id) => {
    console.log("data", data);
    const snapshot = collection(db, "businesses");
    let q = query(snapshot, where("email", "==", data.email));
    const BusinessExist = await getDocs(q);

    if (BusinessExist.docs.length > 0) {
        return {
            message: "Business already exist!",
            code: 0,
        };
    } else {
        const ref = doc(db, "businesses", uuidv4());
        await setDoc(ref, data, { merge: true });
        const getRef = doc(db, "businesses", ref.id);
        const res = await getDoc(getRef);
        return res.data()
            ? {
                data: { ...res.data(), id: res.id },
                message: "Business added successfully!",
                code: 1,
            }
            : {
                message: "Something went wrong!",
                code: 0,
            };
    }
    // return BusinessExist
};

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




const BusinessApi = {
    addBusiness,
    getCategories
};

export default BusinessApi;
