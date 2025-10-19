//Needed Recources
const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")
const vehicleDetailController = require("../controllers/vehicleDetailController")

//Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationID)

module.exports = router;