const box = document.querySelector("#box");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const closeBtn = document.querySelector("#close-button");
const closeBtn2 = document.querySelector("#close-button2");
const closeBtn3 = document.querySelector("#close-button3");
const aboutBtn = document.querySelector("#about-button");
const loadBtn = document.querySelector("#load-button");
const linkBtn = document.querySelector("#link-button");

document.addEventListener("DOMContentLoaded", function() {
  aboutBtn.addEventListener("click", function() {
    box.classList.add("open");
  });
});

closeBtn.addEventListener("click", function() {
  box.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", function() {
  loadBtn.addEventListener("click", function() {
    box2.classList.add("open");
  });
});

closeBtn2.addEventListener("click", function() {
  box2.classList.remove("open");
});

loadBtn.addEventListener("click", function() {
  console.log("Load game button clicked");
  // Replace this with your actual function for loading the game
});

document.addEventListener("DOMContentLoaded", function() {
    linkBtn.addEventListener("click", function() {
    box3.classList.add("open");
    });
});

closeBtn3.addEventListener("click", function() {
    box3.classList.remove("open");
});