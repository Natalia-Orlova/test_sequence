/**
 * анимация секвенции
 */

let imgsLen = 8,
  imgsPath = "/img/",
  el = document.querySelector("#scroll-model"),
  content = document.querySelector(".content"),
  scrollIcon = document.querySelector(".scroll-icon"),
  imgs = false,
  imgsCur = 0,
  step = 0.1;

function CreateImages() {
  for (let i = 0; i < imgsLen; i++) {
    el.insertAdjacentHTML("beforeend", `<img src="${imgsPath}${i + 1}.png"/>`);
  }
  imgs = el.querySelectorAll("img");
  imgs.forEach((img) => (img.style.opacity = "0")); // Скрываем все изображения с помощью opacity
  setTimeout(RotateScroll, 100);
}

CreateImages();

function RotateScroll() {
  imgs[imgsCur].style.opacity = "1";

  let ticking = false;

  function update() {
    let a = Math.floor((window.scrollY / imgsLen) * step),
      i = a >= imgsLen ? a - imgsLen * Math.floor(a / imgsLen) : a;

    if (imgsCur !== i) {
      imgs[imgsCur].style.opacity = "0";
      imgs[i].style.opacity = "1";
      imgsCur = i;
    }

    // Проверяем, достиг ли пользователь блока с классом content
    if (window.scrollY + window.innerHeight >= content.offsetTop) {
      el.style.position = "absolute";
      el.style.top = "32%";
    } else {
      el.style.position = "fixed";
      el.style.top = "0";
    }

    // Уменьшаем opacity для scroll-icon
    // let scrollPercentage = window.scrollY / window.innerHeight;
    // let opacity = 1 - scrollPercentage;
    // scrollIcon.style.opacity = Math.max(0, opacity); // Ограничиваем opacity от 0 до 1
    ticking = false;
  }

  window.addEventListener("scroll", function (e) {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  });

  // клик на scroll-icon - пролистать на 1 экран вниз
//   scrollIcon.addEventListener("click", function () {
//     window.scrollBy({
//       top: window.innerHeight,
//       behavior: "smooth",
//     });
//   });
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 500); // Задержка в 500 миллисекунд
  });
});