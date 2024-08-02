var turn = 1;
for( var i = 0; i < document.querySelectorAll(".box").length; i++){
  document.querySelectorAll(".box")[i].addEventListener('click', function(){
    
    if(turn === 1){
      this.innerHTML = "X";
      turn = 2
    }else{
      this.innerHTML = "O";
      turn = 1
    }    
    
  })
}