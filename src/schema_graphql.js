const { makeExecutableSchema } = require("@graphql-tools/schema");
const resolvers = require('./resolvers')

const typeDefs = [
  /* GraphQL */ `
 
    type Query {
      projects: [Project]
      project(id: ID!): [ProjectDevice]
      devices(id: ID!): [Device]
      device(project_id: ID!, id: ID!): Device
    }

    type Project {
      id: ID
      name: String
    }

    type Device {
      id: ID
      project_id: ID
      code: Int!
      type: String
      status: String
    }

    type ProjectDevice {
      id: ID
      iddevice: ID
      name: String
      code: Int!
      type: String
      status: String
    }

    type Mutation {
      createProject(input: ProjectInput): Project
      createDevice(input: DeviceInput): Device
    }

    input DeviceInput {
      project_id: ID!
      code: Int!
      status: String
      type: String
    }

    input ProjectInput {
      name: String
    }
  `
]

module.exports = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})
