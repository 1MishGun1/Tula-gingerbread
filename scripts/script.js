//TODO Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    document.querySelectorAll("a").forEach((el) => {
      el.classList.remove("scroll-active");
    });
    this.classList.add("scroll-active");
  });
});

//TODO Slider_Catalog
// let swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

//TODO Buttons
const btnProduct = document.querySelectorAll(".products-item");
// const btnOpenCatalog = document.querySelector(".btn-catalog");
const btnPost = document.querySelectorAll(".news-item");
const btnOpenNews = document.querySelector(".btn-news");
const btnOpenShop = document.querySelector(".btn-shop");

btnOpenShop.addEventListener("click", function () {
  window.open("basket.html");
});

const openPageProduct = function () {
  window.open("product.html");
};
for (let i = 0; i < btnProduct.length; i++) {
  btnProduct[i].addEventListener("click", openPageProduct);
}

// btnOpenCatalog.addEventListener("click", function () {
//   window.open("shop.html");
// });

const openCatalog = function () {
  window.open("post.html");
};
for (let i = 0; i < btnPost.length; i++) {
  btnPost[i].addEventListener("click", openCatalog);
}

btnOpenNews.addEventListener("click", function () {
  window.open("news.html");
});
