const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const active = document.querySelector("#active");
const steps = document.querySelector("#step-container");

let page = 1;
let totalPages = document.querySelectorAll(".steps").length;
let maxWidth = document.querySelector("#step-container").offsetWidth;
let currentWidth = 0;

function nextPageChange(page, width) {
  steps.children[page].style.border = "4px solid blue";
  active.style.width = `${width}px`;
  steps.children[page].style.transition = "border 1s ease 1s";
  active.style.transition = "width 1s ease";
}

function prevPageChange(page, width) {
  steps.children[page].style.border = "4px solid #999";
  active.style.width = `${width}px`;
  steps.children[page].style.transition = "border 1s ease";
  active.style.transition = "width 1s ease";
}

next.addEventListener("click", function (e) {
  console.log("inside next start " + page);
  currentWidth += maxWidth / (totalPages - 1);
  if (page < totalPages - 1) {
    //page in between first and last
    prev.style.cursor = "pointer";
    prev.style.backgroundColor = " blue";
    prev.disabled = false;
    nextPageChange(page, currentWidth);
    page++;
  } else if (page === totalPages - 1) {
    //last page
    next.style.cursor = "not-allowed";
    next.style.backgroundColor = "grey";
    nextPageChange(page, currentWidth);
    next.disabled = true;
    page++;
  }
  console.log("inside next end " + page);
});

prev.addEventListener("click", function (e) {
  console.log("inside prev start " + page);
  if (page === totalPages) {
    //final page
    next.style.cursor = "pointer";
    next.style.backgroundColor = "blue";
    next.disabled = false;
    currentWidth -= maxWidth / (totalPages - 1);
    page--;
    prevPageChange(page, currentWidth);
  } else if (page < totalPages && page > 2) {
    // between pages
    currentWidth -= maxWidth / (totalPages - 1);
    page--;
    prevPageChange(page, currentWidth);
  } else if (page === 2) {
    //going to first page
    currentWidth = 0;
    page--;
    prevPageChange(page, currentWidth);
    prev.style.cursor = "not-allowed";
    prev.style.backgroundColor = "grey";
    prev.disabled = true;
  }
  console.log("inside prev end " + page);
});
