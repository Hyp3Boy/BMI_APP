// No se javascrip
console.log("Hola mundo");

function bmi() {
  let mass = document.getElementById("mass").value;
  let height = document.getElementById("height").value / 100.0;

  let output = Math.round((mass / Math.pow(height, 2)) * 100) / 100;
  //if the output is NaN it should display an error message
  if (isNaN(output) || output == Infinity || output == -Infinity) {
    return window.alert("Please enter a valid number");
  }
  //write the output on the page
  if (output < 18.5) {
    document.getElementById("result").innerHTML =
      "Your BMI is: " + output + " - Underweight: Slight risk";
  }
  if (output >= 18.5 && output < 25) {
    document.getElementById("result").innerHTML =
      "Your BMI is: " + output + " - Normal weight: No risk";
  }
  if (output >= 25 && output < 30) {
    document.getElementById("result").innerHTML =
      "Your BMI is: " + output + " - Overweight: Slight risk";
  }
  if (output >= 30 && output < 35) {
    document.getElementById("result").innerHTML =
      "Your BMI is: " + output + " - Obese I: Moderate risk";
  }
  if (output >= 35 && output < 40) {
    document.getElementById("result").innerHTML = 
      "Your BMI is: " + output + " - Obese II: High risk";
  }
  if (output >= 40) {
    document.getElementById("result").innerHTML = 
      "Your BMI is: " + output + " - Obese III: Very high risk";
  }
}

function go_to_calculator() {
  window.location.href = "calculator.html";
}
