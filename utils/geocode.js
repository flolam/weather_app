const request = require('postman-request')

const geocode = (adress, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=' + process.env.mapboxApi + '&limit=1'
  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to services', undefined)
    } else if (response.body.features.length === 0) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, {
        lat: response.body.features[0].center[1],
        lon: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
