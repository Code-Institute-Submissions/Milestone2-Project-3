$(document).ready(function () {
  $(".invisible").hide();
});

$(".fixtures-btn").click(function(){
    $(this).children('p').removeClass('invisible').toggle("fast");
});