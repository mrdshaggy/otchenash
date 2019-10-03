// Sytles import
// import '../styles/index.scss';

// JS import
import './play';


// User selection
let gif = document.getElementById('gif');
let logText = '';
let log = document.getElementById('results');

let userChoice;
function userSelect() {
  let choices = document.querySelectorAll('.userSelect');
  choices.forEach((element) => {
    element.onclick = function() {
      let val = this.value;
      gif.style.backgroundImage = "";
      logText = "";
      log.innerHTML = "";
      disableButtons();
      playSlogan();
      if (val == 'Автобус') {
        gif.style.backgroundImage = "url('../../assets/bus-stopped.gif')";
      }
      else if (val == 'Бабка грекокатоличка') {
        gif.style.backgroundImage = "url('../../assets/babka-stopped.gif')";
      }
      else if (val == 'Хресна хода') {
        gif.style.backgroundImage = "url('../../assets/hh-stopped.gif')";
      }
      init(val);
    };
  });
}
userSelect();

// otchenash
function playSlogan() {
  let slogan = ['O', 'tche', 'nash!'];
  let i = 0;
  let sloganText = document.getElementById('slogan');
  let interval = setInterval(function(){
    sloganText.innerHTML = slogan[i++];
    if(i == slogan.length){
       clearInterval(interval);
       enableButtons();
       log.innerHTML = logText;
    }
  }, 520);
}

// disable buttons
let btns = document.querySelectorAll('.userSelect');
function disableButtons() {
  btns.forEach((el) => {
    el.setAttribute('disabled', "disabled");
  });
}
function enableButtons() {
  btns.forEach((el) => {
    el.removeAttribute('disabled');
  });
}


// Initialization
function init(val) {
  userChoice = val.toLowerCase();
  let choiceStack = ['бабка грекокатоличка', 'автобус', 'хресна хода'];
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

  
  if (userChoice == 'бабка грекокатоличка' && userResult == 'c') {
    logText = 'Кажда віруюча бабка ходить на хресну ходу! Вона поглинає бабку! Ти програв!';
    return;
  }
  if (userChoice == 'бабка грекокатоличка' && userResult == 'u') {
    logText = 'Закрити всі вікна в автобусі! Негайно! Дує! Всі задихаються. Ти переміг!';  
    return;
  }
  if (userChoice == 'автобус' && userResult == 'c') {
    logText = 'Даремно ти сів в той автобус! Бабка закриває вікна! Задихнешся! Ти програв!';  
    return;
  }
  if (userChoice == 'автобус' && userResult == 'u') {
    logText = 'Дави їх дави! Розходилися тут ті християни! Пів міста перекрили! Ти переміг!';  
    return;
  }
  if (userChoice == 'хресна хода' && userResult == 'c') {
    logText = 'Жодна віра не допоможе коли тебе переїде автобус! Ти програв!';  
    return;
  }
  if (userChoice == 'хресна хода' && userResult == 'u') {
    logText = 'О, бабка тут як тут! Прошу до нас пані! Ти переміг!';  
    return;
  }
  if (userChoice == computerChoice) {
    logText = 'Овва! Нічия!';  
    return;
  }
}


