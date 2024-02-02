const $btn = document.querySelector("button");
const $containerText = document.querySelector(".container-text");
const $allP = document.querySelectorAll("p");

$btn.addEventListener("click", () => {
  $btn.classList.toggle("move-button");
  $containerText.classList.toggle("show-container-text");
  $allP.forEach((p) => {
    p.classList.toggle("show-text");
  });
});
