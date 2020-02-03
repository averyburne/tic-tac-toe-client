'use strict'

const store = require('./../store')
// const gameLogic = require('../game-logic')

const onSignUpSuccess = function (response) {
  console.log(response)
  $('#message').text(response.user.email + ' Successfully signed up')
  // $('#message').removeClass()
  // $('#message').addClass('success-message')
  $('#change-password').show()
  $('#sign-out').show()
  $('#game-form').show()
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (response) {
  console.log(response)
  // $('#message').removeClass()
  // $('#message').addClass('failure-message')
  $('#message').text('Failed to sign up')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' Successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
  console.log(store.user)
  $('#change-password').show()
  $('#sign-out').show()
  $('#game-form').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const onSignInFailure = function (response) {
  $('#message').text('Failed to sign in')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Successfully changed password')
  $('#sign-up').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Failed to change password')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Successfully signed out')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  store.user = null
}

const onSignOutFailure = function (response) {
  $('#message').text('Failed to sign out')
}

const onGetGamesSuccess = function (response) {
  // ('#turn-message').text("Here's the games")
  $('.turn-message').text(response.games.length)
  store.id = response.games.length
  store.game = response.games[store.id - 1]
  console.log(store.game.id)
  console.log(response.games[store.id - 1])
}

const onGetGamesFailure = function (response) {
  ('.turn-message').text("Couldn't get games")
  console.log(response)
}

const onUpdateBoard = function (response) {
  // const box = event.target
  // response.games[response.games.length - 1].cells[box.val()] = 'x'
  console.log(response)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onGetGamesSuccess,
  onGetGamesFailure,
  onUpdateBoard
}
