const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/53b72a104b7305cb5817bee0bba9fbdb/'+latitude +','+ longitude+'?units=si'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect weather services!',undefined)
        }
        else if(body.error){
            callback('Unable to find location')
        }
        else{
           callback(undefined,body.daily.data[0].summary+' It is currently '+body.currently.temperature+' degree.' + 'There is a '+ body.currently.precipProbability+'% chance of rain. Highest temperature of the day is '+body.daily.data[0].temperatureHigh+'. Lowest temperature of the day is '+body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast
