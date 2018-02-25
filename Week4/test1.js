function getWeather(callback){
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=oulu,fi&units=metric&APPID=de410a7ea2efb3f1605b01bf3662204c";
	$.ajax({
		datatype: "jsonp",
		url: weatherUrl,
		success: callback
	});
}

function loadWeatherStuff(){
	getWeather(handleWeatherResponse);
}

function handleWeatherResponse(data){
	console.log("");
	console.log(data);
  	$("#weather").append("Temperature: " + data.main.temp + "C");
}