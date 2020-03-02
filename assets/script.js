var apiKey = "74193b84a905b258e148fc4d98fd703e";
var cityName = $("#cityInput").val();
console.log(cityName)
var queryURL1 = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
var latLon = "";
var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}";
var today = new Date();

