const btnPostItem = document.querySelectorAll(".post-item");

const openPagePost = function () {
  window.open("post.html");
};
for (let i = 0; i < btnPostItem.length; i++) {
  btnPostItem[i].addEventListener("click", openPagePost);
}
