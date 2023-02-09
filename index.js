var toggleIcon = document.querySelector(".toggle-icon .fa-bars ");
var xIcon = document.querySelector(" .toggle-icon .fa-xmark");
var Links = document.querySelector(".links");
var Login = document.querySelector(".login");
var navBackground = document.querySelector(".nav-background");
var noBars = document.querySelector(".fa-bars");
var noX = document.querySelector(".fa-xmark");
var msp1 =document.querySelector(".msp1");
var ainshams1 =document.querySelector(".ainshams1");
var hrLogin =document.querySelector(".hr-login");



toggleIcon.addEventListener("click" , function() {
   Links.classList.toggle("d-flex");
   Login.classList.toggle("d-flex");
   navBackground.classList.toggle("background");
   noBars.classList.toggle("no-bars");
   noX.classList.toggle("d-flex");
   msp1.classList.toggle("msp-logo-combo");
   ainshams1.classList.toggle("msp-logo-combo");
   hrLogin.classList.toggle("no-hr");
})


xIcon.addEventListener("click" , function() {
   Links.classList.toggle("d-flex");
   Login.classList.toggle("d-flex");
   navBackground.classList.toggle("background");
   noBars.classList.toggle("no-bars");
   noX.classList.toggle("d-flex");
   msp1.classList.toggle("msp-logo-combo");
   ainshams1.classList.toggle("msp-logo-combo");
   hrLogin.classList.toggle("no-hr");

})