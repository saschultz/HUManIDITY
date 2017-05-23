var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#display').click(function() {
    var city = $('#city').val();
    $('#city').val('');
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('#humidity h3').text(`The humidity in ${city} is ${response.main.humidity}%`);

    });
  });
});
