(()=>{
    document.getElementById("submit").addEventListener("click", function(){
        const userCity = document.getElementById("userCity").value;
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+userCity+'&appid=ee5e6fca7948d3d060f7ae93a6118e21')
            .then(response => response.json())
            .then(data => console.log(data.list));
    })
})();