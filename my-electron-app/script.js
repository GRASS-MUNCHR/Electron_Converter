const button = document.getElementById("change-btn");
const label = document.getElementById("image-link-label");
const fileInput = document.getElementById("file-input");
const image = document.getElementById("image-to-convert");

button.addEventListener("click", () => {
    fileInput.click();
})

fileInput.addEventListener("change", (event) => {
    const files = event.target.files;

    if (files.length > 0) {
        label.textContent = files[0].name;
    }
})