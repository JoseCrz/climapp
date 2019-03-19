//Core Node Modules
const path = require('path')

//NPM modules
const express = require('express')
const chalk = require('chalk')


const app = express()
//*------------------CONFIGURATION------------------*
//Paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

//Handlebars config
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//*------------------/CONFIGURATION------------------*


//Routes
app.get('/', (request, response) => {
    response.render('index', {
        title: 'Weather App'
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
        message: 'This is a help message'
    })
})

app.get('/weather', (request, response) => {
    response.send({
        location: 'Manchester, United Kingdom',
        forecast: 'Clear throughout the day',
        temperature: 16
    })
})

app.listen(3000, () => {
    console.log(chalk.green('Server listening of port 3000'))
})