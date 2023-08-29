const btnlogo = document.querySelector(".logo");
const btnPostItem = document.querySelectorAll(".post-item");

btnlogo.addEventListener("click", function () {
  window.open("index.html");
});

const openPagePost = function () {
  window.open("post.html");
};
for (let i = 0; i < btnPostItem.length; i++) {
  btnPostItem[i].addEventListener("click", openPagePost);
}
