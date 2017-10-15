const express = require('express')
const expressGraphQl = require('express-graphql')
const schema = require('./schema')

const app = express()

app.use('/graphql', expressGraphQl({
  schema,
  graphiql: true
}))

app.listen(3005, () => {
  console.log('Listening on port 3005')
})

