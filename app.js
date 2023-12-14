"use strict";
let contOne = document.querySelector(".cont-1");
let submitBtn = document.querySelector(".submit");
let invalid = document.querySelector(".invalid");
let input = document.querySelector(".input");
let data = [];


function persistState() {
  let getEmail = localStorage.getItem("email");
  if (getEmail === null) {
    localStorage.setItem("email", JSON.stringify(data));
  } else {
    data = JSON.parse(getEmail);
  }
}

persistState();

window.addEventListener("load", () => {
  input.focus();
  input.style.outline = "none";
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  let emailValid =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value !== "" && input.value.match(emailValid)) {
    let userEmail = input.value;
    console.log(userEmail);

    data = [...data, userEmail];
    console.log(data);

    localStorage.setItem("email", JSON.stringify(data));
    console.log(localStorage);

    window.location.href = "./sucess.html";
  }
  invalid.style.display = "block";
  input.style.border = "1px solid red";
});
