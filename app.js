require('dotenv').config()
const request = require('postman-request')
const geocode = require('./utils/geocode')

geocode('new york', (error, data) => {
  console.log(data.location, data.lat, data.lon)
})

