// Sytles import
import '../styles/index.scss';

// JS import
import './play';


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

// const checkBtn = document.getElementById('checkAll');
// checkBtn.onclick = function() {
//   console.log(userChoice);
// };



// Initialization
function init(val) {
  userChoice = val.toLowerCase();
  let choiceStack = ['бабка грекокатолик', 'автобус', 'хресна хода'];
  let userChoiceIndex = choiceStack.indexOf(userChoice);
  
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice = choiceStack[randomNum];
  
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

  console.log(`Твій вибір ${userChoice}, комп вибрав ${computerChoice}. ` + ` ---- ` + resultMap[userResult]);

  let log = document.getElementById('results');

  if (userChoice == 'бабка грекокатолик' && userResult == 'c') {
    log.innerHTML = 'Кажда віруюча бабка ходить на хресну ходу! Вона поглинає бабку! Ти програв!';  
  }
  if (userChoice == 'бабка грекокатолик' && userResult == 'u') {
    log.innerHTML = 'Закрити всі вікна в автобусі! Негайно! Дує! Всі задихаються. Ти переміг!';  
  }
  if (userChoice == 'автобус' && userResult == 'c') {
    log.innerHTML = 'Даремно ти сів в той автобус! Бабка закриває вікна! Задихнешся! Ти програв!';  
  }
  if (userChoice == 'автобус' && userResult == 'u') {
    log.innerHTML = 'Дави їх дави! Розходилися тут ті християни! Пів міста перекрили! Ти переміг!';  
  }
  if (userChoice == 'хресна хода' && userResult == 'c') {
    log.innerHTML = 'Жодна віра не допоможе коли тебе переїде автобус! Ти програв!';  
  }
  if (userChoice == 'хресна хода' && userResult == 'u') {
    log.innerHTML = 'О, бабка тут як тут! Прошу до нас пані! Ти переміг!';  
  }
  if (userChoice == computerChoice) {
    log.innerHTML = 'Овва! Нічия!';  
  }
}


