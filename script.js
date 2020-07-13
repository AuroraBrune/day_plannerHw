
var datastore = '{"dailyTasks": []}';
// var scheduleTimeArray = ["text06", "text07", "text08", "text09", "text10", "text11",
//     "text12", "text13", "text14", "text15", "text16", "text17", "text18", "text19",
//     "text20", "text21", "text22"];


$(document).ready(function () {

    //getting data stored in localStorage and printing it to the day planner page on loading page
    var beginningSchedule = localStorage.getItem('day');
    if (beginningSchedule != null) {
        var obj = JSON.parse(beginningSchedule);
        for (var i = 0; i < obj.dailyTasks.length; i++) {
            var item = obj.dailyTasks[i];
            $(item.id).val(item.text);
        }
        datastore = beginningSchedule;

    } else {
        //initializing datastore if there no values are stored in local storage
        datastore = '{"dailyTasks": []}';
    }
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

$(".saveBtn").on("click", function () {
    var btnId = $(this).attr("id");
    //t will equal the id of the text area we are getting the value from
    var t = "#text" + btnId.slice(-2);
    var textValue = $(t).val();

    //developer note normally we would have to 
    //check to see if an existing value had already been populated prior to adding new object
    //but we're not doing that here, we would call a function like checkText below
    //which is stubbed in

    //now we have t = id of the text box, and the value of the text box
    //next we will save these values into the storage object named dailyTasks

    var dailyTask = {};
    dailyTask["id"] = t;
    dailyTask["text"] = textValue;

    //build object for storage

    var obj = JSON.parse(datastore);
    obj["dailyTasks"].push(dailyTask);
    datastore = JSON.stringify(obj);

    //now save to local storage

    localStorage.setItem('day', datastore);
})

function checkText(dailyTask) {
    //this function will be used to check previous value and change if needed

}
