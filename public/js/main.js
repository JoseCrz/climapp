const weatherForm = document.querySelector('form')
const textInput = document.querySelector('input')
const successMessage = document.getElementById('success-message')
const errorMessage = document.getElementById('error-message')

weatherForm.addEventListener('submit', event => {
    event.preventDefault()
    
    const location = textInput.value
    

    fetch(`/weather?location=${location}`)
    .then(response => {
        
        response.json()
        .then(data => {
            if (data.error) {
                console.log(data.error)
                errorMessage.textContent = data.error
                successMessage.textContent = ''
    
            } else {
                console.log(data)
                errorMessage.textContent = ''
                successMessage.textContent = `${data.location}. ${data.summary} current temperature ${data.temperature}, with a ${data.rainChance*100}% chance of raining`
            }
        })
    })
})

