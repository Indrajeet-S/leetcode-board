// TODO : Use a module bundler for size reduction
import { initializeApp } from "firebase/app"
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore/lite"

// TODO : Use environment variables. Do not add API keys to version control.

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.NEXTJS_APP_API_KEY}`,
  authDomain: `${process.env.NEXTJS_APP_AUTH_DOMAIN}`,
  projectId: "leetcode-board-373e7",
  storageBucket: "leetcode-board-373e7.appspot.com",
  messagingSenderId: "219772485394",
  appId: "1:219772485394:web:4acaa2694ce72639f1fdcb",
  measurementId: "G-257W47PGQ2",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function getDocumentData(collectionName: string, documentId: string) {
  try {
    // Reference to the document we want to retrieve
    const docRef = doc(db, collectionName, documentId)

    // Use getDoc to fetch the document
    const documentSnapshot = await getDoc(docRef)

    // Check if the document exists
    if (documentSnapshot.exists()) {
      // Return document data
      return documentSnapshot.data()
    } else {
      // Return null if document does not exist
      return null
    }
  } catch (error) {
    // Propagate error to the caller
    throw error
  }
}

async function saveDocumentData(
  collectionName: string,
  documentId: string,
  data: any
) {
  try {
    const docRef = doc(db, collectionName, documentId)
    await setDoc(docRef, data)
  } catch (error) {
    throw error
  }
}

export { getDocumentData, saveDocumentData }
