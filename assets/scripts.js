const getChoices = () => {
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
  }
}

clear.addEventListener("click", () => {
  const choices = getChoices();
  choices.forEach( choice => {
    choice.checked = false;
    socialGroup_1, socialGroup_2, socialGroup_3  = 0;
    poorGraph.style["height"]="200px", middleGraph.style["height"]="200px", wealthyGraph.style["height"]="200px";
  });
});

done.addEventListener("click", () => {
  const choices = getChoices();
  choices.forEach( choice => {
    socialTotals(parseInt(choice.name.at(-1)));
  });
  
  poor_pc.innerHTML = `${socialGroup_1 * 10}% `;
  poorGraph.style["height"] = `${parseInt(socialGroup_1 * 20)}px`;
  
  middle_pc.innerHTML = `${socialGroup_2 * 10}% `;
  middleGraph.style["height"] = `${parseInt(socialGroup_2 * 20)}px`;
  
  wealthy_pc.innerHTML = `${socialGroup_3 * 10}% `;
  wealthyGraph.style["height"] = `${parseInt(socialGroup_3 * 20)}px`;

  socialGroup_1 = 0, socialGroup_2 = 0, socialGroup_3 = 0;
});
