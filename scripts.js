const gameboardObj = (() => {
  const gameBoardSymbolsArray = [];
  let currentPlayer = 'Bolt';

  function resetBoardStatusToNew() {
    currentPlayer = 'Bolt';
    for (let i = 0; i < 9; i++) {
      gameBoardSymbolsArray[i] = '';
      document.getElementById(`${i}`).innerHTML = '';
      document.getElementById(`${i}`).classList.remove('bolt');
      document.getElementById(`${i}`).classList.remove('heart');
      document.getElementById('gameStatusDisplay').innerHTML =
        '<strong>Bolt</strong>, make your move';
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
    currentPlayer === 'Bolt'
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
      'Bolt';
  }
  function markBoxAsHeart(boxElement) {
    boxElement.innerHTML =
      '<i class="material-icons" id="heart">favorite</i>';
    boxElement.classList.add('heart');
    removeEventListenersFromBoxOnClick(boxElement);
    gameBoardSymbolsArray[parseInt(boxElement.getAttribute('id'))] =
      'Heart';
  }
  function removeEventListenersFromBoxOnClick(boxElement) {
    boxElement.removeEventListener('click', boxClickEvents);
  }
  function switchCurrentPlayer() {
    currentPlayer === 'Bolt'
      ? (currentPlayer = 'Heart')
      : (currentPlayer = 'Bolt');
  }
  function updateGameStatusDisplayWithPlayerTurn() {
    currentPlayer === 'Bolt'
      ? (document.getElementById('gameStatusDisplay').innerHTML =
          '<strong>Bolt</strong>, make your move')
      : (document.getElementById('gameStatusDisplay').innerHTML =
          '<strong>Heart</strong>, make your move');
  }
  function deactivateEventListenersFromBoxOnGameEnd() {
    for (let i = 0; i < 9; i++) {
      removeEventListenersFromBoxOnClick(
        document.getElementById(`${i}`)
      );
    }
  }

  function checkIfWinnerOnClick() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        gameBoardSymbolsArray[a] &&
        gameBoardSymbolsArray[a] === gameBoardSymbolsArray[b] &&
        gameBoardSymbolsArray[a] === gameBoardSymbolsArray[c]
      ) {
        document.getElementById(
          'gameStatusDisplay'
        ).innerHTML = `<strong>${gameBoardSymbolsArray[a]} wins!</strong>`;
        deactivateEventListenersFromBoxOnGameEnd();
        return;
      }
    }

    if (!gameBoardSymbolsArray.includes('')) {
      document.getElementById('gameStatusDisplay').innerHTML =
        "<strong>It's a draw!</strong>";
      deactivateEventListenersFromBoxOnGameEnd();
      return;
    }
  }
  return {
    gameBoardArray: gameBoardSymbolsArray,
    newGameBoard: resetBoardStatusToNew,
    addNewGameBoxClickEvent: newGameAddEventListenersToBoxClick,
  };
})();

gameboardObj.newGameBoard();
