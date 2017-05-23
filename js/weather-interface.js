var Weather = require('./../js/weather.js').weatherModule;

var generateTable = function(people) {
  console.log(people);
  $("#ppl").empty();
  people.forEach(function(person, i){
    $("#ppl").append(`<tr><td>${i}</td><td>${person.name}</td><td>${person.humidity}</td></tr>`);
  });
};

$(document).ready(function() {
  var weather = new Weather();
  $('#generate').click(function() {
    weather.getPerson();
  });
  $("#an").click(function(){
    generateTable(weather.allPeople());
  });
});
