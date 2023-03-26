const express = require('express')
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema_graphql");

const app = express()

app.use(express.json())

app.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema: schema,
  context: {
    messageId: 'Test'
  }
}))

const PORT = 3001
app.listen(PORT)

console.log('Server running in port: ' + PORT);
