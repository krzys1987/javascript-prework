//info
printMessage("Gra w kółko i krzyżyk");
console.log("Gra w kółko i krzyżyk");

 //buttons
 function buttonClicked() {
    printMessage("Wybór został dokonany");
 }
 let zagrajKamien = document.getElementById("play-rock");
 zagrajKamien.addEventListener('click', buttonClicked);
 let zagrajPapier = document.getElementById("play-paper");
 zagrajPapier.addEventListener('click', buttonClicked);
 let zagrajNozyce = document.getElementById("play-scissors");
 zagrajKamien.addEventListener('click', buttonClicked);

 //game
function playGame(playerInput) {
    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
        });
        document.getElementById('play-paper').addEventListener('click', function(){
            playGame(2);
        });
        document.getElementById('play-scissors').addEventListener('click', function(){
            playGame(1);
        });
    //computerMove//
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    function getMoveName(moveId){
        if(moveId == 1){
            printMessage("Wylosowano ruch nr 1 ");
            return "kamień";
        } else if(moveId == 2){
            printMessage("Wylosowano ruch nr 2 ");
            return "papier";
        } else if(moveId == 3){
            printMessage("Wylosowano ruch nr 3 ");
            return "nożyce";
        } else {
            printMessage("Niepoprawny+ruch" + moveId);
            return "nieznanyRuch";
        }
    }
    //printMessage(getMoveName(randomNumber));
    //playerMove//
    ///let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
    let playerMove = getMoveName(playerInput);
    //Moves//
    console.log(computerMove);
    console.log(playerMove);
    printMessage("Komputer zagrał+" + computerMove);
    printMessage("A Ty zagrałeś" + playerMove);
    //Functions//
    function displayResult(computerMove, playerMove){
        if (computerMove == playerMove) {
            printMessage("Remis")
        } else if (computerMove == "papier" && playerMove == "kamień") {
            printMessage("Przegrałeś!");
        } else if (computerMove == "papier" && playerMove == "nożyce") {
            printMessage("Wygrałeś!");
        } else if (computerMove == "kamień" && playerMove == "papier") {
            printMessage("Wygrałeś!");
        } else if (computerMove == "kamień" && playerMove == "nożyce") {
            printMessage("Przegrałeś!");
        } else if (computerMove == "nożyce" && playerMove == "papier") {
            printMessage("Przegrałeś!");
        } else if (computerMove == "nożyce" && playerMove == "kamień") {
            printMessage("Wygrałeś!");
        }
    }
    printMessage("Gra skończona, w jej rezultacie...");
    displayResult(computerMove, playerMove);
}

playGame(3);
document.getElementById("play-rock").addEventListener("click", function() {
    printMessage("Zagrałem"+getMoveName)
})
document.getElementById("play-paper").addEventListener("click", function() {
    printMessage("Zagrałem"+getMoveName)
})
document.getElementById("play-scissors").addEventListener("click", function() {
    printMessage("Zagrałem"+getMoveName)
})

