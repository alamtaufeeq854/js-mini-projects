let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.onclick = function () {
  if (password.type == "password") {
    eyeIcon.src = "../images/eye-open.png";
    password.type = "text";
  } else {
    eyeIcon.src = "../images/eye-close.png";
    password.type = "password";
  }
};
