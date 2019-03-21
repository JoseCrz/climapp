const request = require('request')

const forecast = (latitude, longitude, units, callback) => {
    const url = `https://api.darksky.net/forecast/b570cea920d6af533ac24dbe957983e3/${latitude},${longitude}?units=${units}`
    
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Could not connect with the server!', undefined)

        } else if (response.body.error) {
            callback(response.body.error, undefined)
            
        } else {
            const currentWeather = response.body.currently

            const data = {
                summary: currentWeather.summary,
                temperature: currentWeather.temperature,
                rainChance: currentWeather.precipProbability
            }

            callback(undefined, data)
        }
    })
}

module.exports = forecast
