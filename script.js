let apiKey = '67442ed21f58d53723ace2bf235e9ae7'
fetch("http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=67442ed21f58d53723ace2bf235e9ae7)";
      .then(response => response.json())   
       .then(ciitiesFound => {
        let firstCity = citiesFound[0];


        console.log(firstCity.lat);
        console.log(firstCity.lon);
        return fetch{"(https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=$("apiKey")
    });



    .then(response => response.json());
    .then(data => {

        console.log(data);
    })