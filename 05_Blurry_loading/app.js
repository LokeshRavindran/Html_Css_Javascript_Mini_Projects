let i = 1;

const blurValue = setInterval(function () {
  console.log(i);
  document.querySelector("#blur").textContent = i + "%";
  let opacityValue = (100 - i) / 100;
  document.querySelector("#blur").style.opacity = opacityValue;
  document.querySelector("#image").style.filter = `blur(${100 - i}px)`;
  i++;
  if (i == 101) {
    clearInterval(blurValue);
  }
}, 20);

// }
