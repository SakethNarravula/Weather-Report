const apiUrl='https://api.openweathermap.org/data/2.5/weather?appid=d5d73c049cabe2c0e15d00233bc29290&units=metric&q=';
const search=document.querySelector('.search input');
const button=document.querySelector('.search button');
const weatherIcon=document.querySelector('.weather-icon');

async function checkWeather(city="Bengaluru"){
    axios.get(apiUrl+city).then(function(res){
        var weatherData=res.data;
        document.querySelector('.city').innerHTML=weatherData.name;
        document.querySelector('.temp').innerHTML=weatherData.main.temp;
        document.querySelector('.humidity').innerHTML=weatherData.main.humidity+'%';
        document.querySelector('.wind').innerHTML=weatherData.wind.speed+'km/h';
        document.querySelector('.weather').style.display='block';

        if(weatherData.weather[0].main=='Clouds'){
            weatherIcon.src='images/clouds.png';
        }
        else if(weatherData.weather[0].main=='Clear'){
            weatherIcon.src='images/clear.png';
        }
        else if(weatherData.weather[0].main=='Drizzle'){
            weatherIcon.src='images/drizzle.png';
        }
        else if(weatherData.weather[0].main=='Rain'){
            weatherIcon.src='images/rain.png';
        }
        else if(weatherData.weather[0].main=='Mist'){
            weatherIcon.src='images/mist.png';
        }
        else if(weatherData.weather[0].main=='Snow'){
            weatherIcon.src='images/snow.png';
        }
    })

}
button.addEventListener('click',()=>{
    checkWeather(search.value);
})