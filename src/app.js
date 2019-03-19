const express = require('express')
const chalk = require('chalk')

const app = express()

app.get('/', (request, response) => {
    response.send('Hello express')
})

app.listen(3000, () => {
    console.log(chalk.green('Server listening of port 3000'))
})