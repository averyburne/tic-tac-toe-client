'use strict'
const store = require('./../store')
const config = require('./../config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGames = function (event) {
  return $.ajax({
    url: config.apiUrl + '/get-games',
    method: 'GET'
  })
}

// const addGame = function () {
//   return $.ajax({
//     url: config.apiUrl +
//   })
// }

const updateBoard = function (event) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'PATCH'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  updateBoard
}
