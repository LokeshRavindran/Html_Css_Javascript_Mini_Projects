//select text area
let textArea = document.querySelector("#values");
//output
let out = document.querySelector("#output");

let s;
let val;
textArea.addEventListener("keyup", function (e) {
  out.innerHTML = "";
  val = e.target.value.split(",").filter((v) => v.trim() !== "");
  val.forEach(function (v) {
    out.innerHTML += `<p class="val">${v}</p>`;
  });
  if (e.keyCode == "13") {
    e.target.value = "";
    let times = 30;

    //random highligh
    const interval = setInterval(() => {
      let random = Math.floor(Math.random() * val.length);
      console.log(random);
      out.children[random].classList.add("active");
      setTimeout(() => {
        out.children[random].classList.remove("active");
      }, 100);
    }, 100);
    times++;

    //clear interval of random highlight after certain time and
    //highlight the random value
    setTimeout(() => {
      clearInterval(interval);
      let random = Math.floor(Math.random() * val.length);
      out.children[random].classList.add("active");
    }, times * 100);
  }
});
