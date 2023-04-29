const gameboardObj = (() => {
    let gameBoardArray = [];
    function newGameBoard () {
        for (let i = 0; i < 9; i++) {
            gameBoardArray[i] = '';
            document.getElementById(`${i}`).innerHTML = '';
            document.getElementById(`${i}`).classList.remove('bolt');
            document.getElementById(`${i}`).classList.remove('heart');
            document.getElementById('gameStatusDisplay').innerHTML = '<strong>Player 1</strong>, make your move';
        }
        addNewGameBoxClickEvent();
    }
    function addNewGameBoxClickEvent() {
        let currentPlayer = 'X';
        function markXO() {
            if (currentPlayer === 'X') {
                currentPlayer = '0';
                this.innerHTML = '<i class="material-icons" id="bolt">bolt</i>';
                this.classList.add('bolt');
                this.removeEventListener('click', markXO);
                gameBoardArray[parseInt(this.getAttribute('id'))] = 'X';
                document.getElementById('gameStatusDisplay').innerHTML = '<strong>Player 2</strong>, make your move'
            } else {
                currentPlayer = 'X';
                this.innerHTML = '<i class="material-icons" id="heart">favorite</i>';
                this.classList.add('heart');
                this.removeEventListener('click', markXO);
                gameBoardArray[parseInt(this.getAttribute('id'))] = 'O';
                document.getElementById('gameStatusDisplay').innerHTML = '<strong>Player 1</strong>, make your move'
            }
            checkWinner(markXO);
        }
        for (let i = 0; i < 9; i++) {
            document.getElementById(`${i}`).addEventListener('click', markXO);
        }
    }
    function checkWinner(parameter) {
        for (let i = 0; i < 9; i++) {
            document.getElementById(`${i}`).addEventListener('click', checkWinner)
        }
        function deactivateEventListenersOnGameEnd(parameter) {
            for (let i = 0; i < 9; i++) {
                document.getElementById(`${i}`).removeEventListener('click', checkWinner);
                document.getElementById(`${i}`).removeEventListener('click', parameter);
            };
        }
        if ((gameBoardArray[0] === 'X' && gameBoardArray[3] === 'X' && gameBoardArray[6] === 'X') || 
            (gameBoardArray[1] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[7] === 'X') || 
            (gameBoardArray[2] === 'X' && gameBoardArray[5] === 'X' && gameBoardArray[8] === 'X')) {
            document.getElementById('gameStatusDisplay').innerHTML = '<strong>Player 1 wins!</strong>'
            deactivateEventListenersOnGameEnd(parameter);
            return;
        }
        if ((gameBoardArray[0] === 'X' && gameBoardArray[1] === 'X' && gameBoardArray[2] === 'X') || 
            (gameBoardArray[3] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[5] === 'X') || 
            (gameBoardArray[6] === 'X' && gameBoardArray[7] === 'X' && gameBoardArray[8] === 'X')) {
            document.getElementById('gameStatusDisplay').innerHTML = '<strong>Player 1 wins!</strong>'
            deactivateEventListenersOnGameEnd(parameter);
            return;
        }
        if ((gameBoardArray[0] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[8] === 'X') || 
            (gameBoardArray[2] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[6] === 'X')) {
            document.getElementById('gameStatusDisplay').innerHTML = '<strong>Player 1 wins!</strong>'
            deactivateEventListenersOnGameEnd(parameter);
            return;
        }
        if ((gameBoardArray[0] === 'O' && gameBoardArray[3] === 'O' && gameBoardArray[6] === 'O') || 
            (gameBoardArray[1] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[7] === 'O') || 
            (gameBoardArray[2] === 'O' && gameBoardArray[5] === 'O' && gameBoardArray[8] === 'O')) {
            document.getElementById('gameStatusDisplay').innerHTML = '<strong>Player 2 wins!</strong>'
            deactivateEventListenersOnGameEnd(parameter);
            return;
        }
        if ((gameBoardArray[0] === 'O' && gameBoardArray[1] === 'O' && gameBoardArray[2] === 'O') || 
            (gameBoardArray[3] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[5] === 'O') || 
            (gameBoardArray[6] === 'O' && gameBoardArray[7] === 'O' && gameBoardArray[8] === 'O')) {
            document.getElementById('gameStatusDisplay').innerHTML = '<strong>Player 2 wins!</strong>'
            deactivateEventListenersOnGameEnd(parameter);
            return;
        }
        if ((gameBoardArray[0] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[8] === 'O') || 
            (gameBoardArray[2] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[6] === 'O')) {
            document.getElementById('gameStatusDisplay').innerHTML = '<strong>Player 2 wins!</strong>'
            deactivateEventListenersOnGameEnd(parameter);
            return;
        }
        if (!gameBoardArray.includes('')){
            deactivateEventListenersOnGameEnd(parameter);
            document.getElementById('gameStatusDisplay').innerHTML = '<strong>Tie game!</strong>'
        }
    }
    return {gameBoardArray, newGameBoard, addNewGameBoxClickEvent};
})();

gameboardObj.newGameBoard();


