const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function updatePreview() {
  preview.innerHTML = marked.parse(editor.value);
}

editor.addEventListener("input", updatePreview);

// Initial render
updatePreview();
