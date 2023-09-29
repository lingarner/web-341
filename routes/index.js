const express = require('express');
const router = new express.Router();
const baseController = require('../controllers/baseController');
const manageController = require('../controllers/manageController')

// home view route
router.get("/", manageController.buildHome)
router.get("/new-contact-form", manageController.buildNewContact)
router.get("/delete-contact", manageController.buildDeleteContact)


// CONTACT ROUTES

// add a contact to the db
router.get("/contacts/newContact", baseController.findOne);

// return specific id info from db
router.get("/contacts/:_id", baseController.findOne);

// return all info from db
router.get("/contacts",  baseController.showAllPeople)


// POST

router.post("/contacts", baseController.insertNew)
router.put("/contacts/:_id", baseController.updateContact);
router.delete("/contacts/:_id", baseController.deleteContact);




module.exports = router;