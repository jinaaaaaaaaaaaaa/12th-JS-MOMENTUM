const BG = "background";
const images = ["img01.jpg", "img02.jpg", "img03.jpg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = BG;
bgImage.src = `img/${chosenImg}`;
document.body.appendChild(bgImage);
