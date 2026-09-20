const getChoices = () => {
  return document.querySelectorAll('[type="checkbox"]:checked');
}

// gets total number of choices
const totalChoices = document.querySelectorAll('[type="checkbox"]').length;
// sets total choices for each type
const classChoices = totalChoices/3;
// console.log(classChoices);

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

// smaller as % of larger e.g. 7.84/29.75 * 100 = 26.352
// i.e. (socialGroup_N/classChoices)*100

// sets results graphHeight - needs to match CSS for ".results div"
const graphHeight = 20;

const setGraphs = () => {
  poor_pc.innerHTML = `${socialGroup_1 * classChoices}% `;
  poorGraph.style["height"] = `${parseInt(socialGroup_1 * graphHeight)}px`;

  middle_pc.innerHTML = `${socialGroup_2 * classChoices}% `;
  middleGraph.style["height"] = `${parseInt(socialGroup_2 * graphHeight)}px`;

  wealthy_pc.innerHTML = `${socialGroup_3 * classChoices}% `;
  wealthyGraph.style["height"] = `${parseInt(socialGroup_3 * graphHeight)}px`;

  socialGroup_1 = 0, socialGroup_2 = 0, socialGroup_3 = 0;
}

done.addEventListener("click", () => {
  const choices = getChoices();
  choices.forEach( choice => {
    // gets 1,2,3 as class indicator
    socialTotals(parseInt(choice.name.at(-1)));
  });
  setGraphs();
});

const graphReset = () => {
  const graphs = document.querySelectorAll(".results div");
  [...graphs].map(elem => elem.style["height"] = "200px");
}

clear.addEventListener("click", () => {
  const choices = getChoices();
  choices.forEach( choice => {
    choice.checked = false;
    socialGroup_1, socialGroup_2, socialGroup_3 = 0;
  });
  graphReset();
});
