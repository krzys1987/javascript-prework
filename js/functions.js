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


function displayResult(computerMove, playerMove) {
	printMessage("Komputer losuje"+computerMove,+"a ja"+playerMove );
	console.log("Wylosowane ruchy to:", computerMove, playerMove);
		if (computerMove == playerMove) {
			printMessage("Remis");
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
		if (playerMove != 1, 2, 3){ /*if it is not valid number 1-3
			printMessage("Losuj ponownie");
		} */
		if (playerMove = "nieznanyRuch") {
			printMessage("Losuj ponownie");
		}
	}