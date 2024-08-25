// <!-- Write a program that asks the user for a number n and prints the sum of the numbers 1 to n-->
var divNode = document.getElementById("UserId");
let label = document.createElement("label");
label.innerHTML = "Enter Any Number :";
divNode.appendChild(label);

let inputNode = document.createElement("input");
inputNode.setAttribute("id", "inputId");

divNode.appendChild(inputNode);
let input = document.getElementById("inputId");

let productNode = document.createElement("button");
productNode.setAttribute("Id", "productId");
productNode.innerText = "Enter";
productNode.style.marginLeft = "20px";

divNode.appendChild(productNode);

document.addEventListener("DOMContentLoaded", function () {
  let productButton = document.getElementById("productId");

  productButton.addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.getElementById("inputId");
    var inputValue = input.value;
    leapYear(inputValue);
  });
});

function leapYear(year) {
  let pNode = document.createElement("p");
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    pNode.innerHTML = year + "year is a leap year";
  } else {
    pNode.innerHTML = year + "year is not a leap year";
  }
  divNode.appendChild(pNode);
}
