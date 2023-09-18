//TODO Scroll
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > prevScrollpos) {
    document.querySelector("#header").classList.add("visible");
  } else {
    document.querySelector("#header").classList.remove("visible");
  }
  prevScrollpos = currentScrollPos;
};

//TODO Slider_Catalog
// let position = 0;
// const slidesShow = 3;
// const slidesScroll = 1;
// const container = document.querySelector(".slider-container");
// const track = document.querySelector(".slider-track");
// const items = document.querySelectorAll(".slider-item");
// const btnPrev = document.querySelector(".btn-prev");
// const btnNext = document.querySelector(".btn-next");
// const countItem = items.length;
// const itemWidth = container.clientWidth / slidesShow;
// const movePosition = slidesScroll * itemWidth;

// items.forEach((item) => {
//   item.style.minWidth = `${itemWidth}px`;
// });

// btnNext.addEventListener("click", () => {
//   const itemsLeft =
//     countItem - (Math.abs(position) + slidesShow * itemWidth) / itemWidth;

//   position -= itemsLeft >= slidesScroll ? movePosition : itemsLeft * itemWidth;
//   setPosition();
//   checkBtns();
// });

// btnPrev.addEventListener("click", () => {
//   const itemsLeft = Math.abs(position) / itemWidth;

//   position += itemsLeft >= slidesScroll ? movePosition : itemsLeft * itemWidth;
//   setPosition();
//   checkBtns();
// });

// const setPosition = () => {
//   track.style.transform = `translateX(${position}px)`;
// };

// const checkBtns = () => {
//   btnPrev.disabled = position === 0;
//   btnNext.disabled = position <= -(countItem - slidesShow) * itemWidth;
// };
// checkBtns();

let swiper = new Swiper(".slider-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//TODO Buttons
const btnProduct = document.querySelectorAll(".products-item");
const btnOpenCatalog = document.querySelector(".btn-catalog");
const btnPost = document.querySelectorAll(".news-item");
const btnOpenNews = document.querySelector(".btn-news");

const openPageProduct = function () {
  window.open("product.html");
};

const openCatalog = function () {
  window.open("post.html");
};
for (let i = 0; i < btnPost.length; i++) {
  btnPost[i].addEventListener("click", openCatalog);
}

btnOpenNews.addEventListener("click", function () {
  window.open("news.html");
});
