const pool = require("../database")

/* ***************************
 *  Get vehicle detail by id
 * ************************** */
async function getVehicleDetail(id) {
  const data = await pool.query(
    `SELECT * FROM public.inventory WHERE inv_id = $1`,
    [id]
  )
  return data.rows
}

module.exports = { getVehicleDetail }