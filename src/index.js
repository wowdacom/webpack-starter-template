import "./style.scss";

document.addEventListener("DOMContentLoaded", function () {
  let p = document.createElement("p");
  p.textContent = "Hello Wepack!";

  let sectionCotent = document.querySelector("#color");
  console.log(sectionCotent);
  sectionCotent.value = "Hello My Webpack Template!";
});
