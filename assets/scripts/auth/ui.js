'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('.sign-in-message').text(response.user.email + ' Successfully signed up')
  $('.sign-in-message').removeClass()
  $('.sign-in-message').addClass('success')
  // $('.change-password').show()
  // $('#sign-out').show()
  // $('#game-form').show()
  $('#sign-up').trigger('reset')
  // $('.row').show()
  $('.turn-message').show()
  $('.bottom-section').show()
  setTimeout(() => {
    $('.sign-in-message').text('').removeClass('success')
  }, 3000)
}

const onSignUpFailure = function (response) {
  $('.sign-in-message').removeClass()
  $('.sign-in-message').addClass('failure')
  $('.sign-in-message').text('Failed to sign up')
}

const onSignInSuccess = function (response) {
  $('.sign-in-message').text(response.user.email + ' Successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('.sign-in-message').removeClass()
  $('.sign-in-message').addClass('success')
  $('.change-password').show()
  $('#sign-out').show()
  $('#game-form').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  // $('.row').show()
  $('.turn-message').show()
  $('.bottom-section').show()
  setTimeout(() => {
    $('.sign-in-message').text('').removeClass('failure')
  }, 3000)
}

const onSignInFailure = function (response) {
  $('.sign-in-message').text('Failed to sign in')
  $('.sign-in-message').removeClass()
  $('.sign-in-message').addClass('failure')
}

const onChangePasswordSuccess = function (response) {
  $('.sign-in-message').text('Successfully changed password')
  $('#sign-up').trigger('reset')
  $('.change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('.sign-in-message').text('Failed to change password')
}

const onSignOutSuccess = function (response) {
  $('.sign-in-message').text('Successfully signed out')
  $('.change-password').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  // $('.x-win').text("X's total wins: 0")
  // $('.o-win').text("O's total wins: 0")
  // $('.total-draws').text('Total draws: 0')
  // gameLogic.xTotalWin = 0
  // gameLogic.oTotalWin = 0
  // gameLogic.totalDraws = 0

  store.user = null
}

const onSignOutFailure = function (response) {
  $('.sign-in-message').text('Failed to sign out')
}

const onGetGamesSuccess = function (response) {
  // ('#turn-message').text("Here's the games")
  $('.total-game-message').text('Total games played is ' + response.games.length)
  store.id = response.games.length
  store.game = response.games[store.id - 1]
}

const onGetGamesFailure = function (response) {
  ('.total-game-message').text("Couldn't get games")
}

const onCreateGameSuccess = function (response) {
  store.game = response.game
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
