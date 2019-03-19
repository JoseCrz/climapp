const express = require('express')
const chalk = require('chalk')

const app = express()

app.get('/', (request, response) => {
    response.send('Hello express!')
})

app.get('/help', (request, response) => {
    response.send('Help page.')
})

app.get('/about', (request, response) => {
    response.send('<h1>About page.</h1>')
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