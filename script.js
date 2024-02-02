const canvas = document.getElementById("canvas");
const container = document.getElementById("paint-container");
const ctx = canvas.getContext("2d");


// Variables para el pincel
let colorActual = "black";
let tamanioActual = 5;
let estaDibujando = false;


// Eventos para el mouse
canvas.addEventListener("mousedown", () => { estaDibujando = true; });
canvas.addEventListener("mouseup", () => { estaDibujando = false; });
canvas.addEventListener("mousemove", (e) => {
    if(estaDibujando == true){
        const x = e.clientX - canvas.offsetLeft;  // Desplazamiento horizontal
        const y = e.clientY - canvas.offsetTop;  // Desplazamiento vertical

        ctx.beginPath();
        ctx.arc(x, y, tamanioActual / 2, 0, 2 * Math.PI);
        ctx.fillStyle = colorActual;
        ctx.fill();}
    });

// Seleccionar color
const colores = document.querySelectorAll(".color");
colores.forEach((color) => {
    color.addEventListener("click", () => {
        colorActual = color.dataset.color;
    });
});

const selectorColor = document.getElementById("selector-color");
selectorColor.addEventListener("change", () => {
    colorActual = selectorColor.value;
});

// Seleccionar tamaño
const selectorTamanio = document.getElementById("selector-tamanio");
selectorTamanio.addEventListener("change", () => {
    tamanioActual = selectorTamanio.value;
});

// Borrar
const btnBorrar = document.getElementById("btn-borrar");
btnBorrar.addEventListener("click", () => {
    ctx.clearRect(0, 0, 800, 600)
});

document.getElementById('download-btn').addEventListener('click', function(e) {
    // Convert our canvas to a data URL
    let canvasUrl = canvas.toDataURL();
    // Create an anchor, and set the href value to our data URL
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;

    // This is the name of our downloaded file
    createEl.download = "download-this-canvas";

    // Click the download button, causing a download, and then remove it
    createEl.click();
    createEl.remove();
});