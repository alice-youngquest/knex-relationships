var express = require('express')

var db = require('../db')

module.exports = {
  get: get,
  displayProfile: displayProfile
}

function get (req, res) {
  db.getUsers()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function displayProfile (req, res) {
  db.getProfile(req.params.id)
  .then(function (profiles){
    res.render('profiles', {profiles: profiles})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
