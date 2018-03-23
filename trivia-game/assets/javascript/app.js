$(document).ready(function() {

    var start = 30;
    var toyStoryChecked = false;
    var fredChecked = false;
    var bullsChecked = false;

    setInterval(function(){ 
        start--;
        $("#headerID").text("Time Remaining: ");
        if (start >= 0)
        {
            $("#headerID").append(start);
        }
        else
        {
            $("#headerID").append(" 0 ");
        }
        $("#headerID").append(" Seconds");
    }, 1000);

    var myTimeout = setTimeout(function(){
        var numCorrect = toyStoryChecked + fredChecked + bullsChecked;
        var numWrong = 3 - (toyStoryChecked + fredChecked + bullsChecked);
        $("#winP").text("Correct Answers: " + numCorrect);
        $("#lossP").text("Wrong Answers: " + numWrong);
    }, start * 1000 );

    $("#movies").click(function() {
        toyStoryChecked = $("#movies .toyStory").prop('checked');
        console.log(toyStoryChecked);
    });

    $("#music").click(function() {
        fredChecked = $("#music .fred").prop('checked');
        console.log(fredChecked);
    });

    $("#sports").click(function() {
        bullsChecked = $("#sports .bulls").prop('checked');
        console.log(bullsChecked);
    });
    
    $("#submitButton").click(function() {
        var numCorrect = toyStoryChecked + fredChecked + bullsChecked;
        var numWrong = 3 - (toyStoryChecked + fredChecked + bullsChecked);
        $("#winP").text("Correct Answers: " + numCorrect);
        $("#lossP").text("Wrong Answers: " + numWrong);
        clearTimeout(myTimeout);
        start = 0;
    });


});