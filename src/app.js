//Core Node Modules
const path = require('path')

//NPM modules
const express = require('express')
const chalk = require('chalk')
const hbs = require('hbs')

//local modules
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
//*------------------CONFIGURATION------------------*
//Paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Handlebars config
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//*------------------/CONFIGURATION------------------*


//Routes
app.get('/', (request, response) => {
    response.render('index', {
        title: 'Weather App',
        name: 'José Cuevas'
    })
})

app.get('/about', (request, response) => {
    response.render('about', {
        title: 'About me',
        name: 'José Cuevas'
    })
})

app.get('/help', (request, response) => {
    response.render('help', {
        title: 'Help',
        message: 'This is a help message',
        name: 'José Cuevas'
    })
})

app.get('/weather', (request, response) => {
    
    if (!request.query.location) {
        return response.send({
            error: 'A location must be provided'
        })
    }
    const location = request.query.location

    geocode(location, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return response.send({
                error
            })
        }

        forecast(latitude, longitude, 'si', (error, forecastData) => {
            if (error) {
                return response.send({
                    error
                })
            }
            
            response.send({
                location,
                summary: forecastData.summary,
                temperature: forecastData.temperature,
                rainChance: forecastData.rainChance
            })
        })
    })
})

app.get('/help/*', (request, response) => {
    response.render('404', {
        title: '404',
        errorMessage: 'Help article not found!',
        name: 'José Cuevas'
    })
})

app.get('*', (request, response) => {
    response.render('404', {
        title: '404',
        errorMessage: 'Page not found!'
    })
})

app.listen(3000, () => {
    console.log(chalk.green('Server listening of port 3000'))
})