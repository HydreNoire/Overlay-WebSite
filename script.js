// function toggleOverlay() {
//     let overlayDiv = document.querySelector(".overlay");
//     console.log(overlayDiv.style.opacity);
//     if (overlayDiv.style.opacity === '0')
//       overlayDiv.style.opacity = 1;
//     else
//       overlayDiv.style.opacity = 0;
//   }

let blur = document.getElementById("blur");
let btnIntro = document.getElementById("intro-btn");
let introArticle = document.getElementById("intro-article");
let close = document.getElementById("close");
let header = document.getElementById("header");

btnIntro.addEventListener("click", showArticle);

function showArticle() {
  if (introArticle.style.display === "none") {
    introArticle.style.display = "block";
    header.style.display = "none";
    blur.style.display = "block";
  } else {
    introArticle.style.display = "none";
    blur.style.display = "none";
  }
}

close.addEventListener("click", function() {
  introArticle.style.display = "none";
  blur.style.display = "none";
  header.style.display = "flex";
})