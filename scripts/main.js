$(document).ready(function(){

  $("#nav_toggle").click( function(event){
      event.preventDefault();
      if ( $('#main_content').hasClass("isDown") ) {
          $("#nav").stop().animate({marginTop:"-100px"}, 200);
      } else {
          $("#nav").stop().animate({marginTop:"0px"}, 200);
      }
      $(this).toggleClass("isDown");
      return false;
  });
});
