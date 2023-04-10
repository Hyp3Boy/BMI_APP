// No se javascrip
console.log("Hola mundo");

function bmi() {
  let mass = document.getElementById("mass").value;
  let height = document.getElementById("height").value / 100.0;

  let output = Math.round((mass / Math.pow(height, 2)) * 100) / 100;
  console.log(output);
  //write the output on the page
  document.getElementById("result").innerHTML = "Your BMI is: " + output;
}
