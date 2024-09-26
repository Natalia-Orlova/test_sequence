/**
 * анимация секвенции
 */

// let imgsLen = 8,
//   imgsPath = "img/",
//   el = document.querySelector("#scroll-model"),
//   content = document.querySelector(".content"),
//   scrollIcon = document.querySelector(".scroll-icon"),
//   imgs = false,
//   imgsCur = 0,
//   step = 0.1;

// function CreateImages() {
//   for (let i = 0; i < imgsLen; i++) {
//     el.insertAdjacentHTML("beforeend", `<img src="${imgsPath}${i + 1}.png"/>`);
//   }
//   imgs = el.querySelectorAll("img");
//   imgs.forEach((img) => (img.style.opacity = "0")); // Скрываем все изображения с помощью opacity
//   setTimeout(RotateScroll, 100);
// }

// CreateImages();

// function RotateScroll() {
//   imgs[imgsCur].style.opacity = "1";

//   let ticking = false;

//   function update() {
//     let a = Math.floor((window.scrollY / imgsLen) * step),
//       i = a >= imgsLen ? a - imgsLen * Math.floor(a / imgsLen) : a;

//     if (imgsCur !== i) {
//       imgs[imgsCur].style.opacity = "0";
//       imgs[i].style.opacity = "1";
//       imgsCur = i;
//     }

//     // Проверяем, достиг ли пользователь блока с классом content
//     if (window.scrollY + window.innerHeight >= content.offsetTop) {
//       el.style.position = "absolute";
//       el.style.top = "32%";
//     } else {
//       el.style.position = "fixed";
//       el.style.top = "0";
//     }

//     // Уменьшаем opacity для scroll-icon
//     // let scrollPercentage = window.scrollY / window.innerHeight;
//     // let opacity = 1 - scrollPercentage;
//     // scrollIcon.style.opacity = Math.max(0, opacity); // Ограничиваем opacity от 0 до 1
//     ticking = false;
//   }

//   window.addEventListener("scroll", function (e) {
//     if (!ticking) {
//       window.requestAnimationFrame(update);
//       ticking = true;
//     }
//   });

//   // клик на scroll-icon - пролистать на 1 экран вниз
// //   scrollIcon.addEventListener("click", function () {
// //     window.scrollBy({
// //       top: window.innerHeight,
// //       behavior: "smooth",
// //     });
// //   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("load", function () {
//     setTimeout(function () {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });
//     }, 500); // Задержка в 500 миллисекунд
//   });
// });






let imgsLen = 8,
  imgsPath = "img/",
  el = document.querySelector("#scroll-model"),
  content = document.querySelector(".content"),
  scrollIcon = document.querySelector(".scroll-icon"),
  imgs = false,
  imgsCur = 0,
  step = 1;

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
  let isAbsolute = false; // Флаг для отслеживания позиции элемента

  function update() {
    // Проверяем, стала ли позиция элемента absolute
    if (el.style.position === "absolute") {
      isAbsolute = true;
    } else {
      isAbsolute = false;
    }

    // Если позиция absolute, останавливаем обновление изображений
    if (!isAbsolute) {
      let a = Math.floor((window.scrollY / imgsLen) * step),
        i = a >= imgsLen ? a - imgsLen * Math.floor(a / imgsLen) : a;

      if (imgsCur !== i) {
        imgs[imgsCur].style.opacity = "0";
        imgs[i].style.opacity = "1";
        imgsCur = i;
        console.log(imgsCur);
      }
    }

    // Проверяем, достиг ли пользователь блока с классом content
    if (window.scrollY + window.innerHeight >= content.offsetTop) {
      el.style.position = "absolute";
      el.style.top = "25%";
      el.style.left = "55%";
      el.style.transform = "translateX(-55%)";
    } else {
      el.style.position = "fixed";
      el.style.top = "0";
      el.style.left = "0";
      el.style.transform = "none";
    }

    ticking = false;
  }

  window.addEventListener("scroll", function (e) {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  });
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













// let imgsLen = 8,
//   imgsPath = "img/",
//   el = document.querySelector("#scroll-model"),
//   content = document.querySelector(".content"),
//   scrollIcon = document.querySelector(".scroll-icon"),
//   imgs = false,
//   imgsCur = 0,
//   step = 1; // Шаг остается равным 1

// function CreateImages() {
//   for (let i = 0; i < imgsLen; i++) {
//     el.insertAdjacentHTML("beforeend", `<img src="${imgsPath}${i + 1}.png"/>`);
//   }
//   imgs = el.querySelectorAll("img");
//   imgs.forEach((img) => (img.style.opacity = "0")); // Скрываем все изображения с помощью opacity
//   setTimeout(RotateScroll, 100);
// }

// CreateImages();

// function RotateScroll() {
//   imgs[imgsCur].style.opacity = "1";

//   let ticking = false;
//   let isAbsolute = false; // Флаг для отслеживания позиции элемента
//   let lastKnownInnerHeight = window.innerHeight; // Отслеживаем последнюю известную высоту окна

//   function update() {
//     // Проверяем, стала ли позиция элемента absolute
//     if (el.style.position === "absolute") {
//       isAbsolute = true;
//     } else {
//       isAbsolute = false;
//     }

//     // Если позиция absolute, останавливаем обновление изображений
//     if (!isAbsolute) {
//       // Ускоряем смену изображений, используя формулу
//       let scrollPercentage = window.scrollY / window.innerHeight;
//       let i = Math.floor(scrollPercentage * imgsLen);

//       // Убеждаемся, что i находится в пределах допустимых индексов
//       i = Math.max(0, Math.min(i, imgsLen - 1));

//       if (imgsCur !== i) {
//         imgs[imgsCur].style.opacity = "0";
//         imgs[i].style.opacity = "1";
//         imgsCur = i;
//         console.log(imgsCur);
//       }
//     }

//     // Проверяем, достиг ли пользователь блока с классом content
//     if (window.scrollY + window.innerHeight >= content.offsetTop) {
//       el.style.position = "absolute";
//       el.style.top = "25%";
//     } else {
//       el.style.position = "fixed";
//       el.style.top = "0";
//     }

//     ticking = false;
//   }

//   window.addEventListener("scroll", function (e) {
//     if (!ticking) {
//       window.requestAnimationFrame(update);
//       ticking = true;
//     }
//   });

//   // Отслеживаем изменения высоты окна
//   window.addEventListener("resize", function (e) {
//     if (lastKnownInnerHeight !== window.innerHeight) {
//       lastKnownInnerHeight = window.innerHeight;
//       update();
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("load", function () {
//     setTimeout(function () {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });
//     }, 0); 
//   });
// });