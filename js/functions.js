	function printMessage(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}
	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}

	function updateResults(gamesArgs, computerWinsArg, playerWinsArg) {
		const games = document.querySelector(".games");
		games.innerHTML = gamesArgs;

		const computerWins = document.querySelector(".computer-wins");
		computerWins.innerHTML = computerWinsArg;
		games.innerHTML = gamesArgs;

		const playerWins = document.querySelector(".player-wins");
		playerWins.innerHTML = playerWinsArg;
	}