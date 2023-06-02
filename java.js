"use strict";
// let money = 10;
// if (money >= 90) {
//   console.log("you shoud buy a car!");
// } else if(money<=10) {
//   console.log("you most get a job for yourself!");
// }

// ------------------------------------------------------------------------------>

// const test = Number(prompt("what's your favariote number?"));
// console.log("wow!! it's a cool number" + "\n" + `your number is : ${test}`);
// if (test !== 4) console.log("why it's not 4? refresh the page and try again");
// if (test === 4) console.log("you got it!:)");

// document.addEventListener("keypress", function(event){
//     console.log("key pressed : "+ event.key);
// });

// ------------------------------------------------------------------------------->

// let key;
// document.addEventListener("keypress", function (event) {
//   key = event.key;
//   alert(key);
// });
// (function () {
//   const name = prompt("wirte your name : ");
//   if (name) {
//     let lname = prompt(`well,your name is ${name} and Last name?`);
//     const fullname = name + " " + lname;
//     console.log(fullname);
//   } else {
//   }
// })();

// ------------------------------------------------------------------------------->

// const haslicense = true;
// const hasgoodvision = true;
// if (haslicense && hasgoodvision) {
//   console.log("sepehr can drive");
// } else {
//     console.log("sepher can't dirve");
// }

// ------------------------------------------------------------------------------->

// let randomNum = Math.floor(Math.random() * 10);
// console.log(randomNum);
// if (randomNum >= 0) {
//   console.log("hello");
//   for(let i = 0;randomNum<=10;i++){
//     randomNum += i;
//     console.log(randomNum);
//   }
// }

// ------------------------------------------------------------------------------->

// let test = Number(prompt("how old are you?"));
// if(result==true){
//     document.addEventListener("keypress",function(event){
//     document.getElementById("s").innerHTML += event.key;
//     })
// }
// console.log(`i like ${test >= 18 ? 'wine' : "water"}`);

// ------------------------------------------------------------------------------->

// function fruitprose(orange, apple) {
//     console.log(orange,apple);
//     return `juis has ${orange} orange and ${apple} apple`;
// }
// let juise = fruitprose(prompt(`enter orange value : `),prompt("enter apple value : "))
// console.log(juise);
// const calcAge = function(birthday){
//     return 2037 - birthday;
// }
// let result = calcAge(1990);
// console.log(result);

// let cacl2 = birthday => Number(prompt("enter a year you want to khnow how old are you.")) - birthday;
// let cacc = cacl2(Number(prompt("your birthday?")));
// alert(`ok! you are ${cacc} years old\nand ${cacl2(1990)} is year of your chosed. `)

// const yearunit = (birthday,name) => {
//     const age = 2059 - birthday;
//     const retirement = 100 - age;
//     return retirement;
// }
// console.log(yearunit(1999),"sepehr");

// let frute = function(orange,apple){
//     return `juise has ${orange} orange and ${apple} apple`;
// }
// let result = frute(2,5)
// console.log(result)

var deb = false;
const hamber = document.getElementById("hamber");
const list = document.querySelector(".ul-menu");
hamber.addEventListener("click", () => {
  if (deb == false) {
    hamber.classList.add("transform", "after");
    list.style.top = "0";
    deb = true;
  } else {
    hamber.classList.remove("transform", "after");
    list.style.top = "-70";
    deb = false;
  }
});

var i = 0;
var txt = "my projects is here>>";
var speed = 160;
(
    function typeWriter() {
        if (i < txt.length) {

            document.getElementById("demo").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
    }
)();
const body = document.getElementById("body");
const night = document.getElementById("night");
const ulmenu = document.getElementById("ul-menu");
const ul_post2 = document.getElementById("ul-post2");
const h1_header = document.getElementById("h1-header");
const box1 = document.getElementById("box");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
let bool = false;
night.addEventListener("click",() =>{
    if(bool==false){
        body.classList.add("nightmode");
        night.innerHTML = "light mode";
        ulmenu.classList.add("txnight");
        ul_post2.classList.add("txnight2");
        h1_header.classList.add("txnight3")
        box1.classList.add("boxnight");
        box2.classList.add("boxnight");
        box3.classList.add("boxnight");
        box4.classList.add("boxnight");
        bool = true;
    }
    else{
        body.classList.remove("nightmode");
        night.innerHTML = "night mode";
        ulmenu.classList.remove("txnight");
        ul_post2.classList.remove("txnight2");
        box1.classList.remove("boxnight");
        box2.classList.remove("boxnight");
        box3.classList.remove("boxnight");
        box4.classList.remove("boxnight");
        bool = false;
    }
})