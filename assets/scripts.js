const getChoices = () => {
  return document.querySelectorAll('[type="checkbox"]:checked');
}
const socialGroup = () => {
  return document.querySelectorAll('[type="checkbox"]:checked');
}

let socialGroup_1 = 0, socialGroup_2 = 0, socialGroup_3 = 0;

const socialTotals = (choiceNumber) => {
  switch(choiceNumber) {
    case 1:
      socialGroup_1 += 1;
      break;
    case 2:
      socialGroup_2 += 1;
      break;
    case 3:
      socialGroup_3 += 1;
    default: /* shows if no option group selected or all deselected */
      console.log("Nothing chosen!");
  }
  // console.log(`One: ${socialGroup_1}, Two: ${socialGroup_2}, Three: ${socialGroup_3}`);
  // return `One: ${socialGroup_1}, Two: ${socialGroup_2}, Three: ${socialGroup_3}`;
}

clear.addEventListener("click", () => {
  const choices = getChoices();
  choices.forEach( choice => {
    choice.checked = false;
    socialGroup_1, socialGroup_2, socialGroup_3  = 0;
    poorGraph.style["height"]="200px", middleGraph.style["height"]="200px", wealthyGraph.style["height"]="200px";
    // poorGraph.innerHTML="", middleGraph.innerHTML="", wealthyGraph.innerHTML="";
    // poor_pc.innerHTML="", middle_pc.innerHTML="", wealthy_pc.innerHTML="";
  });
});

done.addEventListener("click", () => {
  const choices = getChoices();
  choices.forEach( choice => {
    // console.log(choice.name.slice(0, -2));
    socialTotals(parseInt(choice.name.at(-1)));
  });
  
  // poorGraph.innerHTML = `${socialGroup_1 * 10}%`;
  poor_pc.innerHTML = `${socialGroup_1 * 10}% `;
  poorGraph.style["height"] = `${parseInt(socialGroup_1 * 20)}px`;
  
  // middleGraph.innerHTML = `${socialGroup_2 * 10}%`;
  middle_pc.innerHTML = `${socialGroup_2 * 10}% `;
  middleGraph.style["height"] = `${parseInt(socialGroup_2 * 20)}px`;
  
  // wealthyGraph.innerHTML = `${socialGroup_3 * 10}%`;
  wealthy_pc.innerHTML = `${socialGroup_3 * 10}% `;
  wealthyGraph.style["height"] = `${parseInt(socialGroup_3 * 20)}px`;

  socialGroup_1 = 0, socialGroup_2 = 0, socialGroup_3 = 0;
});
