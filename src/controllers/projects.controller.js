const schema = require('../db/schema')

const IndexProjects = async () => {
  try {
    const projects = await schema.query("SELECT * FROM projects")

    return projects.rows;
  } catch (error) {
    console.log(error)
  }
}

const CreateProject = async (req) => {
  const { name } = req;

  try {
    const result = await schema.query("INSERT INTO projects (name) VALUES ($1) RETURNING *", [
      name
    ])
  
    return result.rows[0]
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  CreateProject, IndexProjects
}
