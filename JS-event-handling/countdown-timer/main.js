let time = 10;

let countdownElement = document.getElementById("countdown");

let rocketElement = document.getElementById("rocket");

function updateCountdown() {
  time--;

  countdownElement.innerHTML = time;

  if (time === 0) {
    countdownElement.classList.add("hidden");
    rocketElement.classList.remove("hidden");
  }
}
setInterval(updateCountdown, 1000);
