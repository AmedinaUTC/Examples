/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currentScore1,currentScore2,globalScore1,globalScore2 = 0;

NewGame();

document.querySelector(".btn-new").addEventListener('click',NewGame);

document.querySelector(".btn-roll").addEventListener('click',function(){

    var dice = Math.floor(Math.random() *  6) + 1;

    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";


});

function NewGame(){

    currentScore1 = 0;
    currentScore2 = 0;
    globalScore1 = 0;
    globalScore2 = 0;

    document.getElementById("score-0").innerText = globalScore1;
    document.getElementById("score-1").innerText = globalScore2;
    document.getElementById("current-0").innerText = currentScore1;
    document.getElementById("current-1").innerText= currentScore2;

    var dice = document.getElementsByClassName("dice")[0];
    dice.setAttribute("style","display:none");

    var player1 = document.getElementsByClassName("player-0-panel")[0];
    var player2 = document.getElementsByClassName("player-1-panel")[0];

    player2.classList.remove('active');
    player1.classList.remove('active');
    player2.classList.remove('winner');
    player1.classList.remove('winner');
    player1.classList.add("active");
}