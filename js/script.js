//info
alert("Gra w kółko i krzyżyk");
printMessage("Gra w kółko i krzyżyk");
console.log("Gra w kółko i krzyżyk");

//buttons and action

document.getElementById("play-rock").addEventListener("click", function() {
  playGame(1);

});
document.getElementById("play-paper").addEventListener("click", function() {
  playGame(2);

});
document.getElementById("play-scissors").addEventListener("click", function() {
  playGame(3);

});

//Counting-Victories
let computerWins = 0;
let playerWins = 0;
let games = 0;

//game
function playGame(playerInput) {
  clearMessages();
  //computerMove//
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  function getMoveName(moveId) {
    if (moveId == 1) {
      printMessage("Wylosowano ruch nr 1 ");
      return "kamień";
    } else if (moveId == 2) {
      printMessage("Wylosowano ruch nr 2 ");
      return "papier";
    } else if (moveId == 3) {
      printMessage("Wylosowano ruch nr 3 ");
      return "nożyce";
    } else {
      printMessage("Niepoprawny+ruch" + moveId);
      return "nieznanyRuch";
    }
  }
  //playerMove//
  let playerMove = getMoveName(playerInput);
  //Moves//
  console.log("Ruch komputera, to:" + " " + computerMove);
  console.log("Twój ruch, to:" + " " + playerMove);
  printMessage("Komputer zagrał" + " " + computerMove);
  printMessage("A Ty zagrałeś" + " " + playerMove);
  //Functions//
  function displayResult(computerMove, playerMove) {
    if (computerMove == playerMove) {
      printMessage("Remis");
    } else if (computerMove == "papier" && playerMove == "kamień") {
      printMessage("Przegrałeś!");
      computerWins + 1;
    } else if (computerMove == "papier" && playerMove == "nożyce") {
      printMessage("Wygrałeś!");
      playerWins + 1;
    } else if (computerMove == "kamień" && playerMove == "papier") {
      printMessage("Wygrałeś!");
      playerWins + 1;
    } else if (computerMove == "kamień" && playerMove == "nożyce") {
      printMessage("Przegrałeś!");
      computerWins + 1;
    } else if (computerMove == "nożyce" && playerMove == "papier") {
      printMessage("Przegrałeś!");
      computerWins + 1;
    } else if (computerMove == "nożyce" && playerMove == "kamień") {
      printMessage("Wygrałeś!");
      playerWins +1;
    }
  }

  printMessage("Gra skończona, w jej rezultacie...");
  displayResult(computerMove, playerMove);
}

