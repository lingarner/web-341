const express = require('express');
const router = new express.Router();
const baseController = require('../controllers/baseController');

router.use("/me", baseController.buildMe);
router.use("/you", baseController.buildYou);
router.use("/", baseController.buildPeople)


module.exports = router;