const name = document.getElementById("name");
const otput = document.createElement("div");

var url = `https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid=${Key}`
var Key = "4034265fefb281189b3e00817d028787"
var btn = document.getElementById("btn")

function getResults(){
    city = cityInput.value
    cntry = countryInput.value

    url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${cntry}&appid=${Key}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => {

        var temp = Math.round(1.8 * ((data.main.temp) - 273) + 32);
        var humid = data.main.humidity;
        var weather = data.weather[0].description;

        console.log(temp)
        console.log(weather)
        console.log(humid)

        document.getElementById("output").style.border = "solid 2px black";

        document.getElementById("one").innerHTML = "Current Tempature is: <br>" + temp;
        document.getElementById("two").innerHTML = "Type of Weather: <br>" + weather;
        document.getElementById("three").innerHTML = "Humidity: <br>" + humid;


    })
    
};

btn.addEventListener('click', getResults)