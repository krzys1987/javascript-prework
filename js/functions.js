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
		return "nieznany Ruch";
	}

}

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






/*
function nameTurn {
	if(computerMove OR playerMove = 1);
		return "kamień";
}
*/