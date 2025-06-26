var turn = 1;
var boxes = document.querySelectorAll(".box");
var board = ['', '', '', '', '', '', '', '', ''];
var winnerDiv = document.querySelector(".winner");

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function () {
    var index = this.getAttribute('data-index');

    if (this.innerHTML === '' && winnerDiv.innerHTML === '') {
      if (turn === 1) {
        this.innerHTML = "X";
        board[index] = "X";
        turn = 2;
      } else {
        this.innerHTML = "O";
        board[index] = "O";
        turn = 1;
      }

      checkWinner();
    }
  });
}

function checkWinner() {
  var winnerCheck = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (var i = 0; i < winnerCheck.length; i++) {
    var [a, b, c] = winnerCheck[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winnerDiv.innerHTML = board[a] + " wins!";
      return;
    }
  }

  if (!board.includes('') && winnerDiv.innerHTML === '') {
    winnerDiv.innerHTML = "It's a draw!";
  }
}
