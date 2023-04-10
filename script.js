// No se javascrip
console.log('Hola mundo');

function bmi() {
  var mass = document.getElementById("mass").value;
  var height = document.getElementById("height").value;
  
  var output = mass / Math.pow(height, 2);
  console.log(output);
  return output;
}
