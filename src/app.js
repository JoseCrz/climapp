const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send('Hello express')
})

app.listen(3000, () => {
    console.log('Server listening of port 3000')
})