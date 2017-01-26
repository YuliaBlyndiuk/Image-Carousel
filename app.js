$(document).ready(function(){
  //when any img (class /thumbnail) is getting .click -ed on
  //overwrite .hero img src with this. .thumbnail img src
  $(".thumbnail img").click(function(){
  
    //find the right attribute that is supposed to be replaced
    var $oldLink = $('.hero img').attr('src');
    var $newLink = $(this).attr('src');
    
    //overwrite 
    $('.hero img').attr('src', $newLink);
  });      
});

