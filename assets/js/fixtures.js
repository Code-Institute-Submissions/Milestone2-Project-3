$(document).ready(function () {
  $(".invisible").hide();
});

/*$(".fixtures-btn").click(function(){
    $(this).siblings('p').removeClass('invisible').toggle("fast");
    let cardColour = $(this).attr('data-colour') ;*/
   /* $(this).addClass(cardColour)*/
    /*$(this).parents(".card").addClass(cardColour)
});*/
    

$(".card").mouseenter(function(){
    $(this).find('p').removeClass('invisible').toggle("fast");
    let cardColour = $(this).find('a').attr('data-colour') ;
   $(this).addClass(cardColour)
    
});

$(".card").mouseleave(function(){
    $(this).find('p').addClass('invisible').toggle("fast");
    let cardColour = $(this).find('a').attr('data-colour') ;
    $(this).removeClass(cardColour)
}); 

