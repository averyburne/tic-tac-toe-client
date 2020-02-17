'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#sign-in-message').text(response.user.email + ' Successfully signed up')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('success')
  $('#sign-up').trigger('reset')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
}

const onSignUpFailure = function (response) {
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('failure')
  $('#sign-in-message').text('Failed to sign up')
}

const onSignInSuccess = function (response) {
  $('#sign-in-message').text(response.user.email + ' Successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('success')
  $('.change-password').show()
  $('#sign-out').show()
  $('#game-form').show()
  $('.start').show()
  $('.stats').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.total-game-message').text('')
  // $('.row').show()
  $('.bottom-section').show()
  setTimeout(function () {
    console.log('hello')
    $('#sign-in-message').text('').removeClass('failure')
  }, 3000)
}

const onSignInFailure = function (response) {
  $('#sign-in-message').text('Failed to sign in')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('failure')
}

const onChangePasswordSuccess = function (response) {
  $('#sign-in-message').text('Successfully changed password')
  // $('#sign-up').trigger('reset')
  $('.change-password').trigger('reset')
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
}

const onChangePasswordFailure = function (response) {
  $('#sign-in-message').text('Failed to change password')
}

const onSignOutSuccess = function (response) {
  $('#sign-in-message').text('Successfully signed out')
  $('.change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('.row').hide()
  $('.stats').hide()
  $('.bottom-section').hide()
  $('.board-messages').hide()
  $('.turn-message').hide()
  setTimeout(() => {
    $('#sign-in-message').text('').removeClass('success')
  }, 3000)
  store.user = null
}

const onSignOutFailure = function (response) {
  $('#sign-in-message').text('Failed to sign out')
}

const onGetGamesSuccess = function (response) {
  $('.total-game-message').text(response.games.length + ' total game(s) played')
  store.id = response.games.length
  store.game = response.games[store.id - 1]
}

const onGetGamesFailure = function (response) {
  ('.total-game-message').text("Couldn't get games")
}

const onCreateGameSuccess = function (response) {
  store.game = response.game
  $('.start').hide()
  $('.row').show()
}

const onCreateGameFailure = function (response) {
  store.game = response.game
  $('#message').text("Couldn't bring up the game board")
}

const onUpdateBoard = function (response) {
  // const box = event.target
  // response.games[response.games.length - 1].cells[box.val()] = 'x'
}

// const showPassword = function () {
//   $('#change-password').show()
// }

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
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateBoard
}
