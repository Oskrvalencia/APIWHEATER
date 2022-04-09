const weather = require('./weather.routes')
const token = require('./token.routes')

const routing = (app) => {
  app.use('/weather', weather)
  app.use('/token', token)
}

module.exports = routing