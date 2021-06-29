(()=>{
    document.getElementById("submit").addEventListener("click", function(){
        const userCity = document.getElementById("userCity").value;
        
        async function getWeather(){
            let url = 'https://api.openweathermap.org/data/2.5/forecast?q='+userCity+'&units=metric&appid=ee5e6fca7948d3d060f7ae93a6118e21';

            try{
                let res = await fetch(url);

                return await res.json();
            }catch (error){
                console.log(error);
            }
        }

        async function displayWeather(){
            let weather = await getWeather();
            let html = '';

            for(let i = 0; i<5; i++){
                let insert = '<div class="weather"><div class="day">'+'</div><div class="temp">Temp: '+weather.list[i].main.temp+'</div><div class="feels-like">Feels like: '+weather.list[i].main.feels_like+'</div><div class="humidity">Humidity: '+weather.list[i].main.humidity+'</div></div>';

                html += insert;
            }

            let container = document.querySelector('.container');
            container.innerHTML += html;
        }

        displayWeather();
    })
})();