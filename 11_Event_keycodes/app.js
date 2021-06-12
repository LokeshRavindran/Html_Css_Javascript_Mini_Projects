document.addEventListener("keypress", function (e) {
  document.querySelector("#keys").innerHTML = ` <div class="box">
  <p class="title">event.key</p>
  <div class="in-box">${e.key === " " ? "Space" : e.key}</div>
</div>
<div class="box">
  <p class="title">event.keycode</p>
  <div class="in-box">${e.keyCode}</div>
</div>
<div class="box">
  <p class="title">event.code</p>
  <div class="in-box">${e.code}</div>
</div>`;
});
