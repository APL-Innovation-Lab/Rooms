(function($, jQuery) {
	$(document).ready(function() {
	console.log('slr js');
	if (performance.navigation.type == 2) {
	  alert('reloading page..');
	  location.reload(true);
	}
	  var all_rooms ='<div class="all-room-options view-content"> <div class="room-option option-3787"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3787"> <img src="/library/slr-207.jpg" alt="table with 8 chairs and a TV against a burgandy wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>207</strong> (Capacity: 8)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3787">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3787">Info</a></span></span></span><span id="mod3787" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-207.jpg" alt="table with 8 chairs and a TV against a burgandy wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor207.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 207</span> <span class="a_floor">Floor: 2nd</span> <span class="a_capacity">Maximum Capacity: 8</span> <span class="a_equipment"><ul><li>TV connections for:<ul><li>AirPlay for Apple devices</li><li>HDMI connection. Please bring any adapter you might need.</li></ul></li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3788"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3788"> <img src="/library/slr-408.jpg" alt="Round table with 4 chairs and a TV against a burgandy wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>408</strong> (Capacity: 4)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3788">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3788">Info</a></span></span></span><span id="mod3788" class="option-modal modal" style="display: none;"> <span class="a_image" style=""> <img src="/library/slr-408.jpg" alt="Round table with 4 chairs and a TV against a burgandy wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map" style="display: none;"> <img src="/library/acefloor408.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location" style="">Central Library</span> <span class="a_room" style="">Shared Learning - 408</span> <span class="a_floor" style="">Floor: 4th</span> <span class="a_capacity" style="">Maximum Capacity: 4</span> <span class="a_equipment" style=""><ul><li>TV connections for:<ul><li>AirPlay for Apple devices</li><li>HDMI connection. Please bring any adapter you might need.</li></ul></li><li>Whiteboard</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3789"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3789"> <img src="/library/slr-409.jpg" alt="Round table with 4 chairs and a TV against a burgandy wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>409</strong> (Capacity: 4)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3789">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3789">Info</a></span></span></span><span id="mod3789" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-409.jpg" alt="Round table with 4 chairs and a TV against a burgandy wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor409.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 409</span> <span class="a_floor">Floor: 4th</span> <span class="a_capacity">Maximum Capacity: 4</span> <span class="a_equipment"><ul><li>TV connections for:<ul><li>AirPlay for Apple devices</li><li>HDMI connection. Please bring any adapter you might need.</li></ul></li><li>Whiteboard</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3790"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3790"> <img src="/library/slr-471.jpg" alt="Rectangular table with 10 chairs and a TV on a white wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>471</strong> (Capacity: 10)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3790">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3790">Info</a></span></span></span><span id="mod3790" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-471.jpg" alt="Rectangular table with 10 chairs and a TV on a white wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor471.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 471</span> <span class="a_floor">Floor: 4th</span> <span class="a_capacity">Maximum Capacity: 10</span> <span class="a_equipment"><ul><li>TV connections for:<ul><li>AirPlay for Apple devices</li><li>HDMI connection. Please bring any adapter you might need.</li></ul></li><li>Whiteboard</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3792"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3792"> <img src="/library/slr-509b.jpg" alt="Round table with 4 chairs and a TV against a burgandy wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>508</strong> (Capacity: 4)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3792">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3792">Info</a></span></span></span><span id="mod3792" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-509b.jpg" alt="Round table with 4 chairs and a TV against a burgandy wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor508.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 508</span> <span class="a_floor">Floor: 5th</span> <span class="a_capacity">Maximum Capacity: 4</span> <span class="a_equipment"><ul><li>TV connections for:<ul><li>AirPlay for Apple devices</li><li>HDMI connection. Please bring any adapter you might need.</li></ul></li><li>Whiteboard</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3793"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3793"> <img src="/library/slr-509.jpg" alt="Round table with 4 chairs and a TV against a burgandy wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>509</strong> (Capacity: 4)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3793">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3793">Info</a></span></span></span><span id="mod3793" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-509.jpg" alt="Round table with 4 chairs and a TV against a burgandy wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor509.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 509</span> <span class="a_floor">Floor: 5th</span> <span class="a_capacity">Maximum Capacity: 4</span> <span class="a_equipment"><ul><li>TV connections for:<ul><li>AirPlay for Apple devices</li><li>HDMI connection. Please bring any adapter you might need.</li></ul></li><li>Whiteboard</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3794"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3794"> <img src="/library/slr-522.jpg" alt="Rectangular table with 10 chairs and a TV on a white wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>522</strong> (Capacity: 10)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3794">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3794">Info</a></span></span></span><span id="mod3794" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-522.jpg" alt="Rectangular table with 10 chairs and a TV on a white wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor522.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 522</span> <span class="a_floor">Floor: 5th</span> <span class="a_capacity">Maximum Capacity: 10</span> <span class="a_equipment"><ul><li>Whiteboard</li><li>Note: the display monitor in this room is unavailable until further notice.</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3796"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3796"> <img src="/library/slr-531.jpg" alt="Rectangular table with 10 chairs and a TV on a white wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>531</strong> (Capacity: 10)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3796">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3796">Info</a></span></span></span><span id="mod3796" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-531.jpg" alt="Rectangular table with 10 chairs and a TV on a white wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor531.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 531</span> <span class="a_floor">Floor: 5th</span> <span class="a_capacity">Maximum Capacity: 10</span> <span class="a_equipment"><ul><li>TV connections for:<ul><li>AirPlay for Apple devices</li><li>HDMI connection. Please bring any adapter you might need.</li></ul></li><li>Whiteboard</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3797"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3797"> <img src="/library/slr-605.jpg" alt="Rectangular table with 8 chairs and a TV on a white wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>605</strong> (Capacity: 8)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3797">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3797">Info</a></span></span></span><span id="mod3797" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-605.jpg" alt="Rectangular table with 8 chairs and a TV on a white wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor605.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 605</span> <span class="a_floor">Floor: 6th</span> <span class="a_capacity">Maximum Capacity: 8</span> <span class="a_equipment"><ul><li>TV connections for:<ul><li>AirPlay for Apple devices</li><li>HDMI connection. Please bring any adapter you might need.</li></ul></li><li>Whiteboard</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3798"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3798"> <img src="/library/slr-613.jpg" alt="Rectangular table with 8 chairs and a TV on a teal wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>613</strong> (Capacity: 8)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3798">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3798">Info</a></span></span></span><span id="mod3798" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-613.jpg" alt="Rectangular table with 8 chairs and a TV on a teal wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor613.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 613</span> <span class="a_floor">Floor: 6th</span> <span class="a_capacity">Maximum Capacity: 8</span> <span class="a_equipment"><ul><li>TV connections for:<ul><li>AirPlay for Apple devices</li><li>HDMI connection. Please bring any adapter you might need.</li></ul></li><li>Whiteboard</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3799"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3799"> <img src="/library/slr-614.jpg" alt="Rectangular table with 8 chairs and a TV on a teal wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>614</strong> (Capacity: 8)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3799">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3799">Info</a></span></span></span><span id="mod3799" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-614.jpg" alt="Rectangular table with 8 chairs and a TV on a teal wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor614.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 614</span> <span class="a_floor">Floor: 6th</span> <span class="a_capacity">Maximum Capacity: 8</span> <span class="a_equipment"><ul><li>TV connections for:<ul><li>AirPlay for Apple devices</li><li>HDMI connection. Please bring any adapter you might need.</li></ul></li><li>Whiteboard</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3800"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3800"> <img src="/library/slr-615.jpg" alt="SLR 615" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>615</strong> (Capacity: 8)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3800">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3800">Info</a></span></span></span><span id="mod3800" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-615.jpg" alt="SLR 615" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor615.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 615</span> <span class="a_floor">Floor: 6th</span> <span class="a_capacity">Maximum Capacity: 8</span> <span class="a_equipment"><ul><li>TV connections for:<ul><li>AirPlay for Apple devices</li><li>HDMI connection. Please bring any adapter you might need.</li></ul></li><li>Whiteboard</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> <div class="room-option option-3801"><div><div><span class="option-thumbnail"><span class="room-select room-image" data-tid="3801"> <img src="/library/slr-621.jpg" alt="Rectangular table with 10 chairs and a TV on a teal wall" loading="lazy" typeof="Image" width="580" height="435"></span> <span class="a_room_number" style="display: block;"><strong>621</strong> (Capacity: 10)</span><span class="a_options" style="display: block;"><span class="a_select"><span class="usa-button room-select" data-tid="3801">Select</span></span><span class="a_more"><a class="modalOpen usa-button usa-button-outline" data-tid="3801">Info</a></span></span></span><span id="mod3801" class="option-modal modal" style="display: none;"> <span class="a_image"> <img src="/library/slr-621.jpg" alt="Rectangular table with 10 chairs and a TV on a teal wall" loading="lazy" typeof="Image" width="580" height="435"></span><span class="a_map"> <img src="/library/acefloor621.png" alt="" loading="lazy" typeof="Image" width="464" height="600"></span><span class="a_location">Central Library</span> <span class="a_room">Shared Learning - 621</span> <span class="a_floor">Floor: 6th</span> <span class="a_capacity">Maximum Capacity: 10</span> <span class="a_equipment"><ul><li>Whiteboard</li><li>Note: the display monitor in this room is unavailable until further notice.</li></ul></span><a class="a_map_toggle">Map</a><a class="modalClose" data-tid="3788">Back</a></span><span class="modal-overlay" style="display: none;"></span></div></div></div> </div>';
  
	$(document).keyup(function(e) {
	if (e.keyCode === 27) $('.modalClose').click(); // esc
	});
	
	
	
	
	  var which_date = $('#edit-reservation-date');
	
		  var queryString = window.location.search;
		  var pathArray = window.location.pathname.split('/');
		  var urlParams = new URLSearchParams(queryString);
		  if(urlParams.get('date')) {
			  which_date.val(urlParams.get('date'))
		  }
		if(!which_date.val()) {
			which_date.val(dayjs().format('YYYY-MM-DD'));
		}
	var is_admin = 0;
	$.getJSON("/roles.json?t=" + Date.now(), function(json9) {
	  //  get_special_dates();
	  var my_roles = [];
	  var k;
	  for (k = 0; k < json9.length; k++) {
		j_roles = json9[k].roles;
		my_roles.push(j_roles);
			   if ( j_roles.includes( 'slr_admin' )  || j_roles.includes( 'administrator' )  || j_roles.includes( 'internal_group_representative' ) ) {
	//    if (j_roles.includes('slr_admin')) {
		  var is_admin = 1;
		  console.log('is admin');
		} else {
		  console.log('not admin');
		}
	  }
	  var max_date = dayjs().add(2, 'weeks');
	  var min_date = dayjs().add(2, 'hours');
	
	
	  which_date.attr('min', min_date.format('YYYY-MM-DD'));
	  // $( document ).attr( "title", "Request a Shared Learning Room | Austin Public Library" );
	  $('#edit-meeting-topic').after('<div class="form-item__description">Topic will appear in calendar</div>');
	  if (is_admin != "1") {
		// console.log('is admin? no : ' + is_admin);
		which_date.attr('max', max_date.format('YYYY-MM-DD'));
		$("#edit-duration option[value='180']").remove();
		$("#edit-duration option[value='240']").remove();
		$("#edit-duration option[value='300']").remove();
		$("#edit-duration option[value='360']").remove();
		$("#edit-duration option[value='420']").remove();
		$("#edit-duration option[value='480']").remove();
		$("#edit-duration option[value='540']").remove();
		$("#edit-duration option[value='600']").remove();
		$("#edit-duration option[value='660']").remove();
		$("#edit-duration option[value='720']").remove();
		$("#edit-duration option[value='780']").remove();
		$("#edit-duration option[value='840']").remove();
		$("#edit-duration option[value='900']").remove();
	  } else {
		//  console.log('is admin? yes: ' + is_admin);
		$("#edit-duration option").css('display', 'block');
	  }
	  var how_many = $('#edit-how-many-people-').val();
	  var opening_hour = 9;
	  //console.log('line 75 oh: ' + opening_hour);
	  var closing_hour = 20;
	  var u = dayjs(which_date.val());
	  var round_interval = 15;
	  var intervals = Math.floor(min_date.minute() / round_interval);
	  var minutesToRound = min_date.minute() % round_interval;
	  var minutesRounded = minutesToRound > round_interval / 2 ? round_interval : 0;
	  var minutes = intervals * round_interval + minutesRounded;
	  // min_date.minute(minutes);
	  // min_date.second(0);
	  var max_sim = 1;
	  var f_time = 'h:mm A';
	  var f_date = 'dddd, YYYY-MM-DD';
	  var f_date2 = 'dddd, MMMM D';
	  var pp_format = 'YYYY-MM-DD H:mm';
	  var existingStarts_room = [];
	  var existingStarts_start = [];
	  var existingStarts_end = [];
	  var busy = [];
	
	async function update_avail(text) {
		var myy_datess = "/slr_dates2.json?date=" + dayjs($('#edit-reservation-date').val()).format('YYYY-MM-DD') + "&t=" + Date.now();
		 // console.log('inside update_avail ' + text);
		 // console.log(myy_datess);
	await  $.getJSON(myy_datess, function(json) {
		  var k;
		  for (k = 0; k < json.length; k++) {
			j_room = json[k].room;
			j_start = json[k].start;
			j_end = json[k].end;
			j_name = json[k].name;
			existingStarts_room.push(j_room);
			existingStarts_start.push(j_start);
			existingStarts_end.push(j_end);
		  }
		});
	  }
	 // console.log('updating..');
	  update_avail(dayjs($('#edit-reservation-date').val()).format('YYYY-MM-DD'));
	  var max_busy = 1;
	  var disabledDays = [];
	
	  function get_special_dates() {
		disabledDays = [];
		existingStarts_start = [];
		$.getJSON("/library/json/holidays.json", function(json) {
		  var k;
		  for (k = 0; k < json.length; k++) {
			j_date = json[k].field_special_date;
			j_early = json[k].field_early_closing;
			if (j_early) {
			  //console.log('early closing day, so adding blocking start times beginning at 18:00');
			  var early_date = dayjs(j_date + ' ' + j_early);
			  existingStarts_start.push(early_date.format(pp_format));
			  var add_1 = dayjs(early_date).add(30, 'minutes').format(pp_format);
			  existingStarts_start.push(add_1);
			  var add_2 = dayjs(early_date).add(60, 'minutes').format(pp_format);
			  existingStarts_start.push(add_2);
			  var add_3 = dayjs(early_date).add(90, 'minutes').format(pp_format);
			  existingStarts_start.push(add_3);
			  var add_4 = dayjs(early_date).add(120, 'minutes').format(pp_format);
			  existingStarts_start.push(add_4);
			  var add_5 = dayjs(early_date).add(150, 'minutes').format(pp_format);
			  existingStarts_start.push(add_5);
			} else {
			  // console.log('not an early closing day');
			  disabledDays.push(j_date);
			}
		  }
		});
	   // console.log('done checking special dates...');
	  }
	  var submit_button = $('#edit-submit');
	  submit_button.val('Submit Request');
	  submit_button.prop('disabled', true);
	  //var date_wrapper = $('.form-item--reservation-date');
	  var date_wrapper = $('.form-item-reservation-date');
	  var button_wrapper = $('#edit-actions');
	  var date1 = $('#edit-time-start-date');
	  var date2 = $('#edit-time-end-date');
	  var time1 = $('#edit-time-start-time');
	  var time2 = $('#edit-time-end-time');
	  date_wrapper.append('<label id="avail_label" for="pp_avail_wrapper" class="form-item__label js-form-required form-required">Available rooms and times:</label><div id="avail_slots"><div id="rez_date"><a class="new_check" href="#">Check availability...</a></div></div>');
	  
	  // SLR Alert
	var slrAlert = document.querySelector('#block-views-block-slr-alert-block-1');
	if(slrAlert) {
		
	
	var slrAlertClone = slrAlert.cloneNode(true);
	var slrTitle = document.querySelector('#avail_label');
	if(slrTitle) {
	slrTitle.after(slrAlertClone);
		}}
	// SLR alert (end)
	  
	  
	  var avail_slots = $('#avail_slots');
	
	async function get_room(how_many) {
		var h_date = dayjs($('#edit-reservation-date').val());
		await update_avail('4abb');
		avail_slots.html('<div id="rez_date"></div>');
		avail_slots.prepend(all_rooms);
	
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
	});
	
	
	$('.modally, .modal-overlay').click(function(event) {
	if (!$(event.target).closest('.modal').length) {
	event.preventDefault();
	$('.a_room_number, .a_options').css('display', 'block');
	$('body').removeClass('modally');
	$('.modal-overlay').css('display', 'none');
	$('.modal').css('display', 'none');
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
	
		var rooms_array = [3788, 3789, 3790, 3792, 3793, 3794, 3796, 3798, 3799, 3800, 3801];
		var rooms_names = ['Shared Learning - 408 (Capacity: 4)', 'Shared Learning - 409 (Capacity: 4)', 'Shared Learning - 471 (Capacity: 10)', 'Shared Learning - 508 (Capacity: 4)', 'Shared Learning - 509 (Capacity: 4)', 'Shared Learning - 522 (Capacity: 10)', 'Shared Learning - 531 (Capacity: 10)', 'Shared Learning - 613 (Capacity: 8)', 'Shared Learning - 614 (Capacity: 8)', 'Shared Learning - 615 (Capacity: 8)', 'Shared Learning - 621 (Capacity: 10)'];
		var rooms_capac = [4, 4, 10, 4, 4, 10, 10, 8, 8, 8, 10];
		if (how_many > 8) {
		  // just 10s
	
		  var rooms_array = [3790, 3794, 3796, 3801];
		  var rooms_names = ['Shared Learning - 471 (Capacity: 10)', 'Shared Learning - 522 (Capacity: 10)', 'Shared Learning - 531 (Capacity: 10)', 'Shared Learning - 621 (Capacity: 10)']; 
		  var rooms_capac = [10, 10, 10, 10];
		} else if (how_many > 4) {
		  // just 8s and 10s
		  var rooms_array = [3790, 3794, 3796, 3798, 3799, 3800, 3801];
		  var rooms_names = ['Shared Learning - 471 (Capacity: 10)', 'Shared Learning - 522 (Capacity: 10)', 'Shared Learning - 531 (Capacity: 10)', 'Shared Learning - 613 (Capacity: 8)', 'Shared Learning - 614 (Capacity: 8)', 'Shared Learning - 615 (Capacity: 8)', 'Shared Learning - 621 (Capacity: 10)'];
		  var rooms_capac = [10, 10, 10, 8, 8, 8, 10];
		}
		$('.room-option').css('display','none');
		for (k = 0; k < rooms_array.length; k++) {
		  $('.option-' + rooms_array[k]).append('<div class="room_wrapper" id="avail_slot_wrapper_' + rooms_array[k] + '"><div class="room_name">' + rooms_names[k] + '<br>' + h_date.format(f_date2) + '</div><div id="avail_slot_' + rooms_array[k] + '"></div><a data-room="' + rooms_array[k] + '" class="check_date material-icons">schedule</a><a data-room="' + rooms_array[k] + '" class="check_date check">Check for available reservation times...</a></div>');
		$('.option-' + rooms_array[k]).css('display','inline-block');
		}
		$('.check_date.check').click(function(e) {
		  var which_date = $('#edit-reservation-date');
		  var this_date = dayjs(which_date.val());
		  var room_id = $(this).attr('data-room');
		  //update_avail('2a');
		  e.preventDefault();
		  availStarts = [];
		  submit_button.prop('disabled', true);
		  check_dates(this_date, room_id);
		  date1.val($(this).attr('data-date'));
		  time1.val($(this).attr('data-time'));
		  date2.val($(this).attr('data-date'));
		  time2.val($(this).attr('data-time2'));
		  $('.pp_avail').css('opacity', '1');
		});
	
		$('.check_date.check').click();
	  }
	  var avail_wrapper = $('#pp_avail_wrapper');
	  var availStarts = [];
	  var e_date = $('#edit-time-start-date');
	  var e_time = $('#edit-time-start-time');
	  var e_time2 = $('#edit-time-end-time');
	  if (e_date.val() && e_time.val()) {
		var ee_date = dayjs(e_date.val() + ' ' + e_time.val());
		var duration = $('#edit-duration').val();
		var ee_date2 = dayjs(ee_date).add(duration, 'minutes').format(f_time);
		avail_wrapper.prepend('<a class="e_date pp_avail active" data-time="' + e_time.val() + '" data-time2="' + e_time2.val() + '" data-date="' + e_date.val() + '">' + ee_date.format(f_time) + ' to ' + ee_date2 + '</a><br>');
		submit_button.prop('disabled', false);
	  }
	  var room_id = $('#edit-room').val();
	
	async         function check_dates(input_date, room_id) {
		//var room_id = $('#edit-room').val();
		if (!duration) {
		  var duration = $('#edit-duration').val();
		}
		var ch_date = input_date;
		var messages = [];
		
		
		// comment out these 3 lines and the closing bracket "end not Sunday" effective September 11
		/*
		if (ch_date.format('d') == 0) {
		  messages.push('The Shared Learning Rooms are not available on Sundays.');
		} else { // not a Sunday
		*/   
			
			
		  if ((disabledDays.indexOf(ch_date.format('YYYY-MM-DD'))) >= 0) { // appears in disabledDays array
		   // console.log('is holiday');
		  } else { //not a holiday date
			if (ch_date.isAfter(max_date, 'day') && (is_admin < 1)) {
			  //     console.log(ch_date.format('dddd, YYYY-MM-DD ' + f_time) + ': after maximum date');
			  //    console.log('is_admin? ' + is_admin);
			} else {
			  if (ch_date.isBefore(min_date)) {
				//    console.log(ch_date.format('dddd, YYYY-MM-DD ' + f_time) + ': before minimum date');
				var ch_date2 = ch_date.add(15, 'minutes');
				check_dates(ch_date2, room_id);
			  } else {
				  
				  if (ch_date.format('d') == '0' || ch_date.format('d') == '5' || ch_date.format('d') == '6') {
					closing_hour = 17;
				  } else {
					closing_hour = 20;
				  }
	
				  if (ch_date.format('d') == '6') {
					opening_hour = 10;
			   //     console.log('line 308 oh: ' + opening_hour);
				  } else if (ch_date.format('d') == '0') { // open at noon on Sunday
					opening_hour = 12;
			  //      console.log('line 312 oh: ' + opening_hour);
				  } else {
					opening_hour = 9;
			   //     console.log('line 315 oh: ' + opening_hour);
				  }
				  
				  
				if (ch_date.format('H') < opening_hour) { // before opening hour
				  //      console.log(ch_date.format('dddd, YYYY-MM-DD ' + f_time) + ': before opening hour');
				  var ch_date2 = ch_date.hour(opening_hour).minute(0);
				  check_dates(ch_date2, room_id);
				} else { //after opening hour
				  var ch_date3 = ch_date.add(duration, 'minutes');
	
				  var ch_date4 = ch_date.hour(closing_hour).minute(1);
				  if (ch_date3.isAfter(ch_date4)) {
					//  var ch_date2 = ch_date.add(1, 'day').hour(opening_hour).minute(0);
					//  check_dates(ch_date2, room_id);
					//      suggest_available(availStarts, room_id);
				  } else {
					my_start_test = ch_date;
					my_end_test = my_start_test.add(duration, 'minutes');
					var my_overlap = 0;
					for (var p = 0; p < existingStarts_start.length; p++) {
					  //bool overlap = m.start < e.end && e.start < m.end;
					  if (my_start_test.isBefore(existingStarts_end[p]) && my_end_test.isAfter(existingStarts_start[p])) { // overlaps an existing rez
						if (existingStarts_room[p] == room_id) {
						  my_overlap = 1;
						}
					  }
					}
					if (my_overlap == 1) { // appears in existingStarts array
					  var ch_date2 = ch_date.add(15, 'minutes');
					  check_dates(ch_date2, room_id);
					} else {
					  availStarts.push(ch_date.format(pp_format));
					  if (ch_date3.isBefore(ch_date4)) {
						var ch_date2 = ch_date.add(15, 'minutes');
						check_dates(ch_date2, room_id);
					  }
					}
				  }
				}
			  }
			}
		  }
			
			
	  //  } // end not Sunday
		
		if(availStarts) {
						suggest_available(availStarts, room_id);
		}
	  }
	  $('.check_date').click(function(e) {
		var which_date = $('#edit-reservation-date');
		var this_date = dayjs(which_date.val());
		var room_id = $(this).attr('data-room');
		e.preventDefault();
		availStarts = [];
		submit_button.prop('disabled', true);
		check_dates(this_date, room_id);
		date1.val($(this).attr('data-date'));
		time1.val($(this).attr('data-time'));
		date2.val($(this).attr('data-date'));
		time2.val($(this).attr('data-time2'));
		$('.pp_avail').css('opacity', '1');
	  });
	  var how_many1 = $('#edit-how-many-people-');
	  which_date.change(function(e) {
		console.log('date selected');
		if (dayjs(which_date.val()).isValid()) {
		  var the_date1 = dayjs(which_date.val());
		  var ppwf_format = 'YYYY-MM-DD';
		  var the_date = the_date1.format(ppwf_format);
		  if ( the_date == '2023-12-24' || the_date == '2023-12-25' || the_date == '2023-12-26' || the_date == '2023-12-31'  || the_date == '2024-01-01' || the_date == '2024-01-14' || the_date == '2024-01-15' || the_date == '2024-02-18' || the_date == '2024-02-19' || the_date == '2024-03-22' || the_date == '2024-03-31' || the_date == '2024-05-26' || the_date == '2024-05-27' || the_date == '2024-06-19' || the_date == '2024-07-04' || the_date == '2024-08-16' || the_date == '2024-09-01' || the_date == '2024-09-02' || the_date == '2024-11-10' || the_date == '2024-11-11' || the_date == '2024-11-28' || the_date == '2024-11-29' || the_date == '2024-12-13' || the_date == '2024-12-24' || the_date == '2024-12-25' ) {          alert("The Library is closed on that day. Please select another date.");
			which_date.val('');
		  } else {
			//console.log('max_date = ' + max_date.format( ppwf_format ));
			var wt_date = dayjs(which_date.val());
			//var wt_date2 = dayjs( which_date.val() );
			//console.log('wt_date = ' + wt_date2.format( ppwf_format ));
		   // console.log('admin?' + is_admin);
			if (wt_date.isAfter(max_date) && (is_admin != 1)) {
			  alert('Please select a date within the next 2 weeks');
			  which_date.val('');
			} else {
			  //update_avail('newly updated');
			   get_room(how_many1.val());
			  availStarts = [];
			  submit_button.prop('disabled', true);
			  // $('.pp_avail, .pp_more').css('opacity', '0');
			  date1.val($(this).attr('data-date'));
			  time1.val($(this).attr('data-time'));
			  date2.val($(this).attr('data-date'));
			  time2.val($(this).attr('data-time2'));
			}
		  }
		}
	  });
	  $('.new_check').click(function(e) {
		e.preventDefault();
		 get_room(how_many1.val());
		availStarts = [];
		submit_button.prop('disabled', true);
		// $('.pp_avail, .pp_more').css('opacity', '0');
		date1.val($(this).attr('data-date'));
		time1.val($(this).attr('data-time'));
		date2.val($(this).attr('data-date'));
		time2.val($(this).attr('data-time2'));
	  });
	  how_many1.change(function(e) {
		var my_people = how_many1.val();
		if (my_people > 10) {
		  alert('The maximum capacity is 10.');
		} else {
		  if ($.isNumeric(my_people)) {
			 get_room(how_many1.val());
			availStarts = [];
			submit_button.prop('disabled', true);
			// $('.pp_avail, .pp_more').css('opacity', '0');
			date1.val($(this).attr('data-date'));
			time1.val($(this).attr('data-time'));
			date2.val($(this).attr('data-date'));
			time2.val($(this).attr('data-time2'));
		  } else {
			alert('Please indicate a number between 1 and 10.');
		  }
		}
	  });
	
	async         function suggest_available(pp_date, room_id) {
		var duration = $('#edit-duration').val();
		var avail_wrapper = $('#avail_slot_' + room_id);
		avail_wrapper.empty();
		//  update_avail();
		for (var p = 0; p < pp_date.length; p++) {
		  var s_date = dayjs(pp_date[p]);
		  var s_date2 = dayjs(s_date).add(duration, 'minutes');
		  avail_wrapper.append('<a class="pp_avail" data-room="' + room_id + '" data-time="' + s_date.format('HH:mm:ss') + '" data-time2="' + s_date2.format('HH:mm:ss') + '" data-date="' + s_date.format('YYYY-MM-DD') + '">' + s_date.format(f_time) + ' to ' + s_date2.format(f_time) + '</a>');
		}
		if (!pp_date.length) {
		  avail_wrapper.append('<div class="no_luck">No time slots available.</div>');
		}
		$('.pp_avail').click(function() {
		  $('.pp_avail').removeClass('active');
		  $('.pp_avail').addClass('inactive');
		  $('.room_wrapper').addClass('inactive');
		  $('.room-option').addClass('inactive');
	
		  $(this).removeClass('inactive');
		  $(this).parent().parent().parent().removeClass('inactive');
		  $(this).parent().parent().removeClass('inactive');
	
		  $(this).addClass('active');
		  $(this).parent().parent().addClass('active');
		  $(this).parent().parent().parent().addClass('active');
	
		  submit_button.prop('disabled', false);
		  $('#edit-room').val($(this).attr('data-room'));
		  $('#rez_date').html('<a class="new_check" href="#">Select a different room and time...</a>');
		//  console.log($(this).attr('data-date'));
		  //if
		  $('#edit-reservation-date').val($(this).attr('data-date'));
		  date1.val($(this).attr('data-date'));
		  date2.val($(this).attr('data-date'));
		  time1.val($(this).attr('data-time'));
		  time2.val($(this).attr('data-time2'));
		  $('.new_check').click(function(e) {
			e.preventDefault();
			 get_room(how_many1.val());
			availStarts = [];
			submit_button.prop('disabled', true);
			// $('.pp_avail, .pp_more').css('opacity', '0');
			date1.val($(this).attr('data-date'));
			time1.val($(this).attr('data-time'));
			date2.val($(this).attr('data-date'));
			time2.val($(this).attr('data-time2'));
		  });
		});
		// avail_wrapper.append('<br><a href="#" data-room="' + room_id + '" class="pp_more"><span class="material-icons">update</span><span class="check">Show more available times...</span></a><br>');
		// avail_wrapper.append('<a href="#" class="pp_less2"><span class="material-icons">schedule</span>Check for soonest available times...</a>');
		$('.pp_more').css('opacity', '1');
		$('#edit-room').change(function() {
		  availStarts = [];
		  submit_button.prop('disabled', true);
		  //  $('.pp_avail, .pp_more').css('opacity', '0');
		  date1.val($(this).attr('data-date'));
		  time1.val($(this).attr('data-time'));
		  date2.val($(this).attr('data-date'));
		  time2.val($(this).attr('data-time2'));
		});
		$('#edit-duration').change(function(e) {
		  if (e.handled !== true) {
			e.handled = true;
			//var duration = $('#edit-duration').val();
			 get_room(how_many1.val());
			//   $('.check_date.check').click(); 
			availStarts = [];
			submit_button.prop('disabled', true);
			// $('.pp_avail, .pp_more').css('opacity', '0');
			//  date1.val($(this).attr('data-date'));
			// time1.val($(this).attr('data-time'));
			// date2.val($(this).attr('data-date'));
			// time2.val($(this).attr('data-time2'));
			return;
		  }
		});
		$('.pp_less2').click(function(e) {
		  e.preventDefault();
		  availStarts = [];
		  submit_button.prop('disabled', true);
		  check_dates(this_date, room_id);
		  date1.val($(this).attr('data-date'));
		  time1.val($(this).attr('data-time'));
		  date2.val($(this).attr('data-date'));
		  time2.val($(this).attr('data-time2'));
		  $('.pp_avail').css('opacity', '1');
		});
		$('.pp_more').click(function(e) {
		  e.preventDefault();
		  var room_id = $(this).attr('data-room');
		  var last_av = availStarts.length - 1;
		  ch_date5 = dayjs(availStarts[last_av]).add(15, 'minutes');
		  availStarts = [];
		  check_dates(ch_date5, room_id);
		  date1.val($(this).attr('data-date'));
		  time1.val($(this).attr('data-time'));
		});
	  }
	  $('.pp_less').click(function(e) {
		e.preventDefault();
		availStarts = [];
		submit_button.prop('disabled', true);
		check_dates(this_date, room_id);
		date1.val($(this).attr('data-date'));
		time1.val($(this).attr('data-time'));
		date2.val($(this).attr('data-date'));
		time2.val($(this).attr('data-time2'));
		$('.pp_avail').css('opacity', '1');
	  });
	  $('#edit-submit').click(function(e) {
		e.preventDefault();
		var mini = dayjs(date1.val()).format('YYYY-MM-DD');
		var maxi = dayjs(date1.val()).add(1, 'day').format('YYYY-MM-DD');
		var mini2 = dayjs(date1.val()).date(1).format('YYYY-MM-DD');
		var maxi2 = dayjs(date1.val()).add(1, 'month').date(1).format('YYYY-MM-DD');
		var my_email = $('#edit-email').val().trim();
		var snag = 0;
		var existingStarts_room = [];
		var existingStarts_start = [];
		var existingStarts_end = [];
	
		function update_avail2(text) {
			var mmm_date = dayjs($('#edit-reservation-date').val()).format('YYYY-MM-DD');
			console.log('inside update_avail2 ' + text);
			console.log("/slr_dates2.json?date=" + mmm_date + "&t=" + Date.now());
		  $.getJSON("/slr_dates2.json?date=" + mmm_date + "&t=" + Date.now(), function(json) {
	
			var k;
			for (k = 0; k < json.length; k++) {
			  j_room = json[k].room;
			  j_start = json[k].start;
			  j_end = json[k].end;
			  j_name = json[k].name;
			  existingStarts_room.push(j_room);
			  existingStarts_start.push(j_start);
			  existingStarts_end.push(j_end);
			}
	
			var date1a = $('#edit-time-start-date').val();
			var date2a = $('#edit-time-end-date').val();
			var time1a = $('#edit-time-start-time').val();
			var time2a = $('#edit-time-end-time').val();
			my_start_test = dayjs(date1a + ' ' + time1a);
			my_end_test = dayjs(date2a + ' ' + time2a);
			var my_overlap = 0;
			for (var p = 0; p < existingStarts_start.length; p++) {
			  //bool overlap = m.start < e.end && e.start < m.end;
			  var d_Ends = dayjs(existingStarts_end[p]);
			  var d_Starts = dayjs(existingStarts_start[p]);
			  var room_id2 = $('#edit-room').val();
			  if (
				(my_start_test.isBefore(d_Ends) && my_end_test.isAfter(d_Starts)) || my_start_test == d_Starts || my_end_test == d_Ends) { // overlaps an existing rez
				if (existingStarts_room[p] == room_id2) {
				  my_overlap = 1;
				  snag = 1;
				}
			  }
			  if (my_overlap == 1) {
				alert('This room and reservation time are no longer available. Please choose another time or another room.');
			  }
			}
			if (my_overlap != 1) {
				console.log('/slr/confirmed.json?t=' + Date.now() + '&email=' + my_email);
			  $.getJSON(encodeURI('/slr/confirmed.json?t=' + Date.now() + '&email=' + my_email), function(json2) {
				var k_dates = [];
					for (k = 0; k < json2.length; k++) {
						k_dates.push(json2[k].date);
					}
								console.log(json2);
				  console.log(k_dates);
	
				  if (k_dates.includes( mini)) { // change this to match on the date
					alert('Individuals/groups can make 1 reservation per day.');
				  snag = 1;
				} else //{
					  if (snag < 1) {
						  if (json2.length >= 5) { 
							alert('Individuals/groups can make up to 5 reservations per month.');
							snag = 1;
						  } else //{
							  
								if (snag < 1) {
								  $('.webform-submission-form').submit();
								}
						//  }
					  }
			   // }
			  });
			}
		  });
		}
		if (is_admin == '1') {
		  $('.webform-submission-form').submit();
		} else {
		  update_avail2('3a');
		}
	  });
	});
	});
	})(jQuery);