console.log('Hello client side JavaScript')

fetch('http://localhost:3000/weather?location=manchester')
.then(response => {
    
    response.json()
    .then(data => {
        if (data.error) {
            console.log(data.error)

        } else {
            console.log(data)
        }
    })
})
