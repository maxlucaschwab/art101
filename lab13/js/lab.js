/**
 * Author:    Max Schwab & Thomas Castillo
 * Created:   11.14.22
 *
 * (c) Copyright by Public Domain
 **/

outputEl = document.getElementById("output");

function FizzBuzz() {
  arr = []
  for (var i = 1; i <= 200; i++) {
    var num = ""
    if (i % 3 == 0){
      num += "Fizz"
      }
    if (i % 5 == 0){
      num += "Buzz"
      }
    if (i % 7 == 0){
      num += "Boom"
      }
    if (num){
      num = i + " - " + num + "!"
    } else {
      num = i
    }
   outputToPage(num)
   }
};

function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}

$("#output").html(FizzBuzz())
