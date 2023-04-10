// No se javascrip
console.log("Hola mundo");

function bmi() {
  let mass = document.getElementById("mass").value;
  let height = document.getElementById("height").value / 100.0;

  let output = Math.round((mass / Math.pow(height, 2)) * 100) / 100;
  //if the output is NaN it should display an error message
  if (isNaN(output)) {
    return window.alert("Please enter a valid number");
  }
  console.log(output);
  //write the output on the page
  document.getElementById("result").innerHTML = "Your BMI is: " + output;
}
