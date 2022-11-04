const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

let gameSpeed = 15;

const backgoundLayer1 = new Image();
backgoundLayer1.src = "./backgroundLayers/layer-1.png";
const backgoundLayer2 = new Image();
backgoundLayer2.src = "./backgroundLayers/layer-2.png";
const backgoundLayer3 = new Image();
backgoundLayer3.src = "./backgroundLayers/layer-3.png";
const backgoundLayer4 = new Image();
backgoundLayer4.src = "./backgroundLayers/layer-4.png";
const backgoundLayer5 = new Image();
backgoundLayer5.src = "./backgroundLayers/layer-5.png";

const IMG_WIDTH = 2400;
let x = 0;
let x2 = IMG_WIDTH;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backgoundLayer2, x, 0);
  ctx.drawImage(backgoundLayer2, x2, 0);
  if (x < -IMG_WIDTH) x = IMG_WIDTH + x2 - gameSpeed;
  else x -= gameSpeed;
  if (x2 < -IMG_WIDTH) x2 = IMG_WIDTH + x - gameSpeed;
  else x2 -= gameSpeed;
  requestAnimationFrame(animate);
}
animate();
