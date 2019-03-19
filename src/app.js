//Core Node Modules
const path = require('path')

//NPM modules
const express = require('express')
const chalk = require('chalk')


const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/', (request, response) => {
    response.send('Hello express!')
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