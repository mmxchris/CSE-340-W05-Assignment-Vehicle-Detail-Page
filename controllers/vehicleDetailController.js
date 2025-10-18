const vehicleDetailModel = require("../models/vehicleDetail-Model")
const utilites = require("../utilities/")

const vehicleDetail = {}

/* ***************************
 *  Build Vehicle Detail View
 * ************************** */
vehicleDetail.buildVehicleDetail = async function (req, res, next) {
    const vehicleId = req.params.vehicleId
    const data = await vehicleDetailModel.getVehicleDetail(vehicleId)
    const grid = await utilites.buildVehicleDetail(data)
    let nav = await utilites.getNav()
    res.render("./vehicle/detail", {
        title: data[0].inv_make + " " + data[0].inv_model,
        nav,
        grid
    })
}

module.exports = vehicleDetail