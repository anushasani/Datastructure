let inputNode = document.createElement("input");
let inputNodeId = inputNode.setAttribute("id", "inputValue");

var divNode = document.getElementById("userId");
let LableNode = document.createElement("label");
LableNode.innerText = "UserName : ";
divNode.appendChild(LableNode);
divNode.appendChild(inputNode);

let submitButton = document.createElement("button");
submitButton.setAttribute("id", "submit");
submitButton.innerText = "Submit";

divNode.appendChild(submitButton);
var submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  var inputInfo = document.getElementById("inputValue");
  let name = inputInfo.value;
  let head = document.createElement("h1");
  if (name === "Alice" || name === "Bob") {
    head.innerText = "Hello" + " " + name + " " + "how are you doing today";
    divNode.appendChild(head);
  } else {
    head.innerText = "Allowed Only for Alice and Bob";
    divNode.appendChild(head);
  }
});
