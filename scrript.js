


const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById("sourceContainer").innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" draggable="true" id="draggableImage">`;

        const draggableImage = document.getElementById("draggableImage");
        draggableImage.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text", e.target.id);
        });
    };

    reader.readAsDataURL(file);
});

const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    container.addEventListener("drop", (e) => {
        e.preventDefault();

        const data = e.dataTransfer.getData("text");
        const draggableElement = document.getElementById(data);
        container.appendChild(draggableElement);
    });
});
