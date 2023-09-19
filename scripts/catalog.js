const btnProductItem = document.querySelectorAll(".catalog-item");

const openPageProduct = function () {
  window.open("product.html");
};
for (let i = 0; i < btnProductItem.length; i++) {
  btnProductItem[i].addEventListener("click", openPageProduct);
}
