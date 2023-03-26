const { makeExecutableSchema } = require("@graphql-tools/schema");
const resolvers = require('./resolvers')

const typeDefs = [
  /* GraphQL */ `
 
    type Query {
      projects: [Project]
    }

    type Project {
      id: ID
      code: String!
      status: String
      type: String
    }

    type Mutation {
      createProject(input: ProjectInput): Project
    }

    input ProjectInput {
      code: Int!
      status: String
      type: String
    }
  `
]

module.exports = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})
