//left btn
const modeBtn = document.querySelector(".modeBts");
const eraseBtn = document.querySelector(".eraseBts");
const destroyBtn = document.querySelector(".destroyBts");

//canvas&color
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector(".lineWidth");
const colors = document.querySelectorAll(".color");

//right btns
const moreBtn = document.querySelector(".moreBtn");
const menuBtns = document.querySelector(".menuBtns");
const btn = document.querySelector("#menuClosed");
const text = document.querySelector("#text");
const imgFile = document.querySelector("#file");
const saveBtn = document.querySelector(".saveBtn");

//left btn
let filling = false;

function fillPainting() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
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
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

modeBtn.addEventListener("click", onModeClick);
eraseBtn.addEventListener("click", onEraseClick);
destroyBtn.addEventListener("click", onDestroyClick);

//canvas&color
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 700;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
ctx.lineJoin = "round";

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

function onColorClick(event) {
  ctx.fillStyle = event.target.style.backgroundColor;
  ctx.strokeStyle = event.target.style.backgroundColor;
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);

lineWidth.addEventListener("change", (event) => {
  ctx.lineWidth = event.target.value;
});

Array.from(colors).forEach((color) =>
  color.addEventListener("click", onColorClick)
);

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

function onTextClick(event) {
  ctx.save();
  ctx.lineWidth = 1;
  ctx.fillStyle = event.target.style.backgroundColor;
  ctx.font = "50px Souce Sans Pro";
  ctx.fillText(text.value, event.offsetX, event.offsetY);
  ctx.restore();
  //save는 지금까지의 ctx들이 저장되고, restore는 save로 돌아간다.
  //이 함수 호출 후에도 위의 함수에서 바뀐 ctx들로 인해 전에 설정해놨던 ctx들이 영향을 받게 된다.
  //이럴 경우 다시 저장해둔 곳으로 돌아가고 싶을 때 사용한다.
}

function drawImg(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.src = url;
  img.onload = function () {
    ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  };
}

function onSaveClick() {
  if (confirm("Are you sure you want to save this image?")) {
    //save
    const a = document.createElement("a");
    a.href = canvas.toDataURL();
    a.download = "drawing.png";
    a.click();
  }
}

canvas.addEventListener("dblclick", onTextClick);
imgFile.addEventListener("change", drawImg);
saveBtn.addEventListener("click", onSaveClick);
