const [...options] = document.getElementsByTagName("tr");
let toScramble = [];
let scrambled = [];

// go through each table row
options.forEach((option) => {
  let count = 0;
  let newEl = "";
  [...toScramble] = option.querySelectorAll(':scope > td');
  // console.log(option);
  scrambled = toScramble.sort(() => Math.random() - .5);
  for (let index = 0; index < 3; index++) {
    newEl = document.createElement("td");
    // replace innerHTML for whole TD
    newEl.innerHTML += scrambled[index].innerHTML;
    option.children[index+1].replaceWith(newEl);
  }
  count +=1;
})
