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

const btnPayProduct = document.querySelectorAll(".product-button");
const btnOpenCatalog = document.querySelector(".btn-catalog");
const btnPost = document.querySelectorAll(".news-item");
const btnOpenNews = document.querySelector(".btn-news");

const openPageProduct = function () {
  window.open("product.html");
};
for (let i = 0; i < btnPayProduct.length; i++) {
  btnPayProduct[i].addEventListener("click", openPageProduct);
}

btnOpenCatalog.addEventListener("click", function () {
  window.open("shop.html");
});

const openCatalog = function () {
  window.open("post.html");
};
for (let i = 0; i < btnPost.length; i++) {
  btnPost[i].addEventListener("click", openCatalog);
}

btnOpenNews.addEventListener("click", function () {
  window.open("shop.html");
});
