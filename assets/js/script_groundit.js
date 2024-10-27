const images = ["teaser.jpg"]; // Array of image paths
let currentIndex = 0;

function showImage(index) {
  const slider = document.getElementById("slider");
  slider.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Loops back to the start
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loops to the end
  showImage(currentIndex);
}
