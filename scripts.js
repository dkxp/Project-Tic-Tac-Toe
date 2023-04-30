const gameboardObj = (() => {
  const gameBoardSymbolsArray = [];
  let currentPlayer = 'X';

  function resetBoardStatusToNew() {
    currentPlayer = 'X';
    for (let i = 0; i < 9; i++) {
      gameBoardSymbolsArray[i] = '';
      document.getElementById(`${i}`).innerHTML = '';
      document.getElementById(`${i}`).classList.remove('bolt');
      document.getElementById(`${i}`).classList.remove('heart');
      document.getElementById('gameStatusDisplay').innerHTML =
        '<strong>Player 1</strong>, make your move';
    }
    newGameAddEventListenersToBoxClick();
  }
  function newGameAddEventListenersToBoxClick() {
    for (let i = 0; i < 9; i++) {
      document
        .getElementById(`${i}`)
        .addEventListener('click', boxClickEvents);
    }
  }
  function boxClickEvents(event) {
    // eslint-disable-next-line no-unused-expressions
    currentPlayer === 'X'
      ? markBoxAsBolt(event.target)
      : markBoxAsHeart(event.target);
    switchCurrentPlayer();
    updateGameStatusDisplayWithPlayerTurn();
    checkIfWinnerOnClick();
  }
  function markBoxAsBolt(boxElement) {
    boxElement.innerHTML =
      '<i class="material-icons" id="bolt">bolt</i>';
    boxElement.classList.add('bolt');
    removeEventListenersFromBoxOnClick(boxElement);
    gameBoardSymbolsArray[parseInt(boxElement.getAttribute('id'))] =
      'X';
  }
  function markBoxAsHeart(boxElement) {
    boxElement.innerHTML =
      '<i class="material-icons" id="heart">favorite</i>';
    boxElement.classList.add('heart');
    removeEventListenersFromBoxOnClick(boxElement);
    gameBoardSymbolsArray[parseInt(boxElement.getAttribute('id'))] =
      'O';
  }
  function removeEventListenersFromBoxOnClick(boxElement) {
    boxElement.removeEventListener('click', boxClickEvents);
  }
  function switchCurrentPlayer() {
    currentPlayer === 'X'
      ? (currentPlayer = 'O')
      : (currentPlayer = 'X');
  }
  function updateGameStatusDisplayWithPlayerTurn() {
    currentPlayer === 'X'
      ? (document.getElementById('gameStatusDisplay').innerHTML =
          '<strong>Player 1</strong>, make your move')
      : (document.getElementById('gameStatusDisplay').innerHTML =
          '<strong>Player 2</strong>, make your move');
  }
  function deactivateEventListenersFromBoxOnGameEnd() {
    for (let i = 0; i < 9; i++) {
      removeEventListenersFromBoxOnClick(
        document.getElementById(`${i}`)
      );
    }
  }

  function checkIfWinnerOnClick() {
    if (
      (gameBoardSymbolsArray[0] === 'X' &&
        gameBoardSymbolsArray[3] === 'X' &&
        gameBoardSymbolsArray[6] === 'X') ||
      (gameBoardSymbolsArray[1] === 'X' &&
        gameBoardSymbolsArray[4] === 'X' &&
        gameBoardSymbolsArray[7] === 'X') ||
      (gameBoardSymbolsArray[2] === 'X' &&
        gameBoardSymbolsArray[5] === 'X' &&
        gameBoardSymbolsArray[8] === 'X')
    ) {
      document.getElementById('gameStatusDisplay').innerHTML =
        '<strong>Player 1 wins!</strong>';
      deactivateEventListenersFromBoxOnGameEnd();
      return;
    }
    if (
      (gameBoardSymbolsArray[0] === 'X' &&
        gameBoardSymbolsArray[1] === 'X' &&
        gameBoardSymbolsArray[2] === 'X') ||
      (gameBoardSymbolsArray[3] === 'X' &&
        gameBoardSymbolsArray[4] === 'X' &&
        gameBoardSymbolsArray[5] === 'X') ||
      (gameBoardSymbolsArray[6] === 'X' &&
        gameBoardSymbolsArray[7] === 'X' &&
        gameBoardSymbolsArray[8] === 'X')
    ) {
      document.getElementById('gameStatusDisplay').innerHTML =
        '<strong>Player 1 wins!</strong>';
      deactivateEventListenersFromBoxOnGameEnd();
      return;
    }
    if (
      (gameBoardSymbolsArray[0] === 'X' &&
        gameBoardSymbolsArray[4] === 'X' &&
        gameBoardSymbolsArray[8] === 'X') ||
      (gameBoardSymbolsArray[2] === 'X' &&
        gameBoardSymbolsArray[4] === 'X' &&
        gameBoardSymbolsArray[6] === 'X')
    ) {
      document.getElementById('gameStatusDisplay').innerHTML =
        '<strong>Player 1 wins!</strong>';
      deactivateEventListenersFromBoxOnGameEnd();
      return;
    }
    if (
      (gameBoardSymbolsArray[0] === 'O' &&
        gameBoardSymbolsArray[3] === 'O' &&
        gameBoardSymbolsArray[6] === 'O') ||
      (gameBoardSymbolsArray[1] === 'O' &&
        gameBoardSymbolsArray[4] === 'O' &&
        gameBoardSymbolsArray[7] === 'O') ||
      (gameBoardSymbolsArray[2] === 'O' &&
        gameBoardSymbolsArray[5] === 'O' &&
        gameBoardSymbolsArray[8] === 'O')
    ) {
      document.getElementById('gameStatusDisplay').innerHTML =
        '<strong>Player 2 wins!</strong>';
      deactivateEventListenersFromBoxOnGameEnd();
      return;
    }
    if (
      (gameBoardSymbolsArray[0] === 'O' &&
        gameBoardSymbolsArray[1] === 'O' &&
        gameBoardSymbolsArray[2] === 'O') ||
      (gameBoardSymbolsArray[3] === 'O' &&
        gameBoardSymbolsArray[4] === 'O' &&
        gameBoardSymbolsArray[5] === 'O') ||
      (gameBoardSymbolsArray[6] === 'O' &&
        gameBoardSymbolsArray[7] === 'O' &&
        gameBoardSymbolsArray[8] === 'O')
    ) {
      document.getElementById('gameStatusDisplay').innerHTML =
        '<strong>Player 2 wins!</strong>';
      deactivateEventListenersFromBoxOnGameEnd();
      return;
    }
    if (
      (gameBoardSymbolsArray[0] === 'O' &&
        gameBoardSymbolsArray[4] === 'O' &&
        gameBoardSymbolsArray[8] === 'O') ||
      (gameBoardSymbolsArray[2] === 'O' &&
        gameBoardSymbolsArray[4] === 'O' &&
        gameBoardSymbolsArray[6] === 'O')
    ) {
      document.getElementById('gameStatusDisplay').innerHTML =
        '<strong>Player 2 wins!</strong>';
      deactivateEventListenersFromBoxOnGameEnd();
      return;
    }
    if (!gameBoardSymbolsArray.includes('')) {
      deactivateEventListenersFromBoxOnGameEnd();
      document.getElementById('gameStatusDisplay').innerHTML =
        '<strong>Tie game!</strong>';
    }
  }
  return {
    gameBoardArray: gameBoardSymbolsArray,
    newGameBoard: resetBoardStatusToNew,
    addNewGameBoxClickEvent: newGameAddEventListenersToBoxClick,
  };
})();

gameboardObj.newGameBoard();
