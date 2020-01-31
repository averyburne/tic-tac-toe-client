'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./auth/events')
// const ui = require('./auth/ui')
const gameLogic = require('./game-logic.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('.box').on('click', gameLogic.updateBoard)
  // $('.box').on('click', events.updateBoard)
  $('.box').on('click', gameLogic.checkWinner)
  $('.new-game').on('click', gameLogic.newGame)
})
