const email = document.querySelector("#email");
let emailLabel = document.querySelector("#email-label");
const password = document.querySelector("#password");
const passwordLabel = document.querySelector("#password-label");

email.addEventListener("focus", function () {
  console.log("email");
  emailLabel.style.top = "0px";
  emailLabel.style.color = "lightblue";
});
email.addEventListener("blur", function () {
  console.log("email-blur");
  emailLabel.style.top = "32px";
  emailLabel.style.color = "white";
});

password.addEventListener("focus", function () {
  console.log("password");
  passwordLabel.style.top = "0px";
  passwordLabel.style.color = "lightblue";
});

password.addEventListener("blur", function () {
  console.log("password");
  passwordLabel.style.top = "32px";
  passwordLabel.style.color = "white";
});

function addSpan() {}
