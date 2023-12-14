let emailName = document.querySelector(".email-name");
let contTwo = document.querySelector(".cont-2");
let gottenEmail = localStorage.getItem("email");
let parsedEmail = JSON.parse(gottenEmail);
let currentUser = parsedEmail[parsedEmail.length - 1];
emailName.textContent = currentUser;
let dismissBtn = document.querySelector(".dismiss");



dismissBtn.addEventListener("click",()=>{
    window.location.href = './index.html';
});