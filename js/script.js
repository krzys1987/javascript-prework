/* General */
console.log("NoughtAndCrosses");
console.log("computerMove");
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

/*computerMove */

let computerMove = getMoveName(randomNumber);
let computerMove = "nieznanyRuch";
/*if(randomNumber == 1) {
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


/* argMoveId - przydałoby się to określić, ale jest przecież jako funkcja,
to poniższy kod niepotrzebny */

/*

/*


if(randomNumber == 1){
    printMessage("Mój ruch to kamień");
    ComputerMove == "kamień";
    if else(randomNumber ==2){
        printMessage("Mój ruch to papier")
        ComputerMove = "papier";
        if else(randomNumber == 3){
            printMessage("Mój ruch to nożyce");
            ComputerMove == "nożyce";
            else {
                printMessage("NieznanyRuch")
            }
        }
    }
}
*/



printMessage("Komputer losuje: " + computerMove);

/*playerMove */

console.log("NoughtAndCrosses");
console.log("playerMove");

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = "nieznanyRuch";

if (playerMove == "1") {
    printMessage("Mój ruch nr 3");
    playerMove = "nożyce";
} else if (randomNumber == 2) {
    playerMove = "papier";
    printMessage("Mój ruch nr 2");
} else if (randomNumber == 3) {
    playerMove = "kamień";
    printMessage("Mój wynik o ruch nr 1");
} else {
    playerMove = "nieznanyRuch";
    printMessage("Losuj ponownie");
}


printMessage("Mój wynik, to: " + playerMove);

/* Results evaluation */

if (computerMove == "papier" && playerMove == "papier") {
    printMessage("Remis!");
}
if (computerMove == "kamień" && playerMove == "kamień") {
    printMessage("Remis!");
}
if (computerMove == "nożyce" && playerMove == "nożyce") {
    printMessage("Remis!");
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