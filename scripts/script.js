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

const btnPost = document.querySelector(".news-item-title");
const btnPayIndex = document.querySelector(".product-button");

// Edit
btnPayIndex.addEventListener("click", function () {
  window.open("product.html");
});

const btnCatalog = document.querySelector(".btn-catalog");
btnCatalog.addEventListener("click", function () {
  window.open("shop.html");
});

const openLinksNews = function () {
  window.open("news.html");
};

// Edit
for (let i = 0; i < btnPost.length; i++) {
  btnPost[i].addEventListener("click", openLinksNews);
}

for (let i = 0; i < btnPost.length; i++) {
  btnPost.addEventListener("click", function () {
    window.open("post.html");
  });
}

const btnNews = document.querySelector(".btn-news");
btnNews.addEventListener("click", function () {
  window.open("news.html");
});
