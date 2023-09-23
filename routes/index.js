const express = require('express');
const router = new express.Router();
const baseController = require('../controllers/baseController');

router.use("/contacts/:_id", baseController.findOne);
router.use("/contacts",  baseController.showAllPeople)




module.exports = router;