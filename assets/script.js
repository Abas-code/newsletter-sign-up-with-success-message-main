const error = document.getElementById("error");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const modal = document.getElementById("modal");
const text = document.getElementById("myEmail");
const button = document.querySelector("button");

const emailRegex = /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/;

function validate(){
  event.preventDefault();

  if (!emailRegex.test(email.value)){
    error.style.opacity = 1;
    email.classList.add("warning");
  } else {
    modal.style.display = "flex";
    text.innerHTML = email.value;
  } 
};

function dismiss(){
  location.reload();
};