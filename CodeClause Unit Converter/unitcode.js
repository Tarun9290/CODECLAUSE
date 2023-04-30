function convert() {
    var inputValue = document.getElementById("inputValue").value;
    var selectFrom = document.getElementById("selectFrom").value;
    var selectTo = document.getElementById("selectTo").value;
    var result;
  
    if (selectFrom == "meters" && selectTo == "feet") {
      result = inputValue * 3.28084;
    } else if (selectFrom == "feet" && selectTo == "meters") {
      result = inputValue / 3.28084;
    } else if (selectFrom == "meters" && selectTo == "inches") {
      result = inputValue * 39.3701;
    } else if (selectFrom == "inches" && selectTo == "meters") {
      result = inputValue / 39.3701;
    } else if (selectFrom == "meters" && selectTo == "centimeters") {
      result = inputValue * 100;
    } else if (selectFrom == "centimeters" && selectTo == "meters") {
      result = inputValue / 100;
    } else if (selectFrom == "kilometers" && selectTo == "miles") {
      result = inputValue * 0.621371;
    } else if (selectFrom == "miles" && selectTo == "kilometers") {
      result = inputValue / 0.621371;
    } else if (selectFrom == "kilograms" && selectTo == "pounds") {
      result = inputValue * 2.20462;
    } else if (selectFrom == "pounds" && selectTo == "kilograms") {
      result = inputValue / 2.20462;
    } else if (selectFrom == "liters" && selectTo == "gallons") {
      result = inputValue * 0.264172;
    } else if (selectFrom == "gallons" && selectTo == "liters") {
      result = inputValue / 0.264172;
    } else if (selectFrom == selectTo) {
      result = inputValue;
    } else {
      alert("Conversion not possible");
    }
  
    document.getElementById("result").value = result;
  }
  