$(document).ready(function () {



    //current day and time on top of page
    // var date = moment()
    var interval = setInterval(function () {
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000)


})
var now = moment();

// checking to see if current hour matches the hour on the calendar. 
$("textarea").each(function () {
    $(this).addClass(testMoment($(this).data('input')));
});
// setting color of textarea box as past, present or future depending on the current hour compared to the hour in the textarea in calendar.
function testMoment(currentHour) {
    if (moment().hour() === currentHour) {
        return "present"
    }
    else if (moment().hour() > currentHour) {
        return "past"
    }
    else {
        return "future"
    }
};

//event listener to save to local storage from save buttons

$(".saveBtn").on("click", function() {
var btnId = $(this).attr("id");
var t = $("textarea").val();
 console.log(t);


   
})


 