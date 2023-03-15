function convertTemp() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 1.8) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }
  