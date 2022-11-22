

$("#activate").click(function (){
  $.ajax({
    // gets url of yes/no api
    url: "https://yesno.wtf/api",
    // signals what action to take
    type: "GET",
    // changes the sata type into a parsed json structure
    dataType: "json",
    // function that says what to do with the results from the api
    success: function(data) {
      $('#output').append("<p id='answer'>" + data.answer + "</p>");
      $('#output').append('<img id="yesNo" src="' + data.image + '" />');
      console.log(data);
    }
  })
});
