function convert() {
    var temp = document.getElementById("input");
    var result = document.getElementById("output");
  
    var e = document.getElementById("degree");
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;
  
    if (temp.value !== "") {
      if (optionSelIndex == 0) {
        alert("Please select a unit");
      } else {
        if (optionSelectedText === "Fahrenheit") {
          result.value = ((temp.value - 32) * 5) / 9 + "°C";
        }
        if (optionSelectedText === "Celcius") {
          result.value = (temp.value * 9) / 5 + 32 + "°F";
        }
        if (optionSelectedText === "Kelvin") {
          result.value = temp.value - 273.15 + "°C";
        }
        if (optionSelectedText === "Rankine") {
          result.value = ((temp.value - 273.15) * 9) / 5 + 491.67 + "°R";
        }
      }
    } else {
      alert("Please enter temperature to convert");
    }
  }
  
    