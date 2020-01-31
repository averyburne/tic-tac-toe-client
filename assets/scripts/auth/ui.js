'use strict'

const store = require('./../store')
// const gameLogic = require('../game-logic')

const onSignUpSuccess = function (response) {
  console.log(response)
  $('#message').text(response.user.email + ' Successfully signed up')
  // $('#message').removeClass()
  // $('#message').addClass('success-message')
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
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.sign-in-head').hide()
  $('.sign-up-head').hide()
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

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
