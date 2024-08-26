let userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const resultsDiv = document.getElementById("results-div");
const regexCheck = [
  /^1 \d{3}-\d{3}-\d{4}$/,
  /^1 [(]\d{3}[)] \d{3}-\d{4}$/,
  /^1[(]\d{3}[)]\d{3}-\d{4}$/,
  /^1 \d{3} \d{3} \d{4}$/,
  /^\d{10}$/,
  /^\d{3}-\d{3}-\d{4}$/,
  /^[(]\d{3}[)]\d{3}-\d{4}$/
]

const validate = () => {
  clearResult();
  const input = userInput.value;
  if (input) {
    resultsDiv.innerHTML = `<h4 id="result">
    ${regexCheck.some((el) => el.test(input)) ? "Valid " : "Invalid "} US number: ${input}
    </h4>`;
  } else {
    alert("Please provide a phone number");
  }
  clearInput();
}

const clearResult = () => {
  resultsDiv.innerHTML = "";
}


const clearInput = () => {
  userInput.value = "";
}

const cleanPage = () => {
  clearResult();
  clearInput();
}