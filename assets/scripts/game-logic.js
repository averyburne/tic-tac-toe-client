'use strict'

// const ui = require('./auth/ui')
const store = require('./store')
const api = require('./auth/api')

// const gameBoard = [$('#square0'), $('#square1'), $('#square2'), $('#square3'), $('#square4'), $('#square5'), $('#square6'), $('#square7'), $('#square8')]

// initialize and empty array
let emptyBoard = []

let xTotalWin = 0
let oTotalWin = 0
let totalDraws = 0

const checkWinner = function () {
  // added conditional that this should not run if the game
  // has already been determined
  if ($('.winning-message').text() !== 'X won!' || $('.winning-message').text() !== 'O won!' || $('.winning-message').text() !== "It's a draw") {
  // function checks to see if any of the 8 combos for X are met
    if (($('#square0').text() === 'X' && $('#square1').text() === 'X' && $('#square2').text() === 'X') || ($('#square3').text() === 'X' && $('#square4').text() === 'X' && $('#square5').text() === 'X') || ($('#square6').text() === 'X' && $('#square7').text() === 'X' && $('#square8').text() === 'X') || ($('#square0').text() === 'X' && $('#square3').text() === 'X' && $('#square6').text() === 'X') || ($('#square1').text() === 'X' && $('#square4').text() === 'X' && $('#square7').text() === 'X') || ($('#square2').text() === 'X' && $('#square5').text() === 'X' && $('#square8').text() === 'X') || ($('#square0').text() === 'X' && $('#square4').text() === 'X' && $('#square8').text() === 'X') || ($('#square2').text() === 'X' && $('#square4').text() === 'X' && $('#square6').text() === 'X')) {
      // if met it will tell the use the x won
      $('#winning-message').text('X won!')
      // reverts the orginal message back to nothing
      $('#message').text('')
      // removes turn message
      $('.turn-message').text('')
      // adds win to X's total
      xTotalWin++
      // changes total wins on html page
      $('.x-win').text("X's total wins: " + xTotalWin)
      store.xGamesWon++
      // Adds game to the api
      api.createGame()
      // returns true so the updateBoard function knows to stop running
      return true
      // function checks to see if any of the 8 combos for O are met
    } else if (($('#square0').text() === 'O' && $('#square1').text() === 'O' && $('#square2').text() === 'O') || ($('#square3').text() === 'O' && $('#square4').text() === 'O' && $('#square5').text() === 'O') || ($('#square6').text() === 'O' && $('#square7').text() === 'O' && $('#square8').text() === 'O') || ($('#square0').text() === 'O' && $('#square3').text() === 'O' && $('#square6').text() === 'O') || ($('#square1').text() === 'O' && $('#square4').text() === 'O' && $('#square7').text() === 'O') || ($('#square2').text() === 'O' && $('#square5').text() === 'O' && $('#square8').text() === 'O') || ($('#square0').text() === 'O' && $('#square4').text() === 'O' && $('#square8').text() === 'O') || ($('#square2').text() === 'O' && $('#square4').text() === 'O' && $('#square6').text() === 'O')) {
      $('#winning-message').text('O won!')
      $('#message').text('')
      // removes turn message
      $('.turn-message').text('')
      // adds win to O's total
      oTotalWin++
      // changes total wins on html page
      $('.o-win').text("O's total wins: " + oTotalWin)
      store.xGamesWon++
      // Adds game to the api
      api.createGame()
      // returns true so the updateBoard function knows to stop running
      return true
    } else if (emptyBoard.length >= 9) {
      // if the board is full and no one won, it tells the user it was a draw
      $('#winning-message').text("It's a draw")
      $('#message').text('')
      // removes turn message
      $('.turn-message').text('')
      // adds draw to draw total
      totalDraws++
      // changes total draws on html page
      $('.total-draws').text('Total draws: ' + totalDraws)
      // Adds game to the api
      api.createGame()
      return true
    } else {
      return false
    }
  }
}

const whoseTurn = function () {
  if (emptyBoard.length % 2 !== 0) {
    return 'O'
  } else if (emptyBoard.length % 2 === 0) {
    return 'X'
  }
}

const updateBoard = function (event) {
  const box = event.target
  if (checkWinner() === false) {
    if ($(box).text() === 'X' || $(box).text() === 'O') {
      $('#message').text('Hey that is not allowed')
    } else if (whoseTurn() === 'X') {
      $('.turn-message').text("It's O's turn")
      $(box).text('X')
      $('#message').text('you placed an x')
      emptyBoard.push('x')
      checkWinner()
    } else if (whoseTurn() === 'O') {
      $('.turn-message').text("It's X's turn")
      $(box).text('O')
      $('#message').text('you placed an o')
      emptyBoard.push('x')
      checkWinner()
    }
  } else if (checkWinner() === true) {
    $('#message').text('The game is over chief')
  }
}

const newGame = function () {
  $('.box').text('')
  $('#winning-message').text('')
  $('.turn-message').text("It's X's turn")
  emptyBoard = []
  store.numGames += 1
}

const getGames = function () {
  $('.turn-message').text('Total Games: ' + store.numGames + ', Games won by X: ' + store.xGamesWon + ', Games won by O: ' + store.oGamesWon + ', total draws: ' + store.drawGames)
}

module.exports = {
  checkWinner,
  updateBoard,
  newGame,
  getGames
}
