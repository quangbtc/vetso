$(document).ready(function(){
    $('#icon-menu').click(function(){
      $('#wp-menu-respon').toggleClass('menu-respon-active'); 
      $('#icon-menu').toggleClass('fa-bars fa-times'); 
    });
    $(window).resize(function(){
        var t = $(window).width();
    if(t>480){
        $('#wp-menu-respon').removeClass('menu-respon-active');
        $('#icon-menu').removeClass('fa-times'); 
        $('#icon-menu').addClass('fa-bars'); 
    }

    });
});