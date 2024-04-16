(function ($) {

/* ---------------------------------------
* Preloader
------------------------------------------ */
$(window).on('load', function () {
  $('.js-preloader').delay(600).fadeOut(500);
});
  
/* ---------------------------------------
* Menu Active Class During Scrolling
------------------------------------------ */
$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  $('.page-section').each(function(i) {
    if ($(this).position().top <= scrollDistance + 80) {
      $('.header-nav > ul > li > a.active').removeClass('active');
      $('.header-nav > ul > li > a').eq(i).addClass('active');
    }
});
}).scroll();

/* ---------------------------------------
* Mobile Menu
------------------------------------------ */
$(".mobile-menu-trigger").on("click", function () {
  $(".mobile-menu-overlay").addClass("active");
  $(".mobile-menu-sidebar").addClass("active");
  $("body").css("overflow", "hidden");
});
$(".mobile-close a").on("click", function () {
  $(".mobile-menu-overlay").removeClass("active");
  $(".mobile-menu-sidebar").removeClass("active");
  $("body").css("overflow", "auto");
});
$(".mobile-menu-overlay").on("click", function () {
  $(".mobile-menu-overlay").removeClass("active");
  $(".mobile-menu-sidebar").removeClass("active");
  $("body").css("overflow", "auto");
});
var mobileMenuContent = $(".header-nav ul").html();
$(".mobile-nav .mobile-menu").append(mobileMenuContent);
$(".mobile-nav .mobile-menu .sub-menu").each(function () {
  $(this).before('<span class="menu-caret-mobile"><i class="fa-solid fa-angle-down"></i></span>');
});
$(".mobile-nav .mobile-menu li a").on("click", function () {
  $(".mobile-menu-overlay").removeClass("active");
  $(".mobile-menu-sidebar").removeClass("active");
  $("body").css("overflow", "auto");
});
$(".menu-caret-mobile").on("click", function () {
  $(this).next().slideToggle();
  $(this).find("i").toggleClass("rotate-caret");
});

/* ---------------------------------------
* Horizontal Accordion
------------------------------------------ */
$(".horizontal-accordion").each(function () {
  var accID = $(this).attr("id");
  $("#" + accID + " .h-acc-item").on("click", function () {
    $("#" + accID + " .h-acc-item").removeClass("active");
    $(this).addClass("active");
  });
});

})(window.jQuery);