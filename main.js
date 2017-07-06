$(document).ready(function(){

  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('.second-line-header ul').toggleClass('active-menu');
  });

});
