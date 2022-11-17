/**
 * Author:    Max Schwab & Thomas Castillo
 * Created:   11.17.22
 *
 * (c) Copyright by Public Domain
 **/

outputEl = document.getElementById("output");

function FizzBuzz(max, factorObj) {
  for (var i = 1; i <= max; i++) {
    var output = "";
    for(factor in factorObj) {
      if (i % factor == 0) {
        output += factorObj[factor];
      }
    }
    if (output) {
      output = " - " + output + "!";
    }
    outputToPage(i.toString() + output);
   }
};

function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}


$("#submit").click(function(){
  console.log("button works");

  // finds max value
  var max = $("#maximum").val();
  console.log("Maximum value: " + max);
  if (!max) {
    reportError("Provide a maximum number.");
  }

  // list of factor inputs
  arrInputs = {0:"#num0", 1:"#num1", 2:"#num2", 3:"#num3"};
  inputList = [];
  for (input in arrInputs){
    target = arrInputs[input];
    inputList[input] = $(target).val();
    console.log("Input " + input + ": " + inputList[input])
  }

  // list of outputs for factors
  arrTexts = {0:"#text0", 1:"#text1", 2:"#text2", 3:"#text3"};
  textList = [];
  for (input in arrTexts){
    target = arrTexts[input];
    textList[input] = $(target).val();
    console.log("Input " + input + ": " + textList[input]);
  }

  // final array to send to function
  arrFinal = {}
  for (var items in arrInputs) {
    arrFinal[inputList[items]] = textList[items];
    console.log(arrFinal);
  }

  FizzBuzz(max, arrFinal);

});
