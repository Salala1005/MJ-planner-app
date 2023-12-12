dayjs.extend(window.dayjs_plugin_advancedFormat);

var currentDay = $("#currentDay");
var timeBlock = $(".time-block");
var currentHour = dayjs().hour();
var clearBtn = $("#clearBtn");

// display the date
var day = dayjs().format("DD-MM-YYYY");
currentDay.text(day);

// create clear button
clearBtn.on("click", function (event) {
  event.preventDefault();
  localStorage.removeItem('plan');
  $("textarea").val("");
});

// display color-code timeblock when is viewed
$(".time-block").each(function (i, timeBlock) {
  var elementHour = parseInt($(timeBlock).attr("id").slice(11));
  // console.log(elementHour);

  if (elementHour === currentHour) {
    $(timeBlock).addClass("present");
  } else if (elementHour > currentHour) {
    $(timeBlock).addClass("future");
  }

  var planObject = 
     {
      '9am': '',
      '10am': '',
      '11am': '',
      '12pm': '',
      '1pm': '',
      '2pm': '',
      '3pm': '',
      '4pm': '',
      '5pm': '',
      };

  var localStorageData = JSON.parse(localStorage.getItem('plan')) || planObject;

  // to persist on webpage after reload
  $('#textarea-9').val(localStorageData['9am']);
  $('#textarea-10').val(localStorageData['10am']);
  $('#textarea-11').val(localStorageData['11am']);
  $('#textarea-12').val(localStorageData['12pm']);
  $('#textarea-13').val(localStorageData['1pm']);
  $('#textarea-14').val(localStorageData['2pm']);
  $('#textarea-15').val(localStorageData['3pm']);
  $('#textarea-16').val(localStorageData['4pm']);
  $('#textarea-17').val(localStorageData['5pm']);

  // save it to local storage when it's clicked save button
  $(timeBlock).on("click", ".saveBtn", function () {
    var storeValue = $(timeBlock).children("textarea").val();
    var key = $(timeBlock).children(".hour").text();
    localStorageData = JSON.parse(localStorage.getItem('plan')) || planObject;
    localStorageData[key] = storeValue;
    localStorage.setItem('plan',JSON.stringify(localStorageData))
  });
});
