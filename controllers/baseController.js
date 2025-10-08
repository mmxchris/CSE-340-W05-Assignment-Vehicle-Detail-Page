const utility = require("../utility")
const bcaseController = {}

baseController.buildHome = async function(req, res){
    const nav = await utilites.getNav()
    res.render('index,{title: "Home", nav}')
}

module.exports = baseController