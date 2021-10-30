var i = 0;
var txt = 'e-Kommp, aqui os preços são sem kommparação';
var speed = 45;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".slogan h3").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()