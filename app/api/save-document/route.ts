import { NextResponse } from 'next/server';
import { saveDocumentData } from "@/lib/firebase/crud"

export async function POST(request: Request) {
  const { collectionName, documentId, data } = await request.json();
  try {
    await saveDocumentData(collectionName, documentId, data);
    return NextResponse.json({ message: 'Document successfully written!' });
  } catch (error) {
    return NextResponse.json({ error: 'Error writing document', details: (error as Error).message }, { status: 500 });
  }
}
