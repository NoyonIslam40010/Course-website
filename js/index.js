!(function ($) {
  $("#mobile_header").hide();
  $('#manu_control').click(function () { 
    $("#mobile_header").show();
    $("#close").click(function () { 
      $("#mobile_header").hide();
    });
  });


  // $("#toggle").click(function (e) { 
  //   $("#show").animate({
  //     width: "toggle",
  //   }, 1000);
  // });
  $('#serch').click(function(){
     $('#serch_border').css({"display":"block"});
   });  $('#close').click(function(){
     $('#serch_border').css({"display":"none"});
   });

  $(window).scroll(function () { 
     if($(window).scrollTop() > 150){
       $(".navbarc").addClass("shadow nav_bar_color fixed-top");

     }
     else{
       $(".navbarc").removeClass("shadow nav_bar_color fixed-top");
      }
  });

  $(".manubar").click(function () { 
    // alert("hellow")
    var bo = $("#main-mnue").html();
    $("#mnus-clone").html(bo);
    $("#mobile-header").show();

  });   

  $("#mobile-header #close").click(function () { 
   $("#mobile-header").hide();
   var got = $("#mnus-clone").html();
  
   $(got).remove();
  });




  // var owl = $(' .Team .owl-carousel');
  // owl.owlCarousel({
  //     items:1,
  //     loop:true,
  //     margin:10,
  //     autoplay:true,
  //     autoplayTimeout:1500,
  //     autoplayHoverPause:true
  // });

  $('.About_us .counter').counterUp({
    delay: 10,
    time: 3000
  });  
  $('.services_3 .counter').counterUp({
    delay: 10,
    time: 3000
  });  $('.testimonial .single_doctor  .cards .counter').counterUp({
    delay: 10,
    time: 3000
  });
  
  // alert();
  $("#show_popu").hide();
  $(" .Gallery .card img").click(function () { 
    var ok = $(this).attr("src");
    $("#show_popu").slideDown(1000);
    $("#show_popu .shows").html('<img src="'+ok+'" />');
  });

  $("#clos").click(function () { 
    $("#show_popu").slideUp();(1000);
  });
  
  $("#trig").click(function () { 
    $("#dropdown-menu").toggleClass("show");
  });
  $("#trig_S").click(function () { 
    $("#search_manue").toggleClass("show");
  });


  $('.baner-sliders').slick({
    vertical: true,
    autoplay:true,
    dots: true,
    appendDots: $('.slick-slider-dots'),
    speed:100,
    arrows:false
    
  });

  $('.testi_slide').slick({
    slidesToShow: 1,
    autoplay:true,
    arrows: false,
    speed:1000,
    dots: true,
  });


  const slider = tns({
    container: '.slide_hero',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: true,    
    autoplay: false,
    speed: 100,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    dots: true
  });


  
  

})(jQuery);