(function($, jQuery) {
	$(document).ready(function() {
	  console.log('meeeting_room_reservation'); 
	  // If the user navigated back to this page, reload the page to ensure that the form is reset
	  if (performance.navigation.type == 2) {
		location.reload(true);
	  }
  
	  function getMeetingRoomName() {
		return $('#edit-meeting-room option:selected').prop('label');
	  }
	  // these are only set if editing, not when adding new
	  function getStartDate() {
		return $('#edit-date-time-start-date').val();
	  }
  
	  function getStartTime() {
		return $('#edit-date-time-start-time').val();
	  }
  
	  function getEndTime() {
		return $('#edit-date-time-end-time').val();
	  }
	  var mr = getMeetingRoomName();
	  var sd = getStartDate();
	  var st = getStartTime();
	  var et = getEndTime();
	  // end preset values
	  $('li:contains(illegal)').css('display', 'none');
	  // create a space for displaying selection when editing   
	  $('#edit-actions').before('<p id="confirm"></p>');
	  var confirm_date = dayjs(sd + ' ' + st);
	  var confirm_date2 = dayjs(sd + ' ' + et);
	  if (getMeetingRoomName() && sd && st && et && confirm_date && confirm_date2) {
		var confirm_result = getMeetingRoomName() + '<br>';
		confirm_result += confirm_date.format('dddd, MMMM D, YYYY - h:mm A to ') + confirm_date2.format('h:mm A');
		$('#confirm').html(confirm_result);
	  }
	  // end display of preselected info
	  // interrupt form submit with last minute validation
	  async function update_avail3(text) {
		var date1 = $('#edit-date');
		var mini1 = dayjs(date1.val()).format('YYYY-MM-DD');
		var maxi1 = dayjs(date1.val()).add(1, 'day').format('YYYY-MM-DD');
		existingStarts_room = [];
		existingStarts_start = [];
		existingStarts_end = [];
		var sid = '1';
		var splitUrl = window.location.pathname.split('/');
		if (parseInt(splitUrl[7]) > 0) {
		  sid = splitUrl[7];
		}
		var json_url = '/mr_dates2.json?sid=' + sid + '&loc=' + loc + '&t=' + Date.now() + '&date11=' + mini1 + '&date22=' + maxi1;
		console.log(json_url);
		await $.getJSON(encodeURI(json_url), function(json1) {
		  var k;
		  for (k = 0; k < json1.length; k++) {
			j_room = json1[k].room;
			j_start = json1[k].start;
			j_end = json1[k].end;
			j_name = json1[k].name;
			existingStarts_room.push(j_room);
			existingStarts_start.push(j_start);
			existingStarts_end.push(j_end);
		  }
  
  
		  // get_special_dates();
		  var room1b = $('#edit-meeting-room').val();
		  var date1b = $('#edit-date-time-start-date').val();
		  var date2b = $('#edit-date-time-end-date').val();
		  var time1b = $('#edit-date-time-start-time').val();
		  var time2b = $('#edit-date-time-end-time').val();
		  my_start_test = dayjs(date1b + ' ' + time1b);
		  my_end_test = dayjs(date2b + ' ' + time2b);
		  room_id = room1b;
		  var my_overlap = 0;
		  for (var p = 0; p <= existingStarts_start.length; p++) {
			//bool overlap = m.start < e.end && e.start < m.end;
			//for a single room, the room, and the other combo room must be available.
			//for a combo  room, the room, and both other single rooms must be available.
			if (my_start_test.isBefore(existingStarts_end[p]) && my_end_test.isAfter(existingStarts_start[p])) { // overlaps an existing rez
			  switch (room_id) {
				case "4":
				case "6":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '5') {
					my_overlap = 1;
				  }
				  break;
				case "5":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '4' || existingStarts_room[p] == '6') {
					my_overlap = 1;
				  }
				  break;
				case "781":
				  //  case "782":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '848') {
					my_overlap = 1;
				  }
				  break;
				case "848":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '781' || existingStarts_room[p] == '782') {
					my_overlap = 1;
				  }
				  break;
				case "783":
				case "849":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '850') {
					my_overlap = 1;
				  }
				  break;
				case "850":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '783' || existingStarts_room[p] == '849') {
					my_overlap = 1;
				  }
				  break;
				case "793":
				case "795":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '794') {
					my_overlap = 1;
				  }
				  break;
				case "794":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '793' || existingStarts_room[p] == '795') {
					my_overlap = 1;
				  }
				  break;
				case "796":
				case "798":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '797') {
					my_overlap = 1;
				  }
				  break;
				case "797":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '796' || existingStarts_room[p] == '798') {
					my_overlap = 1;
				  }
				  break;
				case "839":
				case "840":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '800') {
					my_overlap = 1;
				  }
				  break;
				case "800":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '839' || existingStarts_room[p] == '840') {
					my_overlap = 1;
				  }
				  break;
				case "801":
				case "803":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '802') {
					my_overlap = 1;
				  }
				  break;
				case "802":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '801' || existingStarts_room[p] == '803') {
					my_overlap = 1;
				  }
				  break;
				case "804":
				case "806":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '805') {
					my_overlap = 1;
				  }
				  break;
				case "805":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '804' || existingStarts_room[p] == '806') {
					my_overlap = 1;
				  }
				  break;
				case "808":
				case "810":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '809') {
					my_overlap = 1;
				  }
				  break;
				case "809":
				  if (existingStarts_room[p] == room_id || existingStarts_room[p] == '808' || existingStarts_room[p] == '810') {
					my_overlap = 1;
				  }
				  break;
				default:
				  if (existingStarts_room[p] == room_id) {
					my_overlap = 1;
				  }
			  }
			}
		  
  
  
  
  
  
  
			if (my_overlap) {
			  $('#edit-submit').val('Please select an available room');
			} else {
			  // next check if the user meets the 3 per 90 days limitation
			  //$('.webform-submission-form').submit();
			  checkMonthlyLimit();
			}
		  } // done checking if overlapping
		});
	  }
	  async function checkMonthlyLimit(text) {
		var date1 = $('#edit-date');
		var loc = $('#edit-location').val();
		let sid = '999999'; // dummy, replaced with actual SID if present in URL
		var splitUrl = window.location.pathname.split('/');
		if (parseInt(splitUrl[7]) > 0) {
		  sid = splitUrl[7];
		}
		var mini333 = dayjs(date1.val()).subtract(90, 'days').format('YYYY-MM-DD');
		var miDate = dayjs(date1.val()).format('YYYY-MM-DD');
		var maxi444 = dayjs(date1.val()).add(90, 'days').format('YYYY-MM-DD');
		var email = $('#edit-group-representative-email-address').val();
		var sidEncoded = encodeURIComponent(sid);
		var mini333Encoded = encodeURIComponent(mini333);
		var maxi444Encoded = encodeURIComponent(maxi444);
		var emailEncoded = encodeURIComponent(email);
		var timestamp = Date.now();
		var json_rules = `/mr_rules.json?sid=${sidEncoded}&t=${timestamp}&date333=${mini333Encoded}&date444=${maxi444Encoded}&email=${email}`;
		console.log(json_rules);
		try {
		  var json333 = await $.getJSON(encodeURI(json_rules));
		  if (json333.length > 2) {
			var pips = json333.map((p) => p.date).concat(miDate).sort();
			if (pips.reduce((acc, curr, index) => {
				if (index < pips.length - 2 && !acc) {
				  return pips.slice(index + 1).some((tDate) => dayjs(tDate).isBefore(dayjs(curr).add(90, 'day')));
				}
				return acc;
			  }, false)) {
			  $('body').addClass('sooner');
			  if (($('body.path-admin').length > 0) ) {
				  $('.webform-submission-form').submit();
			  } else {
				  $('#edit-submit').val('Only 3 reservations within 90 days');
			  }
			} else {
			  $('.webform-submission-form').submit();
			}
		  } else {
			$('.webform-submission-form').submit();
		  }
		} catch (error) {
		  console.error(error);
		}
	  }
	  // submit the form if Admin, otherwise double check that the room is still available
	  $('#edit-submit').click(function(e) {
		e.preventDefault();
		if (($('body.is_admin').length > 0) || ($('body.is_internal').length > 0)) {
		  $('.webform-submission-form').submit();
		} else {
		  update_avail3('hmm');
		}
	  });
	  var is_admin = 0;
	  var is_internal = 0;
	  let existingStarts_room = [];
	  let existingStarts_start = [];
	  let existingStarts_end = [];
	  var disabledDays = ['2023-12-24','2023-12-25','2023-12-26','2023-12-31' ,'2024-01-01','2024-01-14','2024-01-15','2024-02-18','2024-02-19','2024-03-22','2024-03-31','2024-05-26','2024-05-27','2024-06-19','2024-07-04','2024-08-16','2024-09-01','2024-09-02','2024-11-10','2024-11-11','2024-11-28','2024-11-29','2024-12-13','2024-12-24','2024-12-25'];
	  var max_date = dayjs().add(91, 'days').hour(7);
	  var atb_date = dayjs('2023-10-09');
  
	  var min_date = dayjs().add(3, 'days').hour(7);
	  var which_date = $('#edit-date');
	  var how_many = $('#edit-location').val();
	  var location2 = how_many;
	  var loc = how_many;
	  let opening_hour = 9;
	  let closing_hour = 20;
	  var u = dayjs($('#edit-date').val());
	  var round_interval = 15;
	  var intervals = Math.floor(min_date.minute() / round_interval);
	  var minutesToRound = min_date.minute() % round_interval;
	  var minutesRounded = minutesToRound > round_interval / 2 ? round_interval : 0;
	  var minutes = intervals * round_interval + minutesRounded;
	  var max_sim = 1;
	  var f_time = 'h:mm A';
	  var f_date = 'dddd, YYYY-MM-DD';
	  var f_date2 = 'dddd, MMMM D, YYYY';
	  var pp_format = 'YYYY-MM-DD H:mm';
	  var lib_format = 'MM/DD/YYYY';
	  var avail_wrapper = $('#pp_avail_wrapper');
	  let availStarts = [];
	  let allllStarts = [];
	  var e_date = $('#edit-date-time-start-date');
	  var e_time = $('#edit-date-time-start-time');
	  var e_time2 = $('#edit-date-time-end-time');
	  var busy = [];
	  // Many features vary depending on whether the user has the role: Anonymous, Meeting Rooms Administrator, or Meeting Rooms Internal
	  // look up the user's roles
	  // /admin/structure/views/view/current_user_s_role/edit/data_export_1
	  $.getJSON("/roles.json?t=" + Date.now(), function(json9) {
		var my_roles = [];
		var k;
		for (k = 0; k < json9.length; k++) {
		  j_roles = json9[k].roles;
		  //  my_roles.push(j_roles);
		  if (j_roles.includes('administrator') || j_roles.includes('meeting_rooms_administrator')) {
			var is_admin = 1;
			$('body').addClass('is_admin');
			console.log('Admin');
			// if (is_admin !== "1") {
			console.log('b don2')
			//  var max_date2 = dayjs().add(2, 'years');
			// which_date.attr('max', max_date2.format('YYYY-MM-DD'));
			//  }
			var params = new window.URLSearchParams(window.location.search);
			var uuid = params.get('uuid');
			if (uuid) {
			  var clone_url = '/meeting-rooms/uuid.json?uuid=' + uuid;
			  // console.log(clone_url);
			  $.getJSON(clone_url, function(json_clone) {
				// console.log(json_clone);
				if (json_clone[0].internal == 'Yes') {
				  $('#edit-is-this-meeting-for-internal-use-').prop('checked', true);
				  $('#edit-markup').detach();
				  $('#edit-group').detach();
				}
				// 
				//             $("input[name=type][value=" + value + "]").prop('checked', true);
				if (json_clone[0].status) {
				  $('#edit-status input[value=' + json_clone[0].status + ']').prop('checked', true);
				}
				if (json_clone[0].agree == 'Yes') {
				  $('#edit-i-agree-to-ensure-that-my-organization-will-abide-by-the-policie').prop('checked', true);
				}
				if (json_clone[0].group_name) {
				  $('#edit-group-name').val(json_clone[0].group_name);
				}
				if (json_clone[0].purpose) {
				  $('#edit-purpose-of-group').val(json_clone[0].purpose);
				}
				if (json_clone[0].website) {
				  $('#edit-website').val(json_clone[0].website);
				}
				if (json_clone[0].full_name) {
				  $('#edit-group-representative-full-name').val(json_clone[0].full_name);
				}
				if (json_clone[0].phone) {
				  $('#edit-group-representative-phone-number').val(json_clone[0].phone);
				}
				if (json_clone[0].email) {
				  $('#edit-group-representative-email-address').val(json_clone[0].email);
				}
				if (json_clone[0].topic) {
				  $('#edit-topic').val(json_clone[0].topic);
				}
				if (json_clone[0].attendance) {
				  $('#edit-expected-attendance').val(json_clone[0].attendance);
				}
				if (json_clone[0].duration) {
				  $('#edit-duration').val(json_clone[0].duration);
				}
				if (json_clone[0].location) {
				  $('#edit-location').val(json_clone[0].location);
				}
				avail_slots.html('<p>Please select a date.</p>');
			  });
			}
			// show the Status field if Admin
			$('#edit-status--wrapper').css('display', 'block');
			// show the Internal field if Admin
			$('.form-item-is-this-meeting-for-internal-use-').css('display', 'block');
		  } else if (j_roles.includes('internal_group_representative')) {
			var is_admin = 0;
			var is_internal = 1;
			$('body').removeClass('is_admin');
			$('body').addClass('is_internal');
			console.log('Internal');
			// hide the Status field if Internal
			$('#edit-status--wrapper').css('display', 'hidden');
			// show the Internal field if is_internal
			$('.form-item-is-this-meeting-for-internal-use-').css('display', 'block');
		  }
		}
$('#edit-date').change(function(e) {
	  var my_date = dayjs($('#edit-date').val());
	  var the_date1 = dayjs($('#edit-date').val());
	  var ppwf_format = 'YYYY-MM-DD';
	  var the_date = the_date1.format(ppwf_format);
	  var closed_dates = [
  '2024-01-15',
  '2024-02-19',
  '2024-05-27',
  '2024-06-19',
  '2024-07-04',
  '2024-09-02',
  '2024-11-11',
  '2024-11-28',
  '2024-11-29',
  '2024-12-24',
  '2024-12-25'
	  ];
  
	  if (closed_dates.includes(the_date)) {
		alert("We're closed on that day. Please select another date.");
		$('#edit-date').val('');
	  } else {
		if ((my_date > max_date) && (is_admin !== '1' && is_internal !== '1')) {
		  var lib_date = dayjs().add(1, 'day').format(lib_format);
		  $('#edit-date').val(lib_date);
		} else {
		  if ($('#edit-location').val()) {
			if (dayjs($('#edit-date').val()).isValid()) {
			  get_room($('#edit-location').val());
			  availStarts = [];
			  allllStarts = [];
			  submit_button.prop('disabled', true);
			  date1.val($(this).attr('data-date'));
			  time1.val($(this).attr('data-time'));
			  date2.val($(this).attr('data-date'));
			  time2.val($(this).attr('data-time2'));
			} else {
			  $('#avail_slots').html('<p class="p0">Please select a date.</p>');
			}
		  } else {
			$('#avail_slots').html('<p>Please select a location.</p>');
		  }
		}
	  }
  });
  
		if (is_admin != 1 && is_internal != 1) {
		  var is_anon = 1;
		  $('body').removeClass('is_admin');
		  $('body').removeClass('is_internal');
		  $('body').addClass('is_anon');
		  console.log('Anonymous');
		  // hide Status field if Anonymous
		  $('#edit-status--wrapper').css('display', 'hidden');
		  // hide Internal field if Anonymous
		  $('.form-item-is-this-meeting-for-internal-use-').css('display', 'none');
		 }
		// hide the Group fieldset if Internal checkbox is checked, show it again when unchecked
		var internalCheckbox = $('#edit-is-this-meeting-for-internal-use-');
		internalCheckbox.change(function() {
		  var groupFieldset = $('#edit-group');
		  if ($(this).prop('checked') == true) {
			groupFieldset.css('display', 'none');
			$('#edit-markup').css('display', 'none');
			// Default title if Internal
			$('#edit-topic').val('Library Use');
			$('.form-item-topic .form-item__description').css('display', 'none');
			$('.usa-accordion.usa-accordion--bordered:nth-of-type(1)').css('display', 'none');
		  } else {
			groupFieldset.css('display', 'block');
			$('#edit-markup').css('display', 'block');
			$('.form-item-topic .form-item__description').css('display', 'block');
			$('.usa-accordion.usa-accordion--bordered:nth-of-type(1)').css('display', 'block');
		  }
		});
		// update the user interface with available time slots
		async function update_avail(text) {
		  var date1 = $('#edit-date');
		  var mini1 = dayjs(date1.val()).format('YYYY-MM-DD');
		  var maxi1 = dayjs(date1.val()).add(1, 'day').format('YYYY-MM-DD');
		  var loc = $('#edit-location').val();
		  var sid = '999999'; // dummy, replaced with actual SID if present in URL
		  var splitUrl = window.location.pathname.split('/');
		  if (parseInt(splitUrl[7]) > 0) {
			sid = splitUrl[7];
		  }
		  existingStarts_room = [];
		  existingStarts_start = [];
		  existingStarts_end = [];
		  // look up the existing reservations for the timespan (typically 1 day)
		  var json_url = '/mr_dates2.json?sid=' + sid + '&loc=' + loc + '&t=' + Date.now() + '&date11=' + mini1 + '&date22=' + maxi1;
		  await $.getJSON(encodeURI(json_url), function(json1) {
			var k;
			for (k = 0; k < json1.length; k++) {
			  j_room = json1[k].room;
			  j_start = json1[k].start;
			  j_end = json1[k].end;
			  j_name = json1[k].name;
			  existingStarts_room.push(j_room);
			  existingStarts_start.push(j_start);
			  existingStarts_end.push(j_end);
			}
			// get_special_dates(); // future enhancement: look up holidays and other closures dynamically
		  });
		  $('.check_date.check').click();
		}
		 // get the available rooms and times based on location
		async function get_room(location2) {
		  $('#confirm').empty();
		  avail_slots.html('<div id="rez_date"></div>');
		  var h_date = dayjs($('#edit-date').val());
		  var rooms_array = [];
		  var rooms_names = [];
		  var rooms_capac = [];
		  switch (location2) {
			case "2":
			  rooms_array = [7];
			  rooms_names = ['Austin History Center'];
			  rooms_capac = [62];
			  break;
			case "183":
			  
			  rooms_array = [780];
			  rooms_names = ['Austin History Center'];
			  rooms_capac = [62];
			  
			  break;
			case "194":
			    rooms_array = [ 781, 782, 848 ];
			    rooms_names = [ 'Carver Branch #1', 'Carver Branch #2', 'Carver Branch #1 & #2' ];
			    rooms_capac = [ 25, 100, 125 ];
			  break;
			case "186":
			  rooms_array = [783, 849, 850];
			  rooms_names = ['Cepeda Branch #1', 'Cepeda Branch #2', 'Cepeda Branch #1 & #2'];
			  rooms_capac = [30, 30, 60];
			  break;
			case "195":
			  rooms_array = [784];
			  rooms_names = ['Hampton Branch at Oak Hill'];
			  rooms_capac = [70];
			  break;
			case "196":
			  rooms_array = [785];
			  rooms_names = ['Howson Branch'];
			  rooms_capac = [40];
			  break;
			case "197":
			  rooms_array = [786];
			  rooms_names = ['Little Walnut Creek Branch'];
			  rooms_capac = [50];
			  break;
			case "198":
			  rooms_array = [787];
			  rooms_names = ['Menchaca Branch'];
			  rooms_capac = [75];
			  break;
			case "199":
			  rooms_array = [788];
			  rooms_names = ['Milwood Branch'];
			  rooms_capac = [50];
			  break;
			case "1":
			  rooms_array = [8];
			  rooms_names = ['Central Library #1'];
			  rooms_capac = [52];
			  break;
			case "200":
			  rooms_array = [789];
			  rooms_names = ['North Village Branch'];
			  rooms_capac = [52];
			  break;
			case "202":
			  rooms_array = [790];
			  rooms_names = ['Old Quarry Branch'];
			  rooms_capac = [60];
			  break;
			case "203":
			  rooms_array = [791, 792];
			  rooms_names = ['Pleasant Hill Branch #1', 'Pleasant Hill Branch #2'];
			  rooms_capac = [20, 50];
			  break;
			case "3":
			  rooms_array = [4, 6, 5];
			  rooms_names = ['Carver Branch #1', 'Carver Branch #2', 'Carver Branch #1 & #2'];
			  rooms_capac = [39, 39, 78];
			  break;
			case "205":
			  rooms_array = [793, 795, 794, 5315];
			  rooms_names = ['Ruiz Branch #1', 'Ruiz Branch #2', 'Ruiz Branch #1 & #2', 'Ruiz Branch #3'];
			  rooms_capac = [39, 39, 78, 10];
			  break;
			case "207":
			  rooms_array = [796, 798, 797];
			  rooms_names = ['Southeast Branch #1', 'Southeast Branch #2', 'Southeast Branch #1 & #2'];
			  rooms_capac = [40, 28, 68];
			  break;
			case "208":
			  rooms_array = [799];
			  rooms_names = ['Spicewood Springs Branch'];
			  rooms_capac = [65];
			  break;
			case "209":
			  rooms_array = [839, 840, 800];
			  rooms_names = ['Terrazas Branch #1', 'Terrazas Branch #2', 'Terrazas Branch #1 & #2'];
			  rooms_capac = [25, 25, 50];
			  break;
			case "210":
			  rooms_array = [801, 803, 802];
			  rooms_names = ['Twin Oaks Branch #1', 'Twin Oaks Branch #2', 'Twin Oaks Branch #1 & #2'];
			  rooms_capac = [20, 20, 40];
			  break;
			case "185":
			  rooms_array = [804, 806, 805];
			  rooms_names = ['University Hills Branch #1', 'University Hills Branch #2', 'University Hills Branch #1 & #2'];
			  rooms_capac = [40, 40, 80];
			  break;
			case "201":
			  rooms_array = [807];
			  rooms_names = ['Willie Mae Kirk Branch'];
			  rooms_capac = [40];
			  break;
			case "184":
			  rooms_array = [808, 810, 809];
			  rooms_names = ['Windsor Park Branch #1', 'Windsor Park Branch #2', 'Windsor Park Branch #1 & #2'];
			  rooms_capac = [32, 33, 65];
			  break;
			case "211":
			  rooms_array = [811];
			  rooms_names = ['Yarborough Branch'];
			  rooms_capac = [50];
			  break;
		  }
		  for (k = 0; k < rooms_array.length; k++) {
			avail_slots.append('<div class="room_wrapper" id="avail_slot_wrapper_' + rooms_array[k] + '"><div class="room_name">' + rooms_names[k] + ' (Capacity: ' + rooms_capac[k] + ')<br>' +
			  h_date.format(f_date2) + '<br><a class="view_calendar" target="_blank" href="/meeting-rooms/calendar?date=' + h_date.format('YYYY-MM-DD') + '&room=' + rooms_array[k] +
			  '">View this room\'s calendar</a></div><div id="avail_slot_' + rooms_array[k] + '"></div><a data-room="' + rooms_array[k] + '" class="check_date check"></a></div>');
		  }
		  $('.check_date.check').click(async function(e) {
			var which_date = $('#edit-date');
			var this_date = dayjs(which_date.val());
			var room_id = $(this).attr('data-room');
			e.preventDefault();
			availStarts = [];
			allllStarts = [];
			submit_button.prop('disabled', true);
			await check_dates(this_date, room_id);
			date1.val($(this).attr('data-date'));
			time1.val($(this).attr('data-time'));
			date2.val($(this).attr('data-date'));
			time2.val($(this).attr('data-time2'));
			$('.pp_avail').css('opacity', '1');
		  });
		  await update_avail('ok');
		}
  
		function check_dates(input_date, room_id) {
		  var duration = $('#edit-duration').val();
		  if (!duration || duration == '_none' || duration == '') {
			duration = 120;
		  }
		  var ch_date = input_date;
		  var messages = [];
		  //  Austin History Center 780, Menchaca Road 787, Little Walnut 786, Ruiz 793,795,794 and Spicewood Springs 799
		  //  open 12-5 Sundays, beginning Sep11
		  var arr = ['780', '787', '786', '793', '795', '794', '799'];
		  var notIncludes = !arr.includes(room_id);

          var startDate = Date.parse('March 4, 2024');
          var endDate = Date.parse('May 13, 2024');

          if ((room_id == '839' ||room_id == '840' ||room_id == '800')  && ch_date >= startDate && ch_date <= endDate) {
              messages = ['The Terrazas Branch meeting rooms are unavailable through May 13, 2024.'];
          } else 


		  if (ch_date.format('d') == 0 && notIncludes) {
			messages = ['This location is closed on Sunday.'];
		  } else { 
            
              
            
            // not a Sunday, or not a branch that's closed on Sunday
		   if ((room_id == '780' || room_id == '7') && (parseInt(ch_date.format('d')) == '1' || parseInt(ch_date.format('d')) == '2')) { 
			  // closed on Monday and Tuesday if AHC
			  messages = ['This location is closed on Monday and Tuesday.'];
			}
			else if ((room_id == '839' || room_id == '840' || room_id == '800') && ch_date.isAfter(atb_date) && (parseInt(ch_date.format('d')) == '6')) { //closed on Saturday if ATB 
			  messages = ['This location is closed on Saturday.'];
			} else {
			  //  Austin History Center 780, Menchaca Road 787, Little Walnut 786, Ruiz 793,795,794 and Spicewood Springs 799
			  //  open 12-5 Sundays
			  if (ch_date.format('d') == '0' && (room_id == '780' || room_id == '787' || room_id == '786' || room_id == '793' || room_id == '795' || room_id == '794' || room_id == '799')) {
				opening_hour = 12; // opens at noon 
				closing_hour = 17; // closes at 5pm   
			  }
			  if ((disabledDays.indexOf(ch_date.format('YYYY-MM-DD'))) >= 0) { // appears in disabledDays array
				messages = ['All locations are closed on your selected date.'];
			  } else { //not a holiday date
				if (ch_date.isAfter(max_date, 'day') && (is_admin != '1' && is_internal != '1')) {
				  //     console.log(ch_date.format('dddd, YYYY-MM-DD ' + f_time) + ': after maximum date');
				} else {
				  if (ch_date.isBefore(min_date) && (is_admin != '1' && is_internal != '1')) {
					//    console.log(ch_date.format('dddd, YYYY-MM-DD ' + f_time) + ': before minimum date');
					var ch_date2 = ch_date.add(15, 'minutes');
					check_dates(ch_date2, room_id);
				  } else {
					//if (ch_date.format('d') == '5' || ch_date.format('d') == '6') {
					if (ch_date.format('d') == '6') {
					  opening_hour = 10; // opens at 10am on Saturday
					  closing_hour = 17; // closes at 5pm on Saturday
					} else if (ch_date.format('d') == '5') {
					  opening_hour = 9; // opens at 9am on Friday
					  closing_hour = 17; // closes at 5pm on Saturday
					} else {
					  opening_hour = 9; // opens at 9am 
					  closing_hour = 20; // closes at 8pm
					}
					// Austin History Center //
					if ((room_id == '780' || room_id == '7')) { //closed on Sunday, Monday
					  opening_hour = 10; // opens at 10am 
					  closing_hour = 18; // closes at 6pm   
					}
					if (ch_date.format('d') == '0' && (room_id == '780' || room_id == '787' || room_id == '786' || room_id == '793' || room_id == '795' || room_id == '794' || room_id == '799')) {
					  opening_hour = 12; // opens at noon 
					  closing_hour = 17; // closes at 5pm   
					}
					if (ch_date.format('H') < opening_hour) { // before opening hour
					  //      console.log(ch_date.format('dddd, YYYY-MM-DD ' + f_time) + ': before opening hour');
					  var ch_date2 = ch_date.hour(opening_hour).minute(0);
					  check_dates(ch_date2, room_id);
					} else { //after opening hour
					  var ch_date3 = ch_date.add(duration, 'minutes');
					  var ch_date4 = ch_date.hour((parseInt(closing_hour) - 1)).minute(46);
					  var ch_date4b = ch_date.hour(parseInt(closing_hour)).minute(0);
					  if ((ch_date3.isAfter(ch_date4) && (is_admin != '1' && is_internal != '1')) || ch_date3.isAfter(ch_date4b)) {
						//  var ch_date2 = ch_date.add(1, 'day').hour(opening_hour).minute(0);
						//  check_dates(ch_date2, room_id);
						//      suggest_available(availStarts, room_id);
					  } else {
						my_start_test = ch_date;
						my_end_test = my_start_test.add(duration, 'minutes');
						var my_overlap = 0;
						for (var p = 0; p <= existingStarts_start.length; p++) {
						  //bool overlap = m.start < e.end && e.start < m.end;
						  //for a single room, the room, and the other combo room must be available.
						  //for a combo  room, the room, and both other single rooms must be available.
						  if (my_start_test.isBefore(existingStarts_end[p]) && my_end_test.isAfter(existingStarts_start[p])) { // overlaps an existing rez
							switch (room_id) {
							  // in the first two examples, 4 and 6 are the single rooms, and 5 is the combo room
							  case "4":
							  case "6":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '5') {
								  my_overlap = 1;
								}
								break;
							  case "5":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '4' || existingStarts_room[p] == '6') {
								  my_overlap = 1;
								}
								break;
							  case "781":
							  case "782":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '848') {
								  my_overlap = 1;
								}
								break;
							  case "848":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '781' || existingStarts_room[p] == '782') {
								  my_overlap = 1;
								}
								break;
							  case "783":
							  case "849":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '850') {
								  my_overlap = 1;
								}
								break;
							  case "850":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '783' || existingStarts_room[p] == '849') {
								  my_overlap = 1;
								}
								break;
							  case "793":
							  case "795":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '794') {
								  my_overlap = 1;
								}
								break;
							  case "794":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '793' || existingStarts_room[p] == '795') {
								  my_overlap = 1;
								}
								break;
							  case "796":
							  case "798":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '797') {
								  my_overlap = 1;
								}
								break;
							  case "797":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '796' || existingStarts_room[p] == '798') {
								  my_overlap = 1;
								}
								break;
							  case "839":
							  case "840":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '800') {
								  my_overlap = 1;
								}
								break;
							  case "800":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '839' || existingStarts_room[p] == '840') {
								  my_overlap = 1;
								}
								break;
							  case "801":
							  case "803":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '802') {
								  my_overlap = 1;
								}
								break;
							  case "802":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '801' || existingStarts_room[p] == '803') {
								  my_overlap = 1;
								}
								break;
							  case "804":
							  case "806":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '805') {
								  my_overlap = 1;
								}
								break;
							  case "805":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '804' || existingStarts_room[p] == '806') {
								  my_overlap = 1;
								}
								break;
							  case "808":
							  case "810":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '809') {
								  my_overlap = 1;
								}
								break;
							  case "809":
								if (existingStarts_room[p] == room_id || existingStarts_room[p] == '808' || existingStarts_room[p] == '810') {
								  my_overlap = 1;
								}
								break;
							  default:
								if (existingStarts_room[p] == room_id) {
								  my_overlap = 1;
								}
							}
						  }
						} // done checking if overlapping
						if (my_overlap == 1) { // appears in existingStarts array
						  allllStarts.push(ch_date.format(pp_format));
						  var ch_date2 = ch_date.add(15, 'minutes');
						  //add it here//
						  check_dates(ch_date2, room_id);
						} else {
						  availStarts.push(ch_date.format(pp_format));
						  allllStarts.push(ch_date.format(pp_format));
						  //add it here too //
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
			}
		  } // end of Not a Sunday
		  suggest_available(allllStarts, availStarts, room_id, is_admin, opening_hour, closing_hour, messages);
		}
  
		function suggest_available(pp_date, pp_date2, room_id, admin, opening_hour, closing_hour, messages) {
		  var max_duration = (parseInt(closing_hour) - parseInt(opening_hour)) * 60;
		  $("#edit-duration option").each(function(index) {
			if ((is_admin != '1' && is_internal != '1')) {
			  if ($(this).val() < max_duration) {
				$(this).css('display', 'block');
				$(this).addClass('viz');
				$(this).removeClass('inviz');
			  } else {
				$(this).css('display', 'none');
				$(this).addClass('inviz');
				$(this).removeClass('viz');
			  }
			} else {
			  if ($(this).val() <= max_duration) {
				$(this).css('display', 'block');
				$(this).addClass('viz');
				$(this).removeClass('inviz');
			  } else {
				$(this).css('display', 'none');
				$(this).addClass('inviz');
				$(this).removeClass('viz');
			  }
			}
		  });
		  //        loop through options for duration, getting rid of options exceeding number of minutes 
		  $("#mmessages").detach();
		  if (messages) {
			// console.log(messages);
			$("#edit-location").after('<p id="mmessages">' + messages + '</p>');
		  }
		  var duration = $('#edit-duration').val();
		  if (!duration || duration == '_none' || duration == '') {
			duration = 120;
			$('#edit-duration').val('120');
		  }
		  var avail_wrapper = $('#avail_slot_' + room_id);
		  avail_wrapper.empty();
		  //  update_avail();
		  for (var p = 0; p < pp_date.length; p++) {
			var s_date = dayjs(pp_date[p]);
			var s_date2 = dayjs(s_date).add(duration, 'minutes');
			var show_hide = 'anon';
			if (is_admin == '1') {
			  show_hide = 'mra';
			}
			avail_wrapper.append('<a class="pp_avail not_available ' + show_hide + '" data-room="' + room_id + '" data-time="' + s_date.format('HH:mm:ss') + '" data-time2="' + s_date2.format(
			  'HH:mm:ss') + '" data-date="' + s_date.format('YYYY-MM-DD') + '">' + s_date.format(f_time) + ' to ' + s_date2.format(f_time) + '</a>');
		  }
		  for (var pp = 0; pp < pp_date2.length; pp++) {
			var s_date2 = dayjs(pp_date2[pp]).format('HH:mm:ss');
			//              if the data-time matches, add a class to show it's available //
			$('#avail_slot_' + room_id + ' .pp_avail[data-time="' + s_date2 + '"]').addClass('truly_available');
			$('#avail_slot_' + room_id + ' .pp_avail[data-time="' + s_date2 + '"]').removeClass('not_available');
		  }
		  var total_possible = $('#avail_slot_' + room_id + ' .pp_avail');
		  var total_not_avail = $('#avail_slot_' + room_id + ' .pp_avail.not_available');
		  if (total_possible.length == total_not_avail.length) {
			avail_wrapper.append('<div class="no_luck">No time slots available.</div>');
			// console.log('o ' + opening_hour);
			// console.log('c ' + closing_hour);
		  }
		  $('.pp_avail').click(function() {
			$('.pp_avail').removeClass('active');
			$('.pp_avail').addClass('inactive');
			$('.room_wrapper').addClass('inactive');
			$(this).removeClass('inactive');
			$(this).parent().parent().removeClass('inactive');
			$(this).addClass('active');
			$(this).parent().parent().addClass('active');
			// if has class not_available 
			if ($('.active.not_available').length) {
			  $('#edit-status input[value="1"]').prop('checked', true);
			}
			submit_button.val('Submit Meeting Room Request');
			submit_button.prop('disabled', false);
			$('#edit-meeting-room').val($(this).attr('data-room'));
			$('#rez_date').html('<a class="new_check" href="#">Select a different room and time...</a>');
			date1.val($(this).attr('data-date'));
			date2.val($(this).attr('data-date'));
			time1.val($(this).attr('data-time'));
			time2.val($(this).attr('data-time2'));
			var mr = $('#edit-meeting-room option:selected').prop('label');
			var sd = $('#edit-date-time-start-date').val();
			var st = $('#edit-date-time-start-time').val();
			var et = $('#edit-date-time-end-time').val();
			var confirm_date = dayjs(sd + ' ' + st).format('dddd, MMMM D, YYYY - h:mm A to ');
			var confirm_date2 = dayjs(sd + ' ' + et).format('h:mm A');
			var confirm_result = mr + '<br>';
			confirm_result += confirm_date + confirm_date2;
			$('#confirm').html(confirm_result);
			$('.new_check').click(function(e) {
			  e.preventDefault();
			  get_room(location1.val());
			  $('#confirm').empty();
			  availStarts = [];
			  allllStarts = [];
			  submit_button.prop('disabled', true);
			  date1.val($(this).attr('data-date'));
			  time1.val($(this).attr('data-time'));
			  date2.val($(this).attr('data-date'));
			  time2.val($(this).attr('data-time2'));
			});
		  });
		  $('.pp_more').css('opacity', '1');
		  $('#edit-meeting-room').change(function() {
			availStarts = [];
			allllStarts = [];
			submit_button.prop('disabled', true);
			date1.val($(this).attr('data-date'));
			time1.val($(this).attr('data-time'));
			date2.val($(this).attr('data-date'));
			time2.val($(this).attr('data-time2'));
		  });
		  $('#edit-duration').change(function(e) {
			if (e.handled !== true) {
			  if (dayjs($('#edit-date').val()).isValid()) {
				e.handled = true;
				get_room(location1.val());
				availStarts = [];
				submit_button.prop('disabled', true);
				return;
			  } else {
				$('#avail_slots').html('<p class="p6">Please select a date.</p>');
			  }
			}
		  });
		}
		$(document).attr("title", "Request a Meeting Room | Austin Public Library");
		$('#edit-topic').after('<div class="form-item__description">Topic will appear in calendar</div>');
		if (is_admin == "1" || is_internal == "1") {
		  var max_date = dayjs().add(2, 'years');
		  $('#edit-date').attr('max', max_date.format('YYYY-MM-DD'));
		  //$('#edit-date').attr('min', min_date.format('YYYY-MM-DD'));
		} else {
		  var max_date = dayjs().add(91, 'days').hour(7);
		  $('#edit-date').attr('max', max_date.format('YYYY-MM-DD'));
		  $('#edit-date').attr('min', min_date.format('YYYY-MM-DD'));
		}
		var submit_button = $('#edit-submit');
		submit_button.val('Submit Request');
		submit_button.prop('disabled', true);
		var date_wrapper = $('.form-item-location');
		var button_wrapper = $('#edit-actions');
		var date1 = $('#edit-date-time-start-date');
		var date2 = $('#edit-date-time-end-date');
		var time1 = $('#edit-date-time-start-time');
		var time2 = $('#edit-date-time-end-time');
		date_wrapper.append(
		  '<label id="avail_label" for="pp_avail_wrapper" class="form-item__label js-form-required form-required">Available rooms and times:</label><div id="avail_slots"><div id="rez_date"><a class="new_check" href="#">Check availability...</a></div></div>'
		);
		var avail_slots = $('#avail_slots');
		if ($("#edit-location").val()) {
		  if ($('#edit-date').val()) {
			// Do nothing
					  console.log('line 989 location');
		  } else {
			avail_slots.html('<p class="p5">Please select a date.</p>');
		  }
		} else {
		  avail_slots.html('<p>Please select a location.</p>');
		}
		if (e_date.val() && e_time.val()) {
		  var ee_date = dayjs(`${e_date.val()} ${e_time.val()}`);
		  var duration = $('#edit-duration').val();
		  var ee_date2 = dayjs(ee_date).add(duration, 'minutes').format(f_time);
		  avail_wrapper.prepend(
			`<a class="e_date pp_avail active" data-time="${e_time.val()}" data-time2="${e_time2.val()}" data-date="${e_date.val()}">${ee_date.format(f_time)} to ${ee_date2}</a><br>`);
		  submit_button.prop('disabled', false);
		}
		$('.check_date').click(function(e) {
		  e.preventDefault();
		  var which_date = $('#edit-date');
		  var this_date = dayjs(which_date.val());
		  var room_id = $(this).attr('data-room');
		  availStarts = [];
		  allllStarts = [];
		  submit_button.prop('disabled', true);
		  check_dates(this_date, room_id);
		  date1.val($(this).attr('data-date'));
		  time1.val($(this).attr('data-time'));
		  date2.val($(this).attr('data-date'));
		  time2.val($(this).attr('data-time2'));
		  $('.pp_avail').css('opacity', '1');
		});
		var location1 = $('#edit-location');
		  
		$('.new_check').click(function(e) {
		  e.preventDefault();
		  $('#confirm').empty();
		  if (dayjs($('#edit-date').val()).isValid()) {
			get_room(location1.val());
			availStarts = [];
			allllStarts = [];
			submit_button.prop('disabled', true);
			date1.val($(this).attr('data-date'));
			time1.val($(this).attr('data-time'));
			date2.val($(this).attr('data-date'));
			time2.val($(this).attr('data-time2'));
		  } else {
			if (location1.val()) {
			  $('#avail_slots').html('<p class="p1">Please select a date.</p>');
			} else {
			  $('#avail_slots').html('<p>Please select a location.</p>');
			}
		  }
		});
		location1.change(function(e) {
				  console.log('1084 location');
		  if (location1.val()) {
			if (dayjs($('#edit-date').val()).isValid()) {
			  get_room(location1.val());
			} else {
			  $('#avail_slots').html('<p class="p2">Please select a date.</p>');
			}
		  } else {
			$('#avail_slots').html('<p class="p3">Please select a location.</p>');
		  }
		});
		$('.pp_less').click(function(e) {
		  e.preventDefault();
		  availStarts = [];
		  allllStarts = [];
		  submit_button.prop('disabled', true);
		  check_dates(this_date, room_id);
		  date1.val($(this).attr('data-date'));
		  time1.val($(this).attr('data-time'));
		  date2.val($(this).attr('data-date'));
		  time2.val($(this).attr('data-time2'));
		  $('.pp_avail').css('opacity', '1');
		});
	  });
	});
  })(jQuery, jQuery);
