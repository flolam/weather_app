require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const adress = process.argv[2]
if (!adress) {
  console.log('location requiered')
} else {
  geocode(adress, (error, {lat, lon, location} = {}) => {
    if (error) {
      return console.log(error)
    } else {
      forecast(lat, lon, (error, forecastData) => {
        if (error) {
          return console.log(error)
        } else {
          console.log(location)
          console.log(forecastData)
        }
      })
    }
  })
}



