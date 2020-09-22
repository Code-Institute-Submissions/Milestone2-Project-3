$(document).ready(function () {
  $(".invisible").hide();
});

$(".fixtures-btn").click(function(){
    $(this).siblings('p').removeClass('invisible').toggle("fast");
});