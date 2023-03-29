let colors = [0, 0, 0];

function changeColor() {
  for (let i = 0; i <= 2; i++) {
    colors[i] = Math.floor(Math.random() * 250);
    console.log(i);
    if (i == 2) {
      i = 0;
      break;
    }
  }
  colorB = "rgb" + "(" + colors + ")";
  document.body.style.background = colorB;
  console.log(colorB);
  affichage.textContent = colorB;
}
setInterval(changeColor, 4000);
