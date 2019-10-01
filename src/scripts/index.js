// Sytles import
import '../styles/index.scss';


// User selection
let userChoice;
function userSelect() {
  let choices = document.querySelectorAll('.userSelect');
  choices.forEach((element) => {
    element.onclick = function() {
      init(this.value);
    };
  });
}
userSelect();

const checkBtn = document.getElementById('checkAll');
checkBtn.onclick = function() {
  console.log(userChoice);
};



// Initialization
function init(val) {
  userChoice = val.toLowerCase();
  let choiceStack = ['бабка грекокатолик', 'автобус', 'хресна хода'];
  let userChoiceIndex = choiceStack.indexOf(userChoice);
  
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice = choiceStack[randomNum];
  
  console.log(`Твій вибір ${userChoice}, комп вибрав ${computerChoice}.`);
  
  const results = [
    ['t', 'c', 'u'],
    ['u', 't', 'c'],
    ['c', 'u', 't'],
  ];
  
  let userResult = results[randomNum][userChoiceIndex];
  
  const resultMap = {
    't': "Нічия",
    'u': "Ти виграв!",
    'c': "Ти програв!"
  };
  console.log(resultMap[userResult]);

  let log = document.getElementById('results');
  log.innerHTML = `Твій вибір ${userChoice}, комп вибрав ${computerChoice}. ` + ` ---- ` + resultMap[userResult];
}


