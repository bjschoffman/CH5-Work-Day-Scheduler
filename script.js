// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // A listener for click events on the save button. This code should
  // use the class in the containing time-block as a key to save the user input in
  // local storage.
  $( '.saveBtn').on('click', function () {
    var hour = $(this).parent().attr('id')
    var text = $(this).siblings('.description').val();

    localStorage.setItem(hour, text);

  });
  // Code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.

  $('.time-block').each(function () {
    var timeBlock = $(this).attr('id').split('-')[1];
    var currentHour = dayjs().hour();

    if (currentHour == timeBlock) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');

    } else if (currentHour < timeBlock) {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');

    } else if (currentHour > timeBlock) {
      $(this).removeClass('present');
      $(this).removeClass('future');
      $(this).addClass('past');
    }
  });
 

  // Code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // Code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('MMMM D, YYYY'));
});
