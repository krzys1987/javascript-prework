/* General */
console.log("NoughtAndCrosses");
console.log("computerMove");
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);



/*computerMove */

/* pojawil się problem z poniższą deklaracją, spróbuję ją zakomentować
let computerMove = getMoveName(randomNumber); */

let computerMove = "nieznanyRuch";
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

printMessage("Komputer losuje: " + computerMove);

/*playerMove */

console.log("NoughtAndCrosses");
console.log("playerMove");

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

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

printMessage("Mój wynik, to: " + playerMove);

/* Results evaluation */

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