const today = new Date();
const christmasDate = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() === 11 && today.getDate() > 25) {
  christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}

const remainingDays = Math.ceil((christmasDate - today) / (1000 * 60 * 60 * 24));

document.getElementById("days").textContent = remainingDays;
