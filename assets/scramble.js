const [...options] = document.getElementsByTagName("tr");
let toScramble = [];
let scrambled = [];

options.forEach((option) => {
  let count = 0;
  [...toScramble] = option.querySelectorAll(':scope > td');
  scrambled = toScramble.sort(() => Math.random() - .5);
  console.log(toScramble[count].outerHTML);
  console.log("\n"+[...scrambled][count].outerHTML);
  option.replaceWith([...scrambled][count].outerHTML);
  // option.setHTML([...scrambled][count].outerHTML);
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
