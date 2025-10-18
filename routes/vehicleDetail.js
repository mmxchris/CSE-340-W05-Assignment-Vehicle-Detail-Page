// Needed Resources 
const express = require("express")
const router = new express.Router() 
const vehicleDetailController = require("../controllers/vehicleDetailController")

// Route to build vehicle detail by id view
router.get("/detail/:vehicleId", vehicleDetailController.buildVehicleDetail)

module.exports = router;