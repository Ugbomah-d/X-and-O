var turn = 1;
var boxes = document.querySelectorAll(".box");
var board = ['', '', '', '', '', '', '', '', '',];
var winnerDiv = document.querySelector(".winner")

for( var i = 0; i < boxes.length; i++){
  boxes[i].addEventListener('click', function(){
    var index = this.getAttribute('data-index');

    if (board[index] === '' && winnerDiv.innerHTML === ''){

      if(turn === 1){
        this.innerHTML = "X";
  
        turn = 2;
      }else{
        this.innerHTML = "O";
        turn = 1;
      }   
      checkWinner();
    }
    
  })
}

function checkWinner(){
  var winnerCheck = [
    [0,1,2], [3,4,5], [6,7,8] //Rows
    [0,3,6], [1,4,7], [2,5,8] //columns
    [0,4,8], [2,4,6]          //Diagonals
  ];
  //what if x is and o are on the same row  
  for(var i = 0; i < winnerCheck[i].length; i++){

  }
}