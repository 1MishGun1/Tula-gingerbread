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
