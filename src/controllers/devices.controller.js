const schema = require('../db/schema')

const IndexDevices = async (id) => {
  try {
    const devices = await schema.query("SELECT * FROM devices WHERE project_id = $1", [id])

    return devices.rows;
  } catch (error) {
    console.log(error)
  }
}

const ShowDevice = async ({ project_id, id }) => {
  try {
    const device = await schema.query("SELECT * FROM devices WHERE project_id = $1 AND id = $2", [project_id, id])

    return device.rows[0];
  } catch (error) {
    console.log(error);
  }
}

const CreateDevice = async (req) => {
  const { code, project_id, status, type } = req;

  try {
    const result = await schema.query("INSERT INTO devices (code, project_id, status, type) VALUES ($1, $2, $3, $4) RETURNING *", [
      code, project_id, status, type
    ])

    return result.rows[0]
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  CreateDevice, IndexDevices, ShowDevice
}
