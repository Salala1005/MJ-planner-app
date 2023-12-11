dayjs.extend(window.dayjs_plugin_advancedFormat);

var currentDay = $("#currentDay");
var timeBlock = $(".time-block");
var currentHour = dayjs().hour();

// display the date
var day = dayjs().format("DD-MM-YYYY");
currentDay.text(day);

// display color-code timeblock when is viewed

$(".time-block").each(function (i, timeBlock) {
  var elementHour = parseInt($(timeBlock).attr("id").slice(11));
  console.log(elementHour);

  if (elementHour === currentHour) {
    $(timeBlock).addClass("present");
  } else if (elementHour > currentHour) {
    $(timeBlock).addClass("future");
  }
  $(timeBlock).children("textarea").val(localStorage.getItem(elementHour));

  // save it to local storage
  $(timeBlock).on("click", ".saveBtn", function () {
    var storeValue = $(timeBlock).children("textarea").val();
    localStorage.setItem(elementHour, storeValue);
  });
});
