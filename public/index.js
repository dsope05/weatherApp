	const searchBtn = document.getElementById('search-btn')

const fetchWeatherData = () => {
		const city = document.getElementById('search-input').value;	
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${840}&appid=fefdc40d2ca6234e68cfd78180a73ada&units=metric`)
    .then((response) => response.json())
    .then(data => {
	    if (!data.name) {
        return errorHandler(data)
	    } 
      return render(data);
    })
}

	searchBtn.onclick = fetchWeatherData;

const errorHandler = (data) => {
	const weatherDiv = document.getElementById('weather-data')
  weatherDiv.innerHTML = `
    <div class='error-message'>
      ${data.message}!
    </div>`
}

const render = (data) => {
	const weatherDiv = document.getElementById('weather-data')
  const weatherChild =
    `<div class='weather-child-container'>
       <span class='city-name'>
        ${data.name}, ${data.sys.country}	
       </span>
       <span class='weather-child-description'>
        ${data.weather[0].description}
       </span>
       <p>
        ${data.main.temp}°F temperature from ${data.main.temp_min}°F to ${data.main.temp_max}°F, wind ${data.wind.speed} m/s, clouds ${data.clouds.all}%, ${data.main.pressure} hpa
       </p>
       <p>
         Geo Cords: [${data.coord.lon}, ${data.coord.lat}]
       </p>
     </div>`
  weatherDiv.innerHTML = weatherChild;
}

