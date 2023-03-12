var city = $("#searchTerm").val();
var apiKey = "67442ed21f58d53723ace2bf235e9ae7";

$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  // console.log("searchBtn");
  $("#five-day-forecast").addClass("show");
  // console.log("five-day-forecast");

  // user input value
  city = $("#searchTerm").val();

  $("#searchTerm").val("");

  var UVIndex = function (ln, lt) {
    // One Call Api for the UV index
    var uvIndexApi =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +//67442ed21f58d53723ace2bf235e9ae7
      lt +
      "&lon=" +
      ln +
      "&appid=" +
      "67442ed21f58d53723ace2bf235e9ae7";
  };

  /* need for API CAll
    lat, lon
    api key
    */

  // Five Day Forecast API to get the five day forecast
  var fiveDayForecastApi =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=" +
    apikey;

  // Current Weather API to get the current weather
  var currentWeatherApi =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey;
  console.log(apiUrl);
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    }
  });
});

var displayList = function () {
  var listItem = $("<li>").addClass("list-group-item").text(city);
  $(".list").append(listItem);
};

var getCurrentWeather = function () {
  var tempF = function () {
    tempF = Math.floor(tempF);
  };

  $("#currentCity").empty();

  var card = $("<div>").addClass("card");
  var cardBody = $("<div").addClass("card-body");
  var city = $("<h4>").addClass("card-title").text(response.name);
  var cityDate = $("<h4>")
    .addClass("card-title")
    .text(date.toLocalDateString("en-US"));
  var temperature = $("<p>")
    .addClass("card-text current-temp")
    .text("Temperature: " + tempF + " F");
  var humidity = $("<p>").addClass("card-text current-humidity");
};

// var restaurantInfo = $('<div><p>' + restaurantList[randomlySelectedRestaurant].restaurant_name + '</p></div>');

/* Data that needs to be pulled from the api
Current Temp use currentWeatherApi:
    weather icon - weather["index of", 0].icon / weather.icon
    Temp - main.temp
    WInd - wind.speed
    Humidity - main.humidity

 UV Index use uvIndexApi:   
    UV Index - current.uvi

5-day Forecast use fiveDayForecastApi:
    Temp - main.temp
    WInd - wind.speed
    Humidity - main.humidity
*/
