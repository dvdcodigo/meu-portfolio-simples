const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");

let likes = Number(localStorage.getItem("portfolioLikes")) || 0;

likeCount.textContent = likes;

likeButton.addEventListener("click", () => {

    likes++;

    likeCount.textContent = likes;

    localStorage.setItem("portfolioLikes", likes);

});