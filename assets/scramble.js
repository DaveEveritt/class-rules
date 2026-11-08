const [...options] = document.getElementsByTagName("tr");
let toScramble = [];
let scrambled = [];

// go through each table row
options.forEach((option) => {
  let count = 0;
  let newEl = "";
  [...toScramble] = option.querySelectorAll(':scope > td');
  console.log(option);
  scrambled = toScramble.sort(() => Math.random() - .5);
  for (let index = 0; index < 3; index++) {
    newEl = document.createElement("td");
    newEl.innerText += `${[...scrambled][index].innerText}`;
    console.log(newEl.innerText);
    option.children[index+1].replaceWith(newEl);
  }
  // option.children[1].style.backgroundColor = "red";
  count +=1;
})

/*
for each tr
replaceChild(scrambled[0], td[0])

var td = <reference to td element>;
var newTd = document.createElement('td');
td.parentNode.replaceChild(newTd, td);

const oldThing = document.querySelector(".old-Thing");
const newThing = document.createElement("Thing");
newThing.textContent = "Save";
oldThing?.replaceWith(newThing);

oldNode.parentNode.replaceChild(newNode, oldNode);
USE NEW VERSION:
oldNode.replaceWith(newNode);
*/
