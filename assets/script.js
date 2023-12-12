dayjs.extend(window.dayjs_plugin_advancedFormat);

var currentDay = $("#currentDay");
var timeBlock = $(".time-block");
var currentHour = dayjs().hour();
var clearBtn = $(".clear");

// display the date
var day = dayjs().format("DD-MM-YYYY");
currentDay.text(day);

// create clear button
clearBtn.on("click", function (event) {
  event.preventDefault();
  localStorage.removeItem('plan');
  $("#textarea-9").val("");
  // location.reload();
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

  // $(timeBlock).children("textarea").val(localStorage.getItem(elementHour));

  var localstorageData = 
     {
        9: $("#textarea-9").val(),
        10: $("#textarea-10").val(),
        11: $("#textarea-11").val(),
        12: $("#textarea-12").val(),
        13: $("#textarea-13").val(),
        14: $("#textarea-14").val(),
        15: $("#textarea-15").val(),
        16: $("#textarea-16").val(),
        17: $("#textarea-17").val(),
      };

  // save it to local storage when it's clicked save button
  $(timeBlock).on("click", ".saveBtn", function () {
    var storeValue = $(timeBlock).children("textarea").val();
    localStorage.setItem('plan', JSON.stringify(localstorageData));
  });
});
