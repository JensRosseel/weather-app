(()=>{
    const fetchWeather = () => {
        let date = new Date();
        const userCity = document.getElementById("userCity").value;
        let weather_charts = document.querySelector('.weather-charts');
        weather_charts.innerHTML = '';

        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+userCity+'&units=metric&appid=ee5e6fca7948d3d060f7ae93a6118e21')
            .then(response => response.json())
            .then(data => {
                let day = 0
                let counter = date.getDay();
                let weather = data;
                let html = '';
    
                weather_charts.innerHTML += '<div class="city">Weather in '+weather.city.name+'</div>';
                for(let i = 0; i<40; i+=8){
                    switch(counter){
                        case 1:
                            day = 'Monday';
                            break;
                        case 2:
                            day = 'Tuesday';
                            break;
                        case 3:
                            day = 'Wednesday';
                            break;
                        case 4:
                            day = 'Thursday';
                            break;
                        case 5:
                            day = 'Friday';
                            break;
                        case 6:
                            day = 'Saturday';
                            break;
                        case 7:
                            day = 'Sunday';
                            break;
                    }
                    
                    let insert = '<div class="weather-card"><div class="day">'+day+'</div><div class="temp">'+Math.round(weather.list[i].main.temp)+' &#176;C </div><div class="feels-like">Feels like: '+Math.round(weather.list[i].main.feels_like)+' &#176;C</div><div class="weather">'+weather.list[i].weather[0].description+'</div><div class="humidity">Humidity: '+weather.list[i].main.humidity+'%</div><div class="wind">Wind speed: '+weather.list[i].wind.speed+' m/s</div></div>';
    
                    html += insert;
                    if(counter == 7){
                        counter = 1;
                    }else{
                        counter++;
                    }
                }
                weather_charts.innerHTML += html;
                weather_charts.style.backgroundColor = "rgba(0, 0, 0, 0.726)";
            });
    }
    document.getElementById("userCity").addEventListener("keyup", (e) => {
        if(e.key === 'Enter'){
            fetchWeather();
        }
    });
    document.getElementById("submit").addEventListener("click", fetchWeather);
    
})();