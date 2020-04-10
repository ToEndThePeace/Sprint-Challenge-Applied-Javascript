/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// Names of images stored in "./assets/carousel"
const dataCarousel = [
  "mountains.jpeg",
  "computer.jpeg",
  "trees.jpeg",
  "turntable.jpeg",
];

// Index of current carousel image
let curImg = 0;

// Time (ms) it takes for carousel to switch pictures
const carouselTime = 5000;

// Declaring for scope, to grab carousel buttons later
let leftButton, rightButton

// The interval set on window load and carousel change
let auto;

function makeCarousel(imgNames) {
  const carousel = make("div", ["carousel"]);
  const left = make("div", ["left-button"], "<");
  const right = make("div", ["right-button"], ">");
  let images = imgNames.map((x) => {
    let temp = make("img", []);
    temp.setAttribute("src", `assets/carousel/${x}`);
    return temp;
  });

  carousel.appendChild(left);
  images.forEach((x) => {
    carousel.appendChild(x);
  });
  carousel.appendChild(right);

  get(".carousel-container").appendChild(carousel);
}

function carouselRight() {
  getAll(".carousel > img")[curImg].classList.remove("show");
  if (curImg === dataCarousel.length - 1) curImg = 0;
  else curImg++;
  getAll(".carousel > img")[curImg].classList.add("show");
}
function carouselLeft() {
  getAll(".carousel > img")[curImg].classList.remove("show");
  if (curImg === 0) curImg = dataCarousel.length - 1;
  else curImg--;
  getAll(".carousel > img")[curImg].classList.add("show");
}

window.addEventListener("load", () => {
  makeCarousel(dataCarousel);
  leftButton = get(".left-button");
  rightButton = get(".right-button");
  getAll(".carousel > img")[curImg].classList.add("show");
  auto = setInterval(carouselRight, carouselTime)
  leftButton.addEventListener("click", () => {
    carouselLeft();
    clearInterval(auto);
    auto = setInterval(carouselLeft, carouselTime);
  });
  rightButton.addEventListener("click", () => {
    carouselRight();
    clearInterval(auto);
    auto = setInterval(carouselRight, carouselTime);
  });
});
