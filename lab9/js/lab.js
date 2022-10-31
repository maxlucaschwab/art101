/**
 * Author:    Max Schwab & Thomas Castillo
 * Created:   10.31.22
 *
 * (c) Copyright by Public Domain
 **/

 var outputEl = document.getElementById('output');
 var new1El = document.createElement("p");
 new1El.innerHTML = "Hello World";
 var new2El = document.createElement("p");
 new2El.innerHTML = "Happy Fall Everyone";

 // This code appends the created elements to the main output <div>
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

 // Code below changes the style of <div> elements
 outputEl.style.backgroundColor = "green";
 document.getElementById("Outline").style.borderStyle = "solid";
