$(document).ready(function () {
  $(".invisible").hide();
});

$(function(){
   $(".fixtures-btn").click(function () {

        if ($(this).text() === 'Show Fixtures') {
            $(this).text('Hide Fixtures');
             $(this).siblings('p').removeClass('invisible').toggle("fast");
            let cardColour = $(this).attr('data-colour');
            $(this).parents(".card").addClass(cardColour);
    
        } else {
            $(this).text('Show Fixtures');
             $(this).siblings('p').addClass('invisible').toggle("fast");
             let cardColour = $(this).attr('data-colour');
             $(this).parents(".card").removeClass(cardColour);
        }
    });
});