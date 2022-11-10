/**
 * Author:    Max Schwab & Thomas Castillo
 * Created:   11.9.22
 *
 * (c) Copyright by Public Domain
 **/

function sortingHat(str) {
  var ref = str.length % 4;
  if (ref == 0) {
    return "Gryffindor"
  }
  else if (ref == 1) {
    return "Ravenclaw"
  }
  else if (ref == 2) {
    return "Slytherin"
  }
  else {
    return "Hufflepuff"
  }
}

$("#button").click(function(){
  var name = $("#input").val();
  var house = sortingHat(String(name));
  text = "<p>The Sorting Hat has sorted you into " + house + "</p>"
  $("#output").append(text)
});
