/**
 * Author:    Max Schwab & Thomas Castillo
 * Created:   11.6.22
 *
 * (c) Copyright by Public Domain
 **/

// creates buttons under each paragraph section
$("#challenges").append("<button id = 'challengesButton' class = myButton>Press Me to Change Styles!");
$("#problems").append("<button id = 'problemsButton' class = myButton>Press Me to Change Styles!");
$("#results").append("<button id = 'resultsButton' class = myButton>Press Me to Change Styles!");

// finds parent elements for each button and adds a class if button is pressed
$("#challengesButton").click(function(){
  var challengesEl = $("#challengesButton");
  challengesEl.parent().toggleClass('special');
});

$("#problemsButton").click(function(){
  var problemsEl = $("#problemsButton");
  problemsEl.parent().toggleClass('special');
});

$("#resultsButton").click(function(){
  var resultsEl = $("#resultsButton");
  resultsEl.parent().toggleClass('special');
});
