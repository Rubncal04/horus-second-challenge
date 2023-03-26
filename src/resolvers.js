const { CreateProject, IndexProjects } = require('./controllers/projects.controller')

const resolvers = {
  Query: {
    projects: () => {
      return IndexProjects();
    }
  },
  Mutation: {
    async createProject(_, { input }){
      const newProject = CreateProject(input)
      return newProject
    }
  }
}

module.exports = resolvers
