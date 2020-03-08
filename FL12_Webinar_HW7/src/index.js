import './scss/style.scss';
import compareShapes from './js/compareShapes';
import showFinalResult from './js/showFinalResult';
import showRandomShape from './js/showRandomShape';
import showShape from './js/showShape';

const root = document.getElementById('root');
root.innerHTML = `
    <h1>Rock, Paper or Scissors</h1>
    <h4>Everybody knows the rules: </h4>
    <div class="rules">
        <p>Scissors beats a paper.</p>
        <p>Paper beats a rock.</p>
        <p>Rock beats a scissors.</p>
        <p>And we play up to tree wins!</p>
    </div>
    <h2>Let’s play!</h2>
    <div id="play-buttons">
        <button id="rock" class="play-buttons">Rock</button>
        <button id="paper" class="play-buttons">Paper</button>
        <button id="scissors" class="play-buttons">Scissors</button>
    </div>
    <div>
        <button id="reset">Reset</button>
    </div>
    <div id="result"></div>
`

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const reset = document.getElementById('reset');
const resultDiv = document.getElementById('result');
const playButtons = document.querySelectorAll('.play-buttons');
let counter = 0;
let gameResult;
let winCount = 0;
let looseCount = 0;
let finalResult;

const playButtonsHandler = (event) => {
  if (gameResult && gameResult.parentNode === root) {
    root.removeChild(gameResult);
  }

  if (counter === 3) {
    resultDiv.removeChild(finalResult);
    counter = 0;
    winCount = 0;
    looseCount = 0;
  }
  counter++;

  gameResult = document.createElement('div');
  gameResult.setAttribute('id', 'game-result');
  root.appendChild(gameResult);

  const randomShape = showRandomShape();
  const result = compareShapes(randomShape, event.target.id);

  if(result ===  'You’ve LOST!') {
    looseCount++;
  }
  if(result ===  'You’ve WON!') {
    winCount++;
  }

  gameResult.appendChild( showShape(event.target.id) );

  const gameInfo = document.createElement('p');
  gameResult.appendChild(gameInfo);
  const gameInfoText = document.createTextNode(
    `Round ${counter}, 
      ${event.target.id} vs ${randomShape}, 
      ${result}`
  );

  gameInfo.appendChild(gameInfoText);

  gameResult.appendChild( showShape(randomShape) );

  if (counter > 2) {
    finalResult = document.createElement('h3');
    finalResult.innerText = `${showFinalResult(winCount, looseCount)}`;
    resultDiv.appendChild(finalResult);
    playButtons.forEach(el => el.setAttribute('disabled', 'disabled'));
  }
};

const resetHandler = () => {
  counter = 0;
  winCount = 0;
  looseCount = 0;

  if (finalResult && finalResult.parentNode === resultDiv) {
    resultDiv.removeChild(finalResult);
  }

  if (gameResult && gameResult.parentNode === root) {
    root.removeChild(gameResult);
  }

  playButtons.forEach(el => el.removeAttribute('disabled', 'disabled'));
};

rockButton.addEventListener('click', playButtonsHandler);
paperButton.addEventListener('click', playButtonsHandler);
scissorsButton.addEventListener('click', playButtonsHandler);
reset.addEventListener('click', resetHandler);