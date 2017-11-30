// once the buttons are pressed these functions brings the file that will show 

$(document).ready(function(){
    $("#matches").click(function(){
        $.get("/matches", function(data, status){
		$("#premier").html(data);
        });
    });
});

$(document).ready(function(){
    $("#news").click(function(){
        $.get("/news", function(data, status){
		$("#premier").html(data);
        });
    });
});

$(document).ready(function(){
    $("#standings").click(function(){
        $.get("/standings", function(data, status){
		$("#premier").html(data);
        });
    });
});

$(document).ready(function(){
    $("#lfc").click(function(){
        $.get("/lfc", function(data, status){
		$("#lfc").html(data);
        });
    });
});

$(document).ready(function(){
    $("#chelsea").click(function(){
        $.get("/chelsea", function(data, status){
		$("#cfc").html(data);
        });
    });
});

$(document).ready(function(){
    $("#arsenal").click(function(){
        $.get("/arsenal", function(data, status){
		$("#ac").html(data);
        });
    });
});

$(document).ready(function(){
    $("#hotspur").click(function(){
        $.get("/hotspur", function(data, status){
		$("#thc").html(data);
        });
    });
});

$(document).ready(function(){
    $("#jm").click(function(){
        $.get("/jm", function(data, status){
		$("#jmsolier").html(data);
        });
    });
});


$(document).ready(function(){
    $("#post").click(function(){
    $.post("/welcome",
        {
          firstname: "Welcome",
          lastname: "Friend"
        },
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });
  });
});

