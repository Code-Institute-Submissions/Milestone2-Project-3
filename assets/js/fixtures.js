$(document).ready(function () {
  $(".invisible").hide();
});

$(".fixtures-btn").click(function(){
    $(this).siblings('p').removeClass('invisible').toggle("fast");
       
});
    

 $(".card").mouseenter(function(){
    $(this).addClass('testbackground')
});
$(".card").mouseleave(function(){
    $(".card").removeClass('testbackground')
}); 