//info
printMessage("Gra w kółko i krzyżyk") || console.log("Gra w kółko i krzyżyk");
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

// printMessage(getMoveName(randomNumber));

//playerMove//
let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
let playerMove = getMoveName(playerInput);

//Moves//
console.log(computerMove) || printMessage("Komputer zagrał+" + computerMove);
console.log(playerMove) || printMessage("A Ty zagrałeś" + playerMove);

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
    } else if(randomNumber == 1) {
        printMessage("Ruch komputera nr 1");
        computerMove = "kamień";
    } else if(randomNumber == 2){
        printMessage("Ruch komputera nr 2");
        computerMove = "papier";
    } else if(randomNumber == 3){
        printMessage("Ruch komputera nr 3");
        computerMove = "nożyce";
    }
}

printMessage("Gra skończona, w jej rezultacie...");
displayResult(computerMove, playerMove);

// stary kod
/*
let computerMove = "nieznanyRuch" {
    if(randomNumber == 1) {
        printMessage("Ruch komputera nr 1");
        computerMove = "kamień";
    } else if(randomNumber == 2){
        printMessage("Ruch komputera nr 2");
        computerMove = "papier";
    } else if(randomNumber == 3){
        printMessage("Ruch komputera nr 3");
        computerMove = "nożyce";
     }
*/