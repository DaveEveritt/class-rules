const getChoices = () => {
  return document.querySelectorAll('[type="checkbox"]:checked');
}

// gets total number of choices
const totalChoices = document.querySelectorAll('[type="checkbox"]').length;
// sets total choices for each type - console.log(classChoices);
const classChoices = totalChoices/3;
// sets graphHeight - must match CSS for ".results div"
const graphHeight = 20;

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

// smaller as % of larger e.g. smaller/larger * 100 = result
const setGraphs = () => {
  poor_pc.innerHTML = `${((socialGroup_1/classChoices)*100).toFixed(1)}% `;
  poorGraph.style["height"] = `${parseInt(socialGroup_1 * graphHeight)}px`;
  
  middle_pc.innerHTML = `${((socialGroup_2/classChoices)*100).toFixed(1)}% `;
  middleGraph.style["height"] = `${parseInt(socialGroup_2 * graphHeight)}px`;
  
  wealthy_pc.innerHTML = `${((socialGroup_3/classChoices)*100).toFixed(1)}% `;
  wealthyGraph.style["height"] = `${parseInt(socialGroup_3 * graphHeight)}px`;

  socialGroup_1 = 0, socialGroup_2 = 0, socialGroup_3 = 0;
}

done.addEventListener("click", () => {
  const choices = getChoices();
  choices.forEach( choice => {
    // gets 1,2,3 as class indicator from last char of name attribute
    socialTotals(parseInt(choice.name.at(-1)));
  });
  setGraphs();
});

const graphReset = () => {
  const graphs = document.querySelectorAll(".results div");
  [...graphs].map(elem => elem.style["height"] = "2px");
  poor_pc.innerHTML = "", middle_pc.innerHTML = "", wealthy_pc.innerHTML = "";
}

clear.addEventListener("click", () => {
  const choices = getChoices();
  choices.forEach( choice => {
    choice.checked = false;
    socialGroup_1 = 0, socialGroup_2 = 0, socialGroup_3 = 0;
  });
  graphReset();
});
