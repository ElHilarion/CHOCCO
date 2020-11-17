const left = document.querySelector("#left");
const right = document.querySelector("#right");
const sliderList = document.querySelector("#slider__list");

const loop = (direction, e) => {
  e.preventDefault();

  if (direction === "right") {
    sliderList.appendChild(sliderList.firstElementChild);
  } else {
    sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
  }
};

right.addEventListener("click", (e) => {
  loop("right", e);
});

left.addEventListener("click", (e) => {
  loop("left", e);
});
  