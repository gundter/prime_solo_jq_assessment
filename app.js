/**
 * Created by Prime on 4/23/15.
 */
var counter = 0;

$(document).ready(function(){
   $('button').click(function(){
       counter++;
       $('.container').append("<div class='row' id="+ counter + ">Line #" + counter + "<button class='colorButton'>Change Color</button><button class='removeButton'>Remove</button></div>");

       //Setting up unique ids for the rows so that I can apply the .hide.slideDown() animation for each row
       var added = $("#" + counter);
       added.hide().slideDown("fast");
   });

    $('.container').on("click", ".row .colorButton", function(){
       $(this).parent().toggleClass('selected');
    });

    $('.container').on("click", ".row .removeButton", function(){
       $(this).parent().slideUp("fast", function(){
           $(this).remove();
       });
    });
});