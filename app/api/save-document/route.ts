// app/api/save-document/route.ts
import { NextResponse } from 'next/server';
import { initializeApp } from "firebase/app";
import { getFirestore, } from "firebase/firestore";
import { saveDocumentData } from "@/lib/firebase/crud"

const firebaseConfig = {
  apiKey: process.env.NEXTJS_APP_API_KEY,
  authDomain: process.env.NEXTJS_APP_AUTH_DOMAIN,
  projectId: "leetcode-board-373e7",
  storageBucket: "leetcode-board-373e7.appspot.com",
  messagingSenderId: "219772485394",
  appId: "1:219772485394:web:4acaa2694ce72639f1fdcb",
  measurementId: "G-257W47PGQ2",
};


export async function POST(request: Request) {
  const { collectionName, documentId, data } = await request.json();
  try {
    await saveDocumentData(collectionName, documentId, data);
    return NextResponse.json({ message: 'Document successfully written!' });
  } catch (error) {
    return NextResponse.json({ error: 'Error writing document', details: (error as Error).message }, { status: 500 });
  }
}
