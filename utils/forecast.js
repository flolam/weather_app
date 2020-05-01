const request = require('postman-request')

const forecast = (lon, lat, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=' + process.env.weatherstackApi + '&query=' + lat + ',' + lon + '&limit=1'
  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to weather services', undefined)
    } else if (response.body.error) {
      callback('cannot find location', undefined)
    } else {
      callback(undefined, {
        description: response.body.current.weather_descriptions[0],
        temperature: response.body.current.temperature,
        feelslike: response.body.current.feelslike
      })
    }
  })
}

module.exports = forecast
