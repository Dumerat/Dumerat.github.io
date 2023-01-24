mainDisplay.insertAdjacentHTML("beforeend", 
`<button id="open-draw"></button>
<div id="draw-modal">
  <div id="draw-modal-content">
    <div id="draw-button">
        <button id="clear-draw"><i class="fa-solid fa-trash"></i></button>
        <img id="the-code" src="https://fontmeme.com/permalink/230113/3416c7a4dec6268368193b82b1ac3d44.png" alt="1321">
        <button id="close-draw"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div id="canvas-area">
      <canvas id="drawing" width="324" height="490px"></canvas>
    </div>
    <div id="draw-color">
        <input id="color-selector" type="color" value="#000000">
        <div id="brush-div">
            <label for="brush">Taille</label>
            <input id="brush-size" type="range" min="1" max="25" name="brush">
        </div>
        <button id="eraser"><i class="fa-solid fa-eraser"></i></button>
    </div>
  </div>
</div>`)
const modalDraw = document.getElementById("draw-modal");
const openDraw = document.getElementById("open-draw");
const canvasContent = document.getElementById("drawing");
const canvasContext = canvasContent.getContext("2d");
const closeDraw = document.getElementById("close-draw");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear-draw");
const selectedColor = document.getElementById("color-selector");
const brushSelect = document.getElementById("brush-size");
let color = "#000000"
canvasContext.lineWidth = 25;
selectedColor.addEventListener("change", selectColor);
brushSelect.addEventListener("change", selectBrush);

function selectColor(event)
{
    color = event.target.value;
    canvasContext.strokeStyle = color;
    //console.log(color)
}

function selectBrush(event)
{
    let brushSize = event.target.value;
    canvasContext.lineWidth = brushSize;
    console.log (brushSize)
}

openDraw.onclick = function(event) 
{
  modalDraw.style.display = "flex";
  event.preventDefault()
}

closeDraw.onclick = function(event) 
{
  modalDraw.style.display = "none";
  event.preventDefault()
}
canvasContent.width = window.innerWidth;
canvasContent.height = window.innerHeight;

let drawing = false;
let lastX;
let lastY;

// Start drawing
canvasContent.onmousedown = function(event) 
{
  drawing = true;
  lastX = event.offsetX * 6;
  lastY = event.offsetY * 1.9;
};

// Keep drawing
canvasContent.onmousemove = function(event) 
{
  if (drawing) { 
    let x = event.offsetX * 6;
    let y = event.offsetY * 1.9;
    //console.log(x, y, lastX, lastY);
    canvasContext.beginPath();
    canvasContext.moveTo(lastX, lastY);
    canvasContext.lineTo(x, y);
    canvasContext.stroke();
    lastX = x;
    lastY = y;
  }
};

canvasContent.onmouseup = function() 
{
  drawing = false;
};

const eraserColor = "white";
eraser.onclick = function() 
{
    canvasContext.strokeStyle = eraserColor;
    canvasContext.lineWidth = brushSize;
    canvasContext.lineCap = 'round';
};

clear.onclick = function() 
{
    canvasContext.clearRect(0, 0, canvasContent.width, canvasContent.height);
};