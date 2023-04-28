const gameboardObj = (() => {
    let gameBoardArray = [];
    function newGameBoard () {
        for (let i = 0; i < 9; i++) {
            gameBoardArray[i] = '';
            document.getElementById(`${i}`).textContent = '';
        }
        addNewGameBoxClickEvent();
    }

    function addNewGameBoxClickEvent() {
        let currentPlayer = 'X';
        function markXO() {
            if (currentPlayer === 'X') {
                currentPlayer = '0';
                this.textContent = 'X';
                this.removeEventListener('click', markXO);
                gameBoardArray[parseInt(this.getAttribute('id'))] = 'X';
            } else {
                currentPlayer = 'X';
                this.textContent = 'O';
                this.removeEventListener('click', markXO);
                gameBoardArray[parseInt(this.getAttribute('id'))] = 'O';
            }
            checkWinner(markXO);
        }
        for (let i = 0; i < 9; i++) {
            document.getElementById(`${i}`).addEventListener('click', markXO)
        }
    }

    function checkWinner(parameter) {
        for (let i = 0; i < 9; i++) {
            document.getElementById(`${i}`).addEventListener('click', checkWinner)
        }
        function makeClicksInactiveOnGameEnd(parameter) {
            for (let i = 0; i < 9; i++) {
                document.getElementById(`${i}`).removeEventListener('click', checkWinner);
                document.getElementById(`${i}`).removeEventListener('click', parameter);
            };
        }
        //Vertical X Win Conditions
        if ((gameBoardArray[0] === 'X' && gameBoardArray[3] === 'X' && gameBoardArray[6] === 'X') || 
            (gameBoardArray[1] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[7] === 'X') || 
            (gameBoardArray[2] === 'X' && gameBoardArray[5] === 'X' && gameBoardArray[8] === 'X')) {
            alert('X wins!');
            makeClicksInactiveOnGameEnd(parameter);
            return;
        }
        //Horizontal X Win Conditions
        if ((gameBoardArray[0] === 'X' && gameBoardArray[1] === 'X' && gameBoardArray[2] === 'X') || 
            (gameBoardArray[3] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[5] === 'X') || 
            (gameBoardArray[6] === 'X' && gameBoardArray[7] === 'X' && gameBoardArray[8] === 'X')) {
            alert('X wins!');
            makeClicksInactiveOnGameEnd(parameter);
            return;
        }
        //Diagonal X Win Conditions
        if ((gameBoardArray[0] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[8] === 'X') || 
            (gameBoardArray[2] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[6] === 'X')) {
            alert('X wins!');
            makeClicksInactiveOnGameEnd(parameter);
            return;
        }
        //Vertical O Win Conditions
        if ((gameBoardArray[0] === 'O' && gameBoardArray[3] === 'O' && gameBoardArray[6] === 'O') || 
            (gameBoardArray[1] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[7] === 'O') || 
            (gameBoardArray[2] === 'O' && gameBoardArray[5] === 'O' && gameBoardArray[8] === 'O')) {
            alert('O wins!');
            makeClicksInactiveOnGameEnd(parameter);
            return;
        }
        //Horizontal O Win Conditions
        if ((gameBoardArray[0] === 'O' && gameBoardArray[1] === 'O' && gameBoardArray[2] === 'O') || 
            (gameBoardArray[3] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[5] === 'O') || 
            (gameBoardArray[6] === 'O' && gameBoardArray[7] === 'O' && gameBoardArray[8] === 'O')) {
            alert('O wins!');
            makeClicksInactiveOnGameEnd(parameter);
            return;
        }
        //Diagonal O Win Conditions
        if ((gameBoardArray[0] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[8] === 'O') || 
            (gameBoardArray[2] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[6] === 'O')) {
            alert('O wins!');
            makeClicksInactiveOnGameEnd(parameter);
            return;
        }
        //Draw
        if (!gameBoardArray.includes('')){
            makeClicksInactiveOnGameEnd(parameter);
            alert('Draw!')
        }
    }

    return {gameBoardArray, newGameBoard, addNewGameBoxClickEvent, checkWinner};
})();

const playerFactory = (name) => {
    return {name};
};

/* const gameFlow = (() => {
    
}) */

gameboardObj.newGameBoard();
/* gameboardObj.checkWinner(); */

