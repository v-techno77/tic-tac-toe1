let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new-btn");
let msgCon = document.querySelector(".msg-cont");
let msg = document.querySelector(".msg");
let turn0 = true; // Player O starts

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

// Handle player move
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
    } else {
      box.innerText = "X";
    }
    box.disabled = true;  // Disable clicked box
    turn0 = !turn0;
    checkWin();
  });
});

// Show winner message
const showWin = (winner) => {
  msg.innerText = `${winner} Wins! 🎉 Winner Winner, Tic-Tac Dinner!`;
  msgCon.classList.remove("hide");
};

// Check for winning condition
const checkWin = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        // Show winner
        showWin(pos1);
        // Disable all boxes after win
        boxes.forEach((box) => box.disabled = true);
        return;
      }
    }
  }
};

// Reset Game (common function)
const resetGame = () => {
  turn0 = true;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msgCon.classList.add("hide");
};

// Event listeners for reset and new game
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
