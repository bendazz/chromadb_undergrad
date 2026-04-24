async function loadDocuments() {
    const response = await fetch('/documents');
    const documents = await response.json();
    const list = document.getElementById('document-list');
    for (const doc of documents) {
        const item = document.createElement('li');
        item.innerHTML = `<strong>${doc.id}:</strong> ${doc.documents}`;
        list.appendChild(item);
    }
}

loadDocuments();
