'use strict'

// const ui = require('./auth/ui')
const store = require('./store')
const api = require('./auth/api')
const events = require('./auth/events')

// initialize an empty array to be used in whoseTurn() and updateBoard()
let emptyBoard = []

// initialized game stats
let xTotalWin = 0
let oTotalWin = 0
let totalDraws = 0
let gameStatus = 'in progress'

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
      // update call to apiUrl
      const data = {
        'game': {
          'over': false
        }
      }
      api.updateGame(data)
      api.getGame()

      // api.createGame()
      // returns true so the updateBoard function knows to stop running
      gameStatus = 'done'
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
      // update call to apiUrl
      const data = {
        'game': {
          'over': true
        }
      }
      api.updateGame(data)
      api.getGame()

      gameStatus = 'done'
    } else if (emptyBoard.length >= 9) {
      // if the board is full and no one won, it tells the user it was a draw
      $('#winning-message').text("It's a draw ¯|_(ツ)_/¯")
      $('#message').text('')
      // removes turn message
      $('.turn-message').text('')
      // adds draw to draw total
      totalDraws++
      // changes total draws on html page
      $('.total-draws').text('Total draws: ' + totalDraws)
      // Adds game to the api
      const data = {
        'game': {
          'over': true
        }
      }
      api.updateGame(data)
      api.getGame()
      gameStatus = 'done'
    } else {
      gameStatus = 'in progress'
    }
  }
}

const whoseTurn = function () {
  // determines whose turn it is by the number of items in an array
  // one item gets added everytime an X or O is added to the board
  // odd number means its O's turn, even is X's turn
  if (emptyBoard.length % 2 !== 0) {
    return 'O'
  } else if (emptyBoard.length % 2 === 0) {
    return 'X'
  }
}

const updateBoard = function (event) {
  const box = event.target
  const boxNum = event.target.getAttribute('value')
  // if game is still being played according to checkWinner
  // then update the board as needed
  if (gameStatus === 'in progress') {
    // prevents user from adding spaces to spots already containing x or o
    if ($(box).text() === 'X' || $(box).text() === 'O') {
      $('#message').text('Hey that is not allowed!')
      // if whoseTurn returns X
    } else if (whoseTurn() === 'X') {
      // add messaging for whose turn, what was placed, and update board text
      // $('.turn-message').text("It's O's turn")
      $(box).text('X')
      $('#message').text("It's O's turn")
      // add item to empty array to determine whose turn it is
      emptyBoard.push('x')
      // update game api with cell position
      const data = {
        'game': {
          'cell': {
            'index': boxNum,
            'value': 'x'
          },
          'over': false
        }
      }

      api.updateGame(data)
      api.getGame()

      // call check winner to see if it was a winning move
      checkWinner()
      // if whoseTurn returns o
    } else if (whoseTurn() === 'O') {
      // add messaging for whose turn, what was placed, and update board text
      // $('.turn-message').text("It's X's turn")
      $(box).text('O')
      $('#message').text("It's X's turn")
      // add item to empty array to determine whose turn it is
      emptyBoard.push('x')
      // update game api with cell position
      const data = {
        'game': {
          'cell': {
            'index': boxNum,
            'value': 'o'
          },
          'over': false
        }
      }
      api.updateGame(data)
      api.getGame()
      // call check winner to see if it was a winning move
      checkWinner()
    }
    // if game is over then no updating the board
  } else if (gameStatus === 'done') {
    $('#message').text('The game is over chief')
  }
}

// function to restart the board
const newGame = function () {
  $('.box').text('')
  $('#winning-message').text('')
  $('#message').text("It's X's turn")
  emptyBoard = []
  events.onCreateGame()
  gameStatus = 'in progress'
  // $('.total-game-message').text('')
  // checkWinner()
}

module.exports = {
  checkWinner,
  updateBoard,
  newGame
}
