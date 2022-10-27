/**
 * Author:    Max Schwab
 * Created:   10.26.22
 *
 * (c) Copyright by Public Domain
 **/

 arr = [72, 5, 64, 9, 11, 2]

 function checkEven(x) {
     return (x % 2 == 0);
 };

 // checkEven tests
 console.log("Test will pass 'true' if 2 is even: " + checkEven(2));

 // My Array
 console.log("My array: " + arr);

 // checking the dispersal of the function
 var result = arr.map(checkEven);
 console.log("This shows the dispersal of the function over the array: " + result);

 var results = arr.map(function(x){
     var results = x ** 0.5
     return results
 });

 console.log("Square root of all array values: " + results);
