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

async function runSearch(query) {
    const response = await fetch(`/search?query=${encodeURIComponent(query)}`);
    const results = await response.json();
    const list = document.getElementById('search-results');
    const heading = document.getElementById('results-heading');
    list.innerHTML = '';
    heading.hidden = false;
    for (const doc of results) {
        const item = document.createElement('li');
        item.innerHTML = `<strong>${doc.id}:</strong> ${doc.document} <em>(distance: ${doc.distance.toFixed(4)})</em>`;
        list.appendChild(item);
    }
}

document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        runSearch(query);
    }
});

loadDocuments();
