require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const adress = process.argv[2]
if (!adress) {
  console.log('location requiered')
} else {
  geocode(adress, (error, data) => {
    if (error) {
      return console.log(error)
    } else {
      forecast(data.lon, data.lat, (error, forecastData) => {
        if (error) {
          return console.log(error)
        } else {
          console.log(data.location)
          console.log(forecastData)
        }
      })
    }
  })
}



