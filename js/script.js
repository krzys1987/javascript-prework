/* General */
console.log("NoughtAndCrosses");
console.log("computerMove");
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);



/*computerMove */

let computerMove = getMoveName(randomNumber);
/*
let computerMove = "nieznanyRuch";
/*
if(randomNumber == 1) {
    printMessage("Ruch komputera nr 1");
    computerMove = "kamień";
} else if(randomNumber == 2) {
    printMessage("Ruch komputera nr 2");
    computerMove = "papier";
} else if(randomNumber == 3) {
    printMessage("Ruch komputera nr 3");
    computerMove = "nożyce";
}
*/

/* printMessage("Komputer losuje: " + computerMove);



/*Functions */
let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
let moveId = playerInput;

function getMoveName(moveId) {
	if(moveId == 1){
		printMessage("Wynik to ruch nr 1, czyli: ");
		return "kamień";
	} else if(moveId == 2){
		printMessage("Wynik to ruch nr 2, czyli: ");
		return "papier";
	} else if(moveId == 3){
		printMessage("Wynik to ruch nr 3, czyli: ");
		return "nożyce";
	} else {
		printMessage("Nie wiem, co znaczy" + moveId );
		return "nieznanyRuch";
	}

}


/*playerMove */

console.log("NoughtAndCrosses");
console.log("playerMove");
console.log("Gracz wpisał: " + playerInput);
/* console.log("Gracz wpisał: " + getMoveName(getMoveName) ); */
let playerMove = getMoveName(moveId);

/* printMessage("Wylosowałem:+playerMove); */

/* dodałem && pomiędzy i coś ruszyło, tylko muszę poprawić, bo głupoty na ekranie */
displayResult(computerMove && playerMove);

printMessage("Mój wynik, to: " + playerMove);


/* function playerMove = getMoveName(playerMove);

/*
let playerMove = "nieznanyRuch";

if (playerInput == "1") {
    printMessage("Mój ruch nr 3");
    playerMove = "nożyce";
} else if (playerInput == 2) {
    playerMove = "papier";
    printMessage("Mój ruch nr 2");
} else if (playerInput == 3) {
    playerMove = "kamień";
    printMessage("Mój wynik o ruch nr 1");
} else {
    playerMove = "nieznanyRuch";
    printMessage("Losuj ponownie");
}



*/

/* Results evaluation */

/* wyświetlanie wyników rozwala wszystko,
let displayResult(playerMove);
*/

if (computerMove == playerMove) {
    printMessage("Remis")
}
if (computerMove == "papier" && playerMove == "kamień") {
    printMessage("Przegrałeś!");
}
if (computerMove == "papier" && playerMove == "nożyce") {
    printMessage("Wygrałeś!");
}
if (computerMove == "kamień" && playerMove == "papier") {
    printMessage("Wygrałeś!");
}
if (computerMove == "kamień" && playerMove == "nożyce") {
    printMessage("Przegrałeś!");
}
if (computerMove == "nożyce" && playerMove == "papier") {
    printMessage("Przegrałeś!");
}
if (computerMove == "nożyce" && playerMove == "kamień") {
    printMessage("Wygrałeś!");
}