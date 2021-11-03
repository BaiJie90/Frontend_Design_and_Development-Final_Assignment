var nav = $('.Menubalk');

$(window).scroll(function(e){
    if(nav.offset().top !== 0){
        if(!nav.hasClass('shadow')){
            nav.addClass('shadow');
        }
    }else{
        nav.removeClass('shadow');
    }
});