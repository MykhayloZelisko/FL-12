import { handleCellClick } from "./js/game";
import { updateField } from "./js/gui";
import "./sass/index.scss";

let state = {
  cells: [],
  scores: {},
  currentTurn: "",
  gameStatus: "",
  winningCells: []
};
initField();
initScore();
updateField(state, onCellClick);

const newGameButton = document.querySelector(".new-game");
newGameButton.addEventListener("click", () => {
  initField(), updateField(state, onCellClick);
});
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  initField();
  initScore();
  updateField(state, onCellClick);
});

function initField() {
  state.cells = ["", "", "", "", "", "", "", "", ""];
  state.currentTurn = "x";
  state.gameStatus = "ongoing";
  state.winningCells = [];
}

function initScore() {
  state.scores = {
    x: 0,
    o: 0
  };
}

function clone(cloned) {
  return JSON.parse(JSON.stringify(cloned));
}

function onCellClick(cellIndex) {
  state = handleCellClick({ cellIndex: cellIndex, ...clone(state) });
  updateField(state, onCellClick);
}
