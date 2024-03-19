(function($, jQuery) {
    $(document).ready(function() {  
  console.log('hhh');
  $(document).keyup(function(e) {
    if (e.keyCode === 27) $('.modalClose').click(); // esc
  });
  
  
  $('.modalOpen').click(function(event) {
    event.preventDefault();
    $('.a_room_number, .a_options').css('display', 'none');
    $('.modal-overlay').css('display', 'block');
    $('.modal').css('display', 'none');
    var myTid = $(this).attr('data-tid');
    $('#mod' + myTid).css('display', 'block');
    $('.slr_available').css('opacity','1');
  });
  
  $('.modalClose').click(function(event) {
    event.preventDefault();
    $('.a_room_number, .a_options').css('display', 'block');
    $('.modal-overlay').css('display', 'none');
    $('.modal').css('display', 'none');
    $('body').removeClass('modally');
if($("input[type=radio][name='field_slr_room[und]']:checked").val()) { $('.slr_available').css('opacity','.5');}
    $('#edit-field-slr-room--3 input:checked').parent().css('opacity','1');
  });
  
  
  $('.modally, .modal-overlay').click(function(event) {
    if (!$(event.target).closest('.modal').length) {
      event.preventDefault();
      $('.a_room_number, .a_options').css('display', 'block');
      $('body').removeClass('modally');
      $('.modal-overlay').css('display', 'none');
      $('.modal').css('display', 'none');
if($("input[type=radio][name='field_slr_room[und]']:checked").val()) { $('.slr_available').css('opacity','.5');}
      $('#edit-field-slr-room--3 input:checked').parent().css('opacity','1');
    }
  });
  
  $('.a_map_toggle').click(function() {
    $(this).siblings('.a_map').toggle(); 
    $(this).siblings('.a_image').toggle();
    $(this).siblings('.a_location').toggle();
    $(this).siblings('.a_room').toggle();
    $(this).siblings('.a_floor').toggle();
    $(this).siblings('.a_capacity').toggle();
    $(this).siblings('.a_equipment').toggle();
  });
  
        });
  })(jQuery);