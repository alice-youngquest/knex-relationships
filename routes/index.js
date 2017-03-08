var express = require('express')
var path = require('path')
var db = require('../db')

module.exports = {
  get,
  displayProfile,
  inputNewProfile,
  createNewProfile
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

function inputNewProfile (req, res) {
  res.render('newprofile')
}

function createNewProfile(req, res) {
  var data = req.body
  db.newUser(data.name, data.email)
  .then(users_id => {
    db.newProfile(users_id[0], data.pic_URL, data.URL)
    .then(profile_id => {
        console.log({profile_id});
    })
  })


}
