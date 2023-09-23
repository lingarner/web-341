const express = require('express');
const router = new express.Router();
const baseController = require('../controllers/baseController');

router.use("/contacts",  baseController.showAllPeople)
// router.use("/me", baseController.buildMe);




module.exports = router;