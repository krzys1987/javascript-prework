/* General */

/* Functions */

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

/*ponizsze zadeklarowałem w scripts.js, ale kiedy tam usunąłem oznaczenia 1-3,
to cały czas miałem nieznanyRuch */
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
		printMessage("Nie wiem, co znaczy +moveId ");
		return "nieznanyRuch";
	}

}
function displayResult(computerMove, playerMove) {
	printMessage("Zagrałem" + computerMove + ", a Ty" + playerMove);
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
		if (playerMove != 1, 2, 3){ /*if it is not valid number 1-3 */
			printMessage("Losuj ponownie");
		}
		if (playerMove = "nieznanyRuch") {
			printMessage("Losuj ponownie");
		}
}