$(document).ready(function(){

  $("#nav_toggle").click(function(){
      if ($('#main_content').hasClass("menu_closed")) {
          $("#main_content").animate({right:"200px"}, 'fast');
          $( "#main_content" ).removeClass( "menu_closed" ).addClass( "menu_open" );
      }
      else if($('#main_content').hasClass("menu_open")){
          $("#main_content").animate({right:"0px"}, 'fast');
          $( "#main_content" ).removeClass( "menu_open" ).addClass( "menu_closed" );
      }
  });
});
