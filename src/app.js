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
    response.send('About page.')
})

app.get('/weather', (request, response) => {
    response.send('Weather page.')
})

app.listen(3000, () => {
    console.log(chalk.green('Server listening of port 3000'))
})