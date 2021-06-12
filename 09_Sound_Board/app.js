const audio = new Audio();

document.querySelectorAll(".btn").forEach(function (btn, index) {
  btn.onclick = function () {
    let path = `./sounds/${btn.innerHTML.toLowerCase()}.mp3`;
    audio.src = path;
    audio.play();
  };
});
