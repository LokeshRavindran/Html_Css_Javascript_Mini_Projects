const ps = document.querySelector("#ps-container");
const xbox = document.querySelector("#xbox-container");

ps.addEventListener("mouseenter", function () {
  ps.style.width = "75%";
  xbox.style.width = "25%";
});
ps.addEventListener("mouseleave", function () {
  ps.style.width = "50%";
  xbox.style.width = "50%";
});

xbox.addEventListener("mouseenter", function () {
  xbox.style.width = "75%";
  ps.style.width = "25%";
});
xbox.addEventListener("mouseleave", function () {
  xbox.style.width = "50%";
  ps.style.width = "50%";
});
