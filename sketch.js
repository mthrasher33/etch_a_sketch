var cols = 0;
var str = "";
var getWidth = 460/cols; 
var getHeight= 460/cols;

$(document).ready(function(){
//Set select menu to blank
$("select").prop('selectedIndex', -1)

//Run theWorm function when Worm button is clicked
$("#theWorm").click(function(){
        theWorm();
    });

//Run opacicty function when Opacity button is clicked
$("#opacity").click(function(){
        opacity();
    });

//Run random color function when Random Color button is clicked
$("#randCol").click(function(){
        randCol();
    });
 
//Function that resets the square everytime a button is clicked or new color selected
function setUp (){
        $( ".square" ).remove();
        cols = prompt("How many columns? (Between 1 and 85)");
  if (cols > 0 && cols < 86){
        getWidth = 460/cols;
        getHeight = 460/cols;

      for (var i=0; i < cols*cols; i++){
         $("#container").append("<div class='square'</div>");
          }
        $(".square").css({'height': getHeight + 'px', 'width': getWidth + 'px'});
          }
  else {
        alert("Invalid entry. Please enter a number between 1 and 85");
        }
};
    

//Function that changes square color when hovered over
function hover (){
        $( ".square" ).hover(function() {
        $(this).css({'background-color': str});    
        });
};

//Function that creates the Worm effect
function theWorm(){
       setUp();
        $( ".square" ).hover(function() {
        $( this ).fadeOut( 100 );
        $( this ).fadeIn( 100 );
        });
};
    
//Function that creates the opacity effect
function opacity(){
        setUp();
        $(".square").hover(function(){
        var opc = $(this).css("opacity");
        var newOpc = opc*.8;
        $(this).css({'opacity': newOpc}); 
        });
    };
    
//Function that creates the random color effect    
function randCol(){
        setUp();
        $(".square").hover(function(){
        color1 = (Math.floor(Math.random() * 256));
        color2 = (Math.floor(Math.random() * 256));
        color3 = (Math.floor(Math.random() * 256));
        $(this).css("background-color","rgb("+ color1 + "," + color2 + "," + color3 + ")") ; 
        });
};

//What happens when you choose a color from the select menu
$( "select" ).change(function () {
    str = "";
    $( "select option:selected" ).each(function() {
      setUp();
      str += $( this ).text() + " ";
      });  
    hover(); 
});    
});


                  


    