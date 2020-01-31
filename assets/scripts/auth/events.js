// this is where event functions will be
const api = require('./api')
const ui = require('./ui')
// const gameLogic = require('../game-logic')

const getFormFields = require('./../../../lib/get-form-fields')
// function to change the box text to an x

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log('hello')
  console.log(data)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const updateBoard = function (event) {
  event.preventDefault()
  const box = event.target
  console.log('it worked')
  api.updateBoard(box)
    .then($(box).text('X'))
    .catch(ui.updateBoard)
}

const checkWinner = function () {
  event.preventDefault()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  updateBoard,
  checkWinner
}
