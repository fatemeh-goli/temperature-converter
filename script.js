let conversionDirection = document.getElementById("conversion-direction");
let temperatureInput = document.getElementById("temperature-input");
let resultTemperature = document.getElementById("result-temperature");
let convertBtn = document.getElementById("convert-btn");
let resetBtn = document.getElementById("reset-btn");
let changeBtn = document.getElementById("change-btn");

conversionDirection.innerText = "Celsius To Fahrenheit";
temperatureInput.setAttribute("placeholder", "Enter temperature in °C");

convertBtn.addEventListener("click", function () {
 if(temperatureInput.value === ""){
    resultTemperature.innerText = "Please enter a temperature"
 }else{
  let temperatureInputValue = Number(temperatureInput.value);
  if (flagChange) {
    let fahrenheitToCelsius = ((temperatureInputValue - 32) * 5) / 9;
    resultTemperature.innerText =
      temperatureInputValue + " °F" + " = " + fahrenheitToCelsius + " °C";
    document.title = "Fahrenheit To Celsius";
  } else {
    let celsiusToFahrenheit = (temperatureInputValue * 9) / 5 + 32;
    resultTemperature.innerText =
      temperatureInputValue + " °C" + "  =  " + celsiusToFahrenheit + " °F";
    document.title = "Celsius To Fahrenheit";
  }
 }

});

resetBtn.addEventListener("click", function () {
  temperatureInput.value = "";
  resultTemperature.innerText = "";
});

let flagChange = false;
changeBtn.addEventListener("click", function () {
  if (flagChange) {
    conversionDirection.innerText = "Celsius To Fahrenheit";
    temperatureInput.setAttribute("placeholder", "Enter temperature in °C");
    document.title = " Celsius To Fahrenheit ";
    flagChange = false;
  } else {
    conversionDirection.innerText = "Fahrenheit To Celsius";
    temperatureInput.setAttribute("placeholder", "Enter temperature in °F");
    document.title = "Fahrenheit To Celsius";
    flagChange = true;
  }
});
