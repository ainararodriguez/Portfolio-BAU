$(document).ready(function(){
// Init Skrollr
var s = skrollr.init();
 
// Refresh Skrollr after resizing our sections
s.refresh($('.homeSlide'));
    
    var ultimaPosicionScroll = $(document).scrollTop();
    $(window).scroll(function(event){
        var posicionScroll = $(document).scrollTop();
        if(posicionScroll>ultimaPosicionScroll && posicionScroll > $(".mainHome").outerHeight()+$("nav").outerHeight()){
            $("nav").css("visibility", "hidden");
            $("nav").css("opacity", "0");
        }
        else{
            $("nav").css("visibility", "visible");
            $("nav").css("opacity", "1");
        }
        ultimaPosicionScroll = posicionScroll;
    })
    $(document).on("scroll", alHacerScroll);
});

function alHacerScroll(event){
    var posicionScroll = $(document).scrollTop();
    ajustarPosicionNavegador(posicionScroll);
    var ultimaPosicionScroll = posicionScroll;
}

function ajustarPosicionNavegador(posicionScroll){
    if (posicionScroll > $(".mainHome").outerHeight()){
        $("nav").css("position", "fixed");
        $(".ultimosProyectos").css("margin-top", "78px");
    }

    else{
        $("nav").css("position", "relative");
        $(".ultimosProyectos").css("margin-top", "0px");
    }
}
