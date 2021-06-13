document.querySelectorAll(".btn").forEach(function (mark, index) {
  mark.onclick = function () {
    //to remove downward arrow
    mark.children[0].classList.toggle("hide");
    //to show x mark
    mark.children[1].classList.toggle("hide");
    //to change background
    mark.classList.toggle("btn-back");
    //show the answer
    document
      .querySelectorAll(".faq-items")
      [index].children[1].classList.toggle("hide");
    document
      .querySelectorAll(".faq-items")
      [index].classList.toggle("faq-item-back");
  };
});
