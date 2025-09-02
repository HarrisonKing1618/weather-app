const search = document.getElementById('search')
const searchIcon = document.getElementById('search-icon')
const weatherName = document.querySelector('.weather-name')
const images = document.querySelector('.images')
const temp = document.querySelector('.temp')
const city = document.querySelector('.city')
const windSpeed = document.getElementById('wind-speed')
const humidity = document.getElementById('humidity')
const cityName = search.value

const apiKey = 'c18d964688efabcb134df30a989c1f80'




async function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`

    const request = new Request (url)
    try {
        const response = await fetch (request)
        const data = await response.json()

        console.log('success', data)
        if (response.ok) {

            weatherName.innerHTML = data.weather[0].main
            temp.innerHTML = data.main.temp + '°C'
            city.innerHTML = data.name
            windSpeed.innerHTML = data.wind.speed + 'Km/h'
            humidity.innerHTML = data.main.humidity + '%'

            if (data.weather[0].main == 'Clouds') {
                images.src = 'images/clouds.png'
            }
            else if (data.weather[0].main == 'Dust') {
                images.src = 'images/dust.png'
            }
            else if (data.weather[0].main == 'Rain') {
                images.src = 'images/rain.png'
            }
            else if (data.weather[0].main == 'Snow') {
                images.src = 'images/snow.jpeg'
            }
            else if (data.weather[0].main == 'Mist') {
                images.src = 'images/mist.png'
            }
            else if (data.weather[0].main == 'Drizzle') {
                images.src = 'images/drizzle.png'
            }
            else if (data.weather[0].main == 'Sunny') {
                images.src = 'images/sun.png'
            }
            else if (data.weather[0].main == 'Clear') {
                images.src = 'images/sun.png'
            }
            else {
                images.src = 'images/sun.png'
            }

            document.getElementById('display').style.display = 'block'


        } else {
            document.querySelector('.error').style.display = 'block'
            
            document.getElementById('display').style.display = 'none'
            return
        }



       



    }
    catch(error) {
        console.log('error', error)
    }
    
}






searchIcon.addEventListener('click', () => {
    const cityName = search.value.trim()
    getWeather(cityName)

})