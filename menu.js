$(document).ready(function(){

    $('.menuToggle').on('click', function() {
       $('.header-menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});