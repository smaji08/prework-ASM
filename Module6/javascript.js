document.getElementById("button1").onclick = function() {growFunction()};

    function growFunction() {
        document.getElementById("box").style.height = "300px";
        document.getElementById("box").style.width = "300px";
    }

document.getElementById("button2").onclick = function() {colorFunction()};

    function colorFunction() {
        document.getElementById("box").style.backgroundColor = "blue";
        
    }


document.getElementById("button4").onclick = function() {resetFunction()};

    function resetFunction() {
        var boxReset = document.getElementById("box").style;

        boxReset.height = "150px";
        boxReset.width = "150px";
        boxReset.backgroundColor = "yellow";
        boxReset.margin = "25px";
        boxReset.fontSize = "16px"; 
        boxReset.left = "0px";
        boxReset.color = "red";
    }

   
$(document).ready(function() {
    $("#button3").click(function() {
        //$("#box").fadeToggle(2000);
        $("#box").fadeTo(3000,0.10).fadeTo(2000,1);
          
    });
});

$(document).ready(function() {
    $("#button5").click(function(){
        $("#box").slideUp(2000).slideDown(2000);
    });
});

$(document).ready(function() {
    $("#button6").click(function(){

        $("#box").css({
            "background-color": "Red",
            "color": "Black",
        });

        $("#box").animate({
            height: '450px',
            width: '450px',
            left: '100px',
            opacity: '0.6',
            fontSize: '60px'
        },2000);

        $("#box").animate({
            height: '250px',
            width: '250px',
            left: '15px',
            margin: '35px',
            opacity: '1',
            fontSize: '25px'
        },2000);

    });

});




