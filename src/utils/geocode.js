const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYnlrbzAxMyIsImEiOiJjanRhdnJxOWUwM2l6NDRxamN1cDJqdmQ1In0.OKOEbro8Zm1ZQjfLJo_kLw`
    
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Could not connect with the server!', undefined)

        } else if (response.body.message) {
            callback(response.body.message, undefined)

        } else if (response.body.features.length === 0) {
            callback('Unable to find location', undefined)

        } else {
            const place = response.body.features[0]
            const data = {
                location: place.place_name,
                latitude: place.center[1],
                longitude: place.center[0]
            }

            callback(undefined, data)
        }
    })
}

module.exports = geocode
