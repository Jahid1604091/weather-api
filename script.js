const inputbox = document.getElementById('inputbox')
const search = document.getElementById('search')
const displayCity = document.getElementById('displayCity')
const displayTemp = document.getElementById('displayTemp')
const weatherDisplay = document.getElementById('weather')
let city = ''
inputbox.value = city
search.addEventListener('click', () => {
    city = inputbox.value
    displayCity.innerText = city.toUpperCase()
    getWeather(city)
})

const API_KEY = 'eae24fc6615bbe51b7a28c97615474ac'

const getWeather = async (cityName) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    const data =  await res.json()

    const weather = data.weather[0].description
    const temp = parseFloat(data.main.temp) - 273.15  //it was in Kelvin
    displayTemp.innerText = `${temp.toFixed(2)} \u00B0 C`
    weatherDisplay.innerText = weather

}

