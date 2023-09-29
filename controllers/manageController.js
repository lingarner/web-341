const utils = require('../model/contacts')
const manageController = {}
const express = require('express');


// Rendering views

manageController.buildHome =  async function(req, res) {
     //indicated where to render the view
    res.render("home.ejs")
}

manageController.buildNewContact =  async function(req, res) {
    res.render("new-contact")
}

manageController.buildDeleteContact =  async function(req, res) {
    res.render("delete-contact")
}

module.exports = manageController;