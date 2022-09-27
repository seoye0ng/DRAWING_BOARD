const moreBtn = document.querySelector(".moreBtn");
const menuBtns = document.querySelector(".menuBtns");
const btn = document.querySelector("#menuClosed");

const saveBtn = document.querySelector(".saveBtn");

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
