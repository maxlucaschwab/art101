/**
 * Author:    Max and Thomas
 * Created:   10.23.2022
 * License: Public Domain
 **/

 // function sortUserName sorts a user input and returns it jumbled
function sortUserName() {
   var userName = window.prompt("Hello! Please enter your name so we can fix it.  ");
   var nameArray = userName.split(" ");
   newNameArray = [];

   // Splits the original string into individual words before sorting the words themselves
   for (var i = 0; i < nameArray.length; i++) {
     newNameArray[i] = nameArray[i].split('').sort().reverse().join('');

     if (i != nameArray.length){
       newNameArray[i] = (newNameArray[i] + " ");
     };
   };

   // return nameArray.sort().join('');
   return newNameArray.sort().reverse().join('').toLowerCase();
 };
// sorts the new list with scrambled words, scrambling the new words as well

// Output
document.writeln("Oh hey, I've fixed your name: ",
sortUserName(), "</br>");
