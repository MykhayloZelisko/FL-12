export function updateField(state, onCellClick) {
  const field = document.querySelector(".field");
  field.textContent = "";
  document.querySelector(".round-result").textContent =
    state.gameStatus === "ongoing" ? "" : state.gameStatus;
  state.cells.forEach((cell, index) => {
    const cellNode = document.createElement("div");
    cellNode.classList.add("cell");
    if (cell !== "") {
      cellNode.classList.add(`cell-${cell}`);
      cellNode.innerText = `${cell}`;
      if (
        state.winningCells.length > 0 &&
        state.winningCells.some(cellsRange => cellsRange.includes(index))
      ) {
        cellNode.classList.add("win");
      }
    }
    if (cell === "" && state.gameStatus === "ongoing") {
      cellNode.addEventListener("click", () => onCellClick(index));
    }
    field.appendChild(cellNode);
  });
  if (state.cells.every(el => el !== "" && state.winningCells.length === 0)) {
    document.querySelectorAll('.cell').forEach(el => el.classList.add('draw'));
  }

  const scoreValue = document.querySelector('.score-value');
  scoreValue.textContent = `${state.scores.x} : ${state.scores.o}`;


  // const scoreXNode = document.querySelector(".score-x .score-value");
  // scoreXNode.textContent = state.scores.x;
  // const scoreONode = document.querySelector(".score-o .score-value");
  // scoreONode.textContent = state.scores.o;




  document.querySelectorAll(".score").forEach(score => {
    score.classList.remove("score-current");
  });
  if (state.currentTurn === "x") {
    document.querySelector(".score-x").classList.add("score-current");
  } else {
    document.querySelector(".score-o").classList.add("score-current");
  }
}
