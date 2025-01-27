function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

function moveElement(e) {
  moveRandomEl(e.target);
}

// Используем событие 'mouseenter' для десктопов и 'click' для мобильных устройств
moveRandom.addEventListener("mouseenter", moveElement);
moveRandom.addEventListener("click", moveElement);
