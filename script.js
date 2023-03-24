let APIKey = "67442ed21f58d53723ace2bf235e9ae7";
let weatherReportDetails = document.querySelector("#weatherReportDetails");
let weatherReport = "";
let longitude = "";
let latitude = "";
let fiveDayForecast = document.querySelector("#fiveDayForecast")
let searchInput = document.querySelector("#search-input");
let history = document.querySelector("#history")
let historyContainer = document.querySelector("#historyContainer")


function coordinates (){
    let cityname = searchInput.value;
    let queryURL =  "https://api.openweathermap.org/geo/1.0/direct?q=" + cityname + "&appid=67442ed21f58d53723ace2bf235e9ae7"
    fetch(queryURL)
    .then(response => response.json())
    .then(function (result) {
        longitude = result[0].lon;
        latitude = result[0].lat;

        let cityButton = document.createElement("button");
        cityButton.textContent = cityname;
        cityButton.addEventListener("click", function(){
            searchInput.value = cityname;
            coordinates();
        });
        historyContainer.append(cityButton);

        localStorage.setItem(cityname, JSON.stringify({longitude: longitude, latitude: latitude}));
        displayWeatherReportDetails();
        displayfiveDayForecast();
    });
}

function  displayWeatherReportDetails(){
    
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=67442ed21f58d53723ace2bf235e9ae7";
    
    
    fetch(queryURL)
    .then(response => response.json())
    .then(function (result) {
        
        let formatDate = moment(result.list[0].dt_txt).format("D MMM YYYY")
        weatherReportDetails.innerHTML = `<h1>${result.city.name}</h1> <p>${formatDate}
        <p>${"Temp: " + result.list[0].main.temp}</p>
        <p>${"Humidity: " + result.list[0].main.humidity}</p>
        <p>${"Wind: " + result.list[0].wind.speed}</p>
        <img src="${'https://openweathermap.org/img/w/' + result.list[0].weather[0].icon + '.png'}">`;
        
    });

}

function displayfiveDayForecast(){

    fiveDayForecast.textContent = ""
    
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=67442ed21f58d53723ace2bf235e9ae7";
    
    
    fetch(queryURL)
    .then(response => response.json())
    .then(function (result) {

        
        let weatherArray = result.list;
        
        for (let i = 6; i < weatherArray.length; i = i + 7) {
            const weatherDay = weatherArray[i];
            let formatFiveDate = moment(weatherDay.dt_txt).format("D MMM YYYY")
            
            fiveDayForecast.innerHTML += `<div class="m-3 p-2 bg-primary"><p>${formatFiveDate}</p>
            <p>${"Temp: " + weatherDay.main.temp}</p>
            <p>${"Humidity: " + weatherDay.main.humidity}
            <img src="${'https://openweathermap.org/img/w/' + weatherDay.weather[0].icon + '.png'}"></div>`;
            
        }
        
    })
    
};

document.querySelector("#search-button").addEventListener("click", function(event){
    event.preventDefault();

    coordinates()

})