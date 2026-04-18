document.addEventListener("DOMContentLoaded", () => {
  const passwordBox = document.getElementById("password");
  const generateButton = document.getElementById("generate-button");
  const copyButton = document.getElementById("copy");
  const messageDisplay = document.getElementById("message");

  const length = 15;

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";

  const allChars = upperCase + numbers + lowerCase;

  function createPassword() {
    messageDisplay.innerHTML = "";
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
  }

  function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");

    if (passwordBox.value == "") {
      messageDisplay.innerHTML = "Please ! Tap on Generate Button";
    } else messageDisplay.innerHTML = "Password copied !";
  }

  generateButton.addEventListener("click", createPassword);
  copyButton.addEventListener("click", copyPassword);
});
