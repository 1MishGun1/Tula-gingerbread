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

const btnPost = document.querySelectorAll(".news-item");
const btnPayIndex = document.querySelectorAll(".button");

btnPayIndex.addEventListener("click", function () {
  window.open("product.html");
});
