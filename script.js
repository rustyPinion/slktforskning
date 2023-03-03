const images = document.querySelectorAll(".notis img");

for (const image of images) {
image.insertAdjacentHTML("afterend", image.alt);
}