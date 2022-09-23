import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const postDoc = async (data, collectionName) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });

    console.log("documment written with ID " + docRef.id);
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export default postDoc;
