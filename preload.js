console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "images/zero.webp",
  "images/one.png",
  "images/two.png",
  "images/four.png",
  "images/five.png",
  "images/six.png",
  "images/seven.png",
  "images/eight.png",
  "images/nine.png",
  "images/old-prison-cell_406939-12783.avif",
  "images/Screenshot 2024-11-04 134605.png",
  "sounds/clicks.mp3"
);
