$(document).ready(function () {
   
    //current day and time on top of page
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    })

   
    // checking to see if current hour matches the hour on the calendar. 
    $("textarea").each(function(){
        $(this).addClass(testMoment($(this).data('input')));
    });
    // setting color of textarea box as past, present or future depending on the current hour compared to the hour in the textarea in calendar.
    function testMoment(currentHour){
        if(moment().hour() === currentHour){
            return "present"
        }
        else if (moment().hour() > currentHour){
            return "past"
        }
        else{
            return "future"
        }
    };

    


 