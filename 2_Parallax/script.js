const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

let gameSpeed = 5;

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

const slider = document.getElementById("slider");
slider.value = gameSpeed;
const showGameSpeed = document.getElementById("showGameSpeed");
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener("change", function (e) {
  gameSpeed = e.target.value;
  showGameSpeed.innerHTML = gameSpeed;
});

class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    // this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }
  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x < -this.width) this.x = 0;
    this.x = this.x - this.speed;
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

const gameObjects = [
  new Layer(backgoundLayer1, 0.2),
  new Layer(backgoundLayer2, 0.4),
  new Layer(backgoundLayer3, 0.6),
  new Layer(backgoundLayer4, 0.8),
  new Layer(backgoundLayer5, 1),
];
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObjects.forEach((element) => {
    element.update();
    element.draw();
  });

  requestAnimationFrame(animate);
}
animate();
