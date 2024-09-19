const numberDraw = document.getElementById("number-draw");
const numberDrawResults = document.getElementById("number-draw-results");

const numberDrawButton = numberDraw.querySelector("button");

// numberDraw.style.display = "none";
// numberDrawResults.style.display = "flex";

numberDrawButton.onclick = (event) => {
  event.preventDefault();

  numberDraw.style.display = "none";
  numberDrawResults.style.display = "flex";
};
