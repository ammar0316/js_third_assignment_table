// Question 1
// get input from user 
let numA = prompt("enter your English marks");
let numB = prompt("enter your Math marks"); 
let numC = prompt("enter your Urdu marks"); 
// convert into Number
numA = Number(numA);
numB = Number(numB);
numC = Number(numC);
// sum of the number
let sum = numA+numB+numC ;
// averge of numbers
let averge = (sum)/3;
// roundoff of number
averge = Math.floor(averge);
// get elements from html page
// obtains number
document.getElementById("num1").textContent = numA;
document.getElementById("num2").textContent = numB;
document.getElementById("num3").textContent = numC;
// percentage number
document.getElementById("per1").textContent =numA+"%";
document.getElementById("per2").textContent =numB+"%";
document.getElementById("per3").textContent =numC+"%";
// sum of the number
document.getElementById("total").textContent = sum;
// averge of the number
document.getElementById("avrg").textContent =averge+"%";



