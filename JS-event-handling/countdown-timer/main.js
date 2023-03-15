let timeLeft = 10;
const elem = document.getElementById("countdown");
const rocketElement = document.getElementById("rocket");
rocketElement.classList.add("hidden");
let timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    rocketElement.classList.remove("hidden");
  } else {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerHTML = timeLeft;
    div.appendChild(h2);
    elem.appendChild(div);
    timeLeft--;
    window.scrollBy(0, 500);
  }
}
