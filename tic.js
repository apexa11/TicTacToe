//function for clickbutton
    var player=1;
    var moves=0;
   
    
    function clickbtn(btn){
   
    if (player==1) {
        document.getElementById(btn).value="X";
        document.getElementById(btn).style.fontSize="xx-large";
        player=player-1;
        check1();
        check2();
    }
    else {
        document.getElementById(btn).value="O";
        document.getElementById(btn).style.fontSize="xx-large";
        player=player+1;
        check1();
        check2();
    }
}

//for winners
function check1(){
    if(
    document.getElementById("btn1").value=="X" &&
    document.getElementById("btn2").value=="X" &&
    document.getElementById("btn3").value=="X" ||
    document.getElementById("btn4").value=="X" &&
    document.getElementById("btn5").value=="X" &&
    document.getElementById("btn6").value=="X" ||
    document.getElementById("btn7").value=="X" &&
    document.getElementById("btn8").value=="X" &&
    document.getElementById("btn9").value=="X" ||
    document.getElementById("btn1").value=="X" &&
    document.getElementById("btn4").value=="X" &&
    document.getElementById("btn7").value=="X" ||
    document.getElementById("btn2").value=="X" &&
    document.getElementById("btn5").value=="X" &&
    document.getElementById("btn8").value=="X" ||
    document.getElementById("btn3").value=="X" &&
    document.getElementById("btn6").value=="X" &&
    document.getElementById("btn9").value=="X" ||
    document.getElementById("btn1").value=="X" &&
    document.getElementById("btn5").value=="X" &&
    document.getElementById("btn9").value=="X" ||
    document.getElementById("btn3").value=="X" &&
    document.getElementById("btn5").value=="X" &&
    document.getElementById("btn7").value=="X" 
    )
    {
    
    alert("winner is X");
    
    reset();
    
    }
    else{
        check2();
        drawcheck();
    }
}
    
    function check2(){

     if(
    document.getElementById("btn1").value=="O" &&
    document.getElementById("btn2").value=="O" &&
    document.getElementById("btn3").value=="O" ||
    document.getElementById("btn4").value=="O" &&
    document.getElementById("btn5").value=="O" &&
    document.getElementById("btn6").value=="O" ||
    document.getElementById("btn7").value=="O" &&
    document.getElementById("btn8").value=="O" &&
    document.getElementById("btn9").value=="O" ||
    document.getElementById("btn1").value=="O" &&
    document.getElementById("btn4").value=="O" &&
    document.getElementById("btn7").value=="O" ||
    document.getElementById("btn2").value=="O" &&
    document.getElementById("btn5").value=="O" &&
    document.getElementById("btn8").value=="O" ||
    document.getElementById("btn3").value=="O" &&
    document.getElementById("btn6").value=="O" &&
    document.getElementById("btn9").value=="O" ||
    document.getElementById("btn1").value=="O" &&
    document.getElementById("btn5").value=="O" &&
    document.getElementById("btn9").value=="O" ||
    document.getElementById("btn3").value=="O" &&
    document.getElementById("btn5").value=="O" &&
    document.getElementById("btn7").value=="O" 
    )
    {
    
    alert("winner is O");
    
    reset();
    }
    else{
       drawcheck();
    }

}

//reset the code
function reset(){
    document.getElementById("btn1").value="" ;
    document.getElementById("btn2").value="" ;
    document.getElementById("btn3").value="" ;
    document.getElementById("btn4").value="" ;
    document.getElementById("btn5").value="" ;
    document.getElementById("btn6").value="" ;
    document.getElementById("btn7").value="" ;
    document.getElementById("btn8").value="" ;
    document.getElementById("btn9").value="" ;
}


