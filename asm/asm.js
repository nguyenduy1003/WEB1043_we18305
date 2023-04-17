const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const comment = document.querySelector("#list-comment");
const commentItem = document.querySelectorAll("#list-comment .item");
var translateY = 0;
var count = commentItem.length;

next.addEventListener("click", function (event) {
  event.preventDefault();
  if (count == 1) {
    // Xem hết bình luận
    return false;
  }
  translateY += -400;
  comment.style.transform = `translateY(${translateY}px)`;
  count--;
});

prev.addEventListener("click", function (event) {
  event.preventDefault();
  if (count == 3) {
    // Xem hết bình luận
    return false;
  }
  translateY += 400;
  comment.style.transform = `translateY(${translateY}px)`;
  count++;
});

const btnBuy = document.querySelector(".btnbuy");

btnBuy.addEventListener("mouseover", () => {
  btnBuy.style.background = "orange";
});

btnBuy.addEventListener("mouseout", () => {
  btnBuy.style.background = "black";
});

const imgs = document.querySelectorAll(".imglist");

imgs.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.3)";
    img.style.transformOrigin = "center";
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});
