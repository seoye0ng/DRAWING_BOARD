//left btn
const modeBtn = document.querySelector(".modeBts");
const eraseBtn = document.querySelector(".eraseBts");
const destroyBtn = document.querySelector(".destroyBts");

//canvas&color
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector(".lineWidth");

//right btns
const moreBtn = document.querySelector(".moreBtn");
const menuBtns = document.querySelector(".menuBtns");
const btn = document.querySelector("#menuClosed");
const saveBtn = document.querySelector(".saveBtn");

//left btn
let filling = false;

function fillPainting() {
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onModeClick() {
  if (!filling) {
    filling = true;
    modeBtn.innerText = "draw";
    canvas.addEventListener("click", fillPainting);
  } else {
    filling = false;
    modeBtn.innerText = "fill";
  }
}

function onEraseClick() {
  ctx.strokeStyle = "white";
}

function onDestroyClick() {
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = "white";
}

modeBtn.addEventListener("click", onModeClick);
eraseBtn.addEventListener("click", onEraseClick);
destroyBtn.addEventListener("click", onDestroyClick);

//canvas&color
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 700;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
//ctx.strokestyle = "black";

let painting = false;

function onMouseMove(event) {
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  } else {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
}

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", onMouseMove);

lineWidth.addEventListener("change", (event) => {
  ctx.lineWidth = event.target.value;
});

//right btns
moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  menuBtns.classList.toggle("hide");
  menuBtns.classList.toggle("showed");
});

btn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  menuBtns.classList.toggle("hide");
  menuBtns.classList.toggle("showed");
});

saveBtn.addEventListener("click", () => {
  alert("Are you sure you want to save this image?");
});
