var conv = true;
var temp = 0;
var footerLoc = 0;
var red = false;
$("#weatherDiv").hide();
$("#footer").hide();
$(document).ready(function(){
  
navigator.geolocation.getCurrentPosition(showPosition);
function showPosition(position){
  $.get("https://fcc-weather-api.glitch.me/api/current?lon="+position.coords.longitude+"&lat="+position.coords.latitude,function(data){
    $("#location").html(data.name+", "+data.sys.country);
    $("#temp").html(tempConverter(Math.round(data.main.temp),conv));
    temp=data.main.temp;
    $("#weather").html(data.weather[0].main);
    $("#weatherIcon").attr('src',getIcon(data.weather[0].main));
    $("#humidity").html("<b>humidity:</b> "+data.main.humidity+"%");
    $("#wind").html("<b>Wind speed: </b>"+data.wind.speed+" mph");
    $("#weatherDiv").show(400);
  $("#footer").show(400);
  $("#loading").hide();
  });
}
  console.log(red);
$( "span" ).click(function() {
  switch(conv){
    case false:
      $("#tempChar").html("&#8457;");
      conv = true;
      break;
    case true:
      conv = false;
      $("#tempChar").html("&#8451;");
      break;
  }
  $("#temp").html(tempConverter(temp,conv));
});
;
function tempConverter(t, toFah){
  if(toFah){
     t = t * (9/5)+32,1;
  }
  return Math.round(t ,2);
}

function getIcon(weather){
  var icon = "";
  console.log(weather);
  switch(weather){
    case "Clear":
      icon += "https://raw.githubusercontent.com/t3chm0nkey/CodePenWeatherApp/master/icons/sunnyIcon.png";
      break;
    case "Clouds":
      icon += "https://raw.githubusercontent.com/t3chm0nkey/CodePenWeatherApp/master/icons/cloudyIcon.png"
      break;
    case "Snow":
      icon +="https://raw.githubusercontent.com/t3chm0nkey/CodePenWeatherApp/master/icons/snowIcon.png"
      break;
    case "Rain":
      icon +="https://raw.githubusercontent.com/t3chm0nkey/CodePenWeatherApp/master/icons/rainIcon.png"
      break;
    case "Thunder":
      icon +="https://raw.githubusercontent.com/t3chm0nkey/CodePenWeatherApp/master/icons/thunderIcon.png"
      break;
    case "Haze":
      icon += "https://raw.githubusercontent.com/t3chm0nkey/CodePenWeatherApp/master/icons/partlyCloudyIcon.png"
  }
  
  return(icon);
}
 
});
