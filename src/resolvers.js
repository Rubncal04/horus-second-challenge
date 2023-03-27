const { CreateProject, IndexProjects } = require('./controllers/projects.controller')
const { IndexDevices, CreateDevice, ShowDevice } = require('./controllers/devices.controller')

const resolvers = {
  Query: {
    projects: () => {
      return IndexProjects();
    },
    devices: (_, { id }) => {
      return IndexDevices(id)
    },
    device: (_, { project_id, id }) => {
      return ShowDevice({ project_id, id })
    }
  },
  Mutation: {
    async createProject(_, { input }){
      const newProject = CreateProject(input)
      return newProject
    },
    async createDevice(_, { input }){
      const newProject = CreateDevice(input)
      return newProject
    }
  }
}

module.exports = resolvers
