function convert() {
    let number = document.getElementById("number").value;
    const outputDiv = document.getElementById("output");
    let result = "";
    console.log("dziala");
    if (number) {
      if (number <= -1) {
        outputDiv.innerText = "Please enter a number greater than or equal to 1";
      } else if (number >= 4000) {
        outputDiv.innerText = "Please enter a number less than or equal to 3999";
      } else {
        while (number >= 1000) {
          number -= 1000;
          result += "M";
        }
        if (number >= 900) {
          number -= 900;
          result += "CM";
        } else if (number >= 500) {
          number -= 500;
          result += "D";
        } else if (number >= 400) {
          number -= 400;
          result += "CD";
        }
        while (number >= 100) {
          number -= 100;
          result += "C";
        }
        if (number >= 90) {
          number -= 90;
          result += "XC";
        } else if (number >= 50) {
          number -= 50;
          result += "L";
        } else if (number >= 40) {
          number -= 40;
          result += "XL";
        }
        while (number >= 10) {
          number -= 10;
          result += "X";
        }
        if (number == 9) {
          number -= 9;
          result += "IX";
        } else if (number >= 5) {
          number -= 5;
          result += "V";
        } else if (number == 4) {
          number -= 4;
          result += "IV";
        }
        while (number >= 1) {
          number -= 1;
          result += "I";
        }
        outputDiv.innerText = result;
      }
    } else {
      outputDiv.innerText = "Please enter a valid number";
    }
  
  }