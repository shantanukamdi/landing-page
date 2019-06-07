console.log("script loaded");

const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");

const loginForm = document.getElementById("login");
const signupForm = document.getElementById("signup");

btnLogin.addEventListener("click", e => {
  console.log("login clicked");
  signupForm.style.display = "none";
  btnSignUp.classList.remove("active");
  loginForm.style.display = "flex";
  btnLogin.classList.add("active");
});

btnSignUp.addEventListener("click", e => {
  console.log("signup clicked");
  loginForm.style.display = "none";
  btnLogin.classList.remove("active");
  signupForm.style.display = "flex";
  btnSignUp.classList.add("active");
});
