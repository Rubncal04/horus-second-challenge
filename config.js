const { config } = require('dotenv')

config()

module.exports = {
  db: {
    user: process.env.USER_DB || process.env.Username,
    password: process.env.PASSWORD_DB || process.env.Password,
    host: process.env.HOST_DB || process.env.Hostname,
    port: process.env.PORT_DB || process.env.Postgresport,
    database: process.env.DATABASE || process.env.database
  }
}
