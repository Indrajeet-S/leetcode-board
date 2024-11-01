export async function saveDocument(collectionName: string, documentId: string, data: any) {
  try {
    const response = await fetch('/api/save-document', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ collectionName, documentId, data }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.error('Error saving document:', error);
    return false;
  }
  return true
}
