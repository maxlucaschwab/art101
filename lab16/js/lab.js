/**
 * Author:    Max Schwab & Thomas Castillo
 * Created:   11.28.22
 *
 * (c) Copyright by Public Domain
 **/


 $.ajax({
   url: "https://xkcd.com/info.0.json",
   type: "GET",
   dataType: "json",
   success: function(data) {
     console.log(data);
     var comicObj = data;
     console.log(comicObj);
     output = $("#output");
     output.append("<h1>" + comicObj.title + "</h1>");
     console.log(comicObj.img);
     output.append('<img id="comic" alt ="' + comicObj.alt + '" src="' + comicObj.img + '">');
     console.log(comicObj.title);
   },
   error: function(jqXHR, textStatus, errorThrown) {
     console.log("Error:", textStatus, errorThrown);
   }
 });
