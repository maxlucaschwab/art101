/**
 * Author:    Max and Thomas
 * Created:   10.23.2022
 * License: Public Domain
 **/

 // function sortUserName sorts a user input and returns it jumbled
function sortUserName() {
   var userName = window.prompt("Hello! Please enter your name so we can fix it.");
   return userName.split('').sort().join('');
 }

// Output
document.writeln("Oh hey, I've fixed your name: ",
sortUserName(), "</br>");
