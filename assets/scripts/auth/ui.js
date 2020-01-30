'use strict'

const store = require('./../store')

const updateBoard = function (event) {
  const box = event.target
  if ($(box).text() === 'X' || $(box).text() === 'O') {
    $('#message').text('Hey that is not allowed')
  } else {
    $(box).text('X')
    $('#message').text('you placed an x')
  }
}

const onSignUpSuccess = function (response) {
  console.log(response)
  $('#message').text(response.user.email + ' Successfully signed up')
  $('#message').removeClass()
  // $('#message').addClass('success-message')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (response) {
  console.log(response)
  $('#message').removeClass()
  // $('#message').addClass('failure-message')
  $('#message').text('Failed to sign up')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  updateBoard
}
