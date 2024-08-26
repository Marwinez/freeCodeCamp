function palcheck() {
    let text = document.getElementById("text-input").value;
    if (text) {
      const text1 = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
      const text2 = text1.split('').reverse().join('');
      document.getElementById("result").innerText = text1 == text2 ? `${text} is a palindrome` : `${text} is not a palindrome`;
    } else {
      alert("Please input a value");
    }
  }