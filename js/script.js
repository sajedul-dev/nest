
$(function(){

  // -------------------- b to t ------------------------ 

    $(".b-to-t") .click(function(){
      $("body,html").animate({scrollTop:0},1500)
    });

    // ---------------- b to t show/hide and ------------- 

    $(window).scroll(function(){
      let scroll = $(this).scrollTop()
      if(scroll > 300){
        $(".b-to-t").css(
          "opacity" , "1"
        )
      }else{
        $(".b-to-t").css(
          "opacity" , "0"
        )
      }

      // ----------------- nav fixed operetion ---------------- 

      if(scroll > 150){
        $(".inner-nav").addClass("fixed")
      }else{
        $(".inner-nav").removeClass("fixed")
      }
    })

    // ---------------- preloader operation ------------------- 

    $(window).on('load',function(){
      $(".preloader-main").delay(2000).fadeOut(500)
    })

    // ----------- popular mixit up operation ------------ 

    var mixer = mixitup(".product_wrapper", {
      selectors: {
          target: '.mix'
      },
      animation: {
          duration: 300
      }
    });

    // ----------- daily best sels mixit up operation ------------ 

    var mixer = mixitup(".sels_wrapper", {
      selectors: {
          target: '.hello'
      },
      animation: {
          duration: 400
      }
    });


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

