const search = document.querySelector(".fa-search");
const input = document.querySelector("#search").children[0];
let flag = true;

search.onclick = function () {
  if (flag) {
    input.style.width = "200px";
    flag = false;
  } else {
    input.style.width = "0px";
    flag = true;
  }
};
