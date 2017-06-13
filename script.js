$(document).ready(function() {
    $('#admi').click(function(){
        $("#n1").fadeToggle();
    });
    $('#aca').click(function(){
        $("#n2").fadeToggle();
    });
    $('#new').click(function(){
        $("#n3").fadeToggle();
    });
    $('#abo').click(function(){
        $("#n4").fadeToggle();
    });
    /*$( '' ).hover(
        function(){
            $(this).children('.navdrop').slideDown(200);
        },
        function(){
            $(this).children('.navdrop').slideUp(200);
        }
    );*/
});
