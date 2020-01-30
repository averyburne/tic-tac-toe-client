'use strict'

const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const checkWinner = function () {
  if (($('#square0').text() === 'X' && $('#square1').text() === 'X' && $('#square2').text() === 'X') || (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') || (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') || (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') || (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') || (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') || (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') || (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
    $('#winning-message').text('X won!')
    console.log('winner winner chicken dinner')
  }
}

module.exports = {
  gameBoard,
  checkWinner
}
