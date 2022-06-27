// function toggleOverlay() {
//     let overlayDiv = document.querySelector(".overlay");
//     console.log(overlayDiv.style.opacity);
//     if (overlayDiv.style.opacity === '0')
//       overlayDiv.style.opacity = 1;
//     else
//       overlayDiv.style.opacity = 0;
//   }

// function showArticle(article) {
//   if (article.style.display === "none") {
//     article.style.display = "block";
//     header.style.display = "none";
//     blur.style.display = "block";
//   } else {
//     article.style.display = "none";
//     blur.style.display = "none";
//   }
// }

let blur = document.getElementById("blur");
let header = document.getElementById("header");
// Boutons d'action
let btnIntro = document.getElementById("intro-btn");
let btnAbout = document.getElementById("about-btn");
let btnWork = document.getElementById("work-btn");
let btnContact = document.getElementById("contact-btn");
// Articles
let introArticle = document.getElementById("intro-article");
let aboutArticle = document.getElementById("about-article");
let workArticle = document.getElementById("work-article");
let contactArticle = document.getElementById("contact-article");

btnIntro.addEventListener("click", () => {
  introArticle.style.display = "flex";
  header.style.display = "none";
  blur.style.display = "flex";
});
btnAbout.addEventListener("click", () => {
  aboutArticle.style.display = "flex";
  header.style.display = "none";
  blur.style.display = "flex";
});
btnWork.addEventListener("click", () => {
  workArticle.style.display = "flex";
  header.style.display = "none";
  blur.style.display = "flex";
});
btnContact.addEventListener("click", () => {
  contactArticle.style.display = "flex";
  header.style.display = "none";
  blur.style.display = "flex";
});

let close = document.querySelectorAll(".quit");

close.forEach(item => {
  item.addEventListener('click', (event) => {
    introArticle.style.display = "none";
    aboutArticle.style.display = "none";
    workArticle.style.display = "none";
    contactArticle.style.display = "none";
    blur.style.display = "none";
    header.style.display = "flex";
  })
})