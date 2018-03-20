$(document).ready(function() {

    var targetValue = 0;
    var emeraldValue = 0;
    var orangeValue = 0;
    var diamondValue = 0;
    var rubyValue = 0;
    var total = 0;
    var wins = 0;
    var losses = 0;

    function refreshVars()
    {
        targetValue = 19 + Math.floor(Math.random() * 102);
        emeraldValue = 1 + Math.floor(Math.random() * 12);
        orangeValue = 1 + Math.floor(Math.random() * 12);
        diamondValue = 1 + Math.floor(Math.random() * 12);
        rubyValue = 1 + Math.floor(Math.random() * 12);
        total = 0;
    }

    function changeParagraphText()
    {
        $("#pNumText").text(targetValue.toString());
    }

    function updateTotalText(message)
    {
        $("#pTotalNumText").text("Total so far: " + message);
    }

    function checkTotal()
    {

        if (total == targetValue)
        {
            alert("You win!");
            wins++;
            $("#winP").text("Wins: " + wins.toString());
            refreshVars();
            changeParagraphText();
        }
        
        if (total > targetValue)
        {
            alert("You lose!");
            losses++;
            $("#lossP").text("Losses: " + losses.toString());
            refreshVars();
            changeParagraphText();
        }
    }

    refreshVars();
    changeParagraphText();
    
    
    // Your code here...
    $(".number").on("click", function(){
      console.log($(this).val());
    
        if ($(this).val() == "emerald")
        {
            //alert("Emerald Value" + " " + emeraldValue.toString());
            total += emeraldValue;

            //messageString = total.toString();

            checkTotal();
            updateTotalText(total.toString());
        }

        if ($(this).val() == "orange")
        { 
            //alert("Orange Value" + " " + orangeValue.toString());
            total += orangeValue;
            //alert(total.toString());
            checkTotal();
            updateTotalText(total.toString());
        }

        if ($(this).val() == "diamond")
        {
            //alert("Diamond Value" + " " + diamondValue.toString());
            total += diamondValue;
            //alert(total.toString());
            checkTotal();
            updateTotalText(total.toString());
        }

        if ($(this).val() == "ruby")
        { 
            //alert("Ruby Value" + " " + rubyValue.toString())
            total += rubyValue;
            //alert(total.toString());
            checkTotal();
            updateTotalText(total.toString());
        }

    });
    
    
});