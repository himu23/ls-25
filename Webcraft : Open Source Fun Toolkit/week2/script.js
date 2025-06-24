document.getElementById("convertBtn").addEventListener("click", convert);

function convert() {
  const type = document.getElementById("conversionType").value;
  const input = parseFloat(document.getElementById("inputValue").value);
  const resultElement = document.getElementById("result");

  if (isNaN(input)) {
    resultElement.textContent = "Please enter a valid number.";
    return;
  }

  let result;

  switch (type) {
    case "cmToIn":
      result = (input / 2.54).toFixed(2) + " inches";
      break;
    case "inToCm":
      result = (input * 2.54).toFixed(2) + " cm";
      break;
    case "kgToLb":
      result = (input * 2.20462).toFixed(2) + " lbs";
      break;
    case "lbToKg":
      result = (input / 2.20462).toFixed(2) + " kg";
      break;
    default:
      result = "Invalid conversion type.";
  }

  resultElement.textContent = `Result: ${result}`;
}
