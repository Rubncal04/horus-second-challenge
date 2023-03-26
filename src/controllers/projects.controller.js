const schema = require('../db/schema')

const IndexProjects = async () => {
  try {
    const projects = await schema.query("SELECT * FROM projects")

    return projects.rows;
  } catch (error) {
    next(error)
  }
}

const CreateProject = async (req) => {
  const { code, status, type } = req;

  try {
    const result = await schema.query("INSERT INTO projects (code, status, type) VALUES ($1, $2, $3) RETURNING *", [
      code, status, type
    ])
  
    return result.rows[0]
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  CreateProject, IndexProjects
}
