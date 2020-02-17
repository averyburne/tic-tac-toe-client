'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./auth/events')
const gameLogic = require('./game-logic.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.change-password').hide()
  $('#sign-out').hide()
  $('.row').hide()
  $('.turn-message').hide()
  $('.bottom-section').hide()
  $('.start').hide()
  $('.stats').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('.change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('.box').on('click', events.onUpdateGame)
  $('.box').on('click', gameLogic.updateBoard)
  $('.new-game').on('click', gameLogic.newGame)
  $('#game-form').on('submit', events.onGetGames)
})
