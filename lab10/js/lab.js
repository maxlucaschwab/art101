/**
 * Author:    Max Schwab & Thomas Castillo
 * Created:   11.2.22
 *
 * (c) Copyright by Public Domain
 **/

 function sortUserName(inputname) {
    var userName = String(inputname);

    var nameArray = userName.split(" ");
    newNameArray = [];

    for (var i = 0; i < nameArray.length; i++) {
      newNameArray[i] = nameArray[i].split('').sort().reverse().join('');

      if (i != nameArray.length){
        newNameArray[i] = (newNameArray[i] + " ");
      };
    };


    return newNameArray.sort().reverse().join('').toLowerCase();
  };


  var buttonEl = document.getElementById("myButton");

  var outputEl =document.getElementById('output');

  buttonEl.addEventListener('click', function(){
    var enterName= document.getElementById("userName").value;
    var sortedName = sortUserName(enterName);
    outputEl.innerHTML=sortedName;
  })

 document.writeln("Oh hey, I've fixed your name: ",
 sortUserName(), "</br>");
