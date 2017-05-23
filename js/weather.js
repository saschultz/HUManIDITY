var apiKey = require('./../.env').apiKey;

function Weather() {
  this.people = [
    "sara",
    "ben",
    "aubrey",
    "jason",
    "jin",
    "mohammed",
    "sean",
    "james",
    "ken",
    "grady",
    "night-kai",
    "asia",
    "niklas",
    "tyler",
    "susha",
    "spencer",
    "kinsey",
    "dom",
    "dana",
    "nick",
    "nicky",
    "tanner",
    "kat",
    "sowmya",
    "monique"
  ];
  this.humidPeople = [];
}

Weather.prototype.allPeople = function() {
  console.log("length: " + this.humidPeople.length);
  var sorted = this.humidPeople.sort(function(a, b) {
    return b.humidity - a.humidity;
  });
  return sorted;

};

Weather.prototype.getPerson = function() {
  var name = this.people[this.humidPeople.length];
  var people = this.humidPeople;
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`)
  .then(function(response) {
    var humidity = response.main.humidity;
    people.push({name: name, humidity: humidity});
  }).fail(function(error) {
    var humidity = "humid-less";
    people.push({name: name, humidity: humidity});
  });

};

Weather.prototype.getWeather = function(city) {
  console.log('sweater object');
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('#humidity h3').text(`The humidity in ${city} is ${response.main.humidity}%`);
  }).fail(function(error) {
    $('#humidity h3').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
