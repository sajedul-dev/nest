
$(function(){

  // -------------------- b to t ------------------------ 

    $(".b-to-t") .click(function(){
      $("body,html").animate({scrollTop:0},1500)
    });

    // ---------------- b to t show/hide ------------- 

    $(window).scroll(function(){
      let scroll = $(this).scrollTop()
      if(scroll > 300){
        $(".b-to-t").css(
          "opacity" , "999"
        )
      }else{
        $(".b-to-t").css(
          "opacity" , "0"
        )
      }
    })



  // ----------------- banner slick slider ----------------- 

  $('.bg_wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    arrows:true,
    dots:false,
    prevArrow:'.left',
    nextArrow:'.right',
  });

});

