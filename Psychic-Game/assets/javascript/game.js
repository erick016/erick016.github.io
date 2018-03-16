
  // JavaScript function that wraps everything
  $(document).ready(function() {
    
    
    var wins = 0;
    var losses = 0;
    var remainingGuesses = 9;

    var orgWinPString = $("#win-p").text();
    var orgLossPString = $("#loss-p").text();
    var orgGuessPString = $("#Guess-p").text();
    var orgGuessIntPString = $("#GuessInt-p").text();

    $("#win-p").append(wins);
    $("#loss-p").append(losses);
    $("#Guess-p").append(remainingGuesses);
    $("#GuessInt-p").append("");


      var currentComputerLetter = randomLetter();

      function randomLetter() 
      {
        var x = (Math.floor(Math.random() * 26) + 1);
        console.log(x);
        var chrX = String.fromCharCode(64 + x);
        console.log(chrX);
        return chrX;           
      }

    // Keyboard move controls
    $(document).keyup(function(e) {
      if (String.fromCharCode(e.which) === currentComputerLetter || 
      String.fromCharCode(e.which) === currentComputerLetter + 32 ||
      String.fromCharCode(e.which) === currentComputerLetter - 32  ) 
        {
          alert ("You guessed correctly! Picking another letter...");
          wins++;

          $("#win-p").text(orgWinPString + wins);
          $("Guess-p").text(orgGuessPString);
          $("#GuessInt-p").text(orgGuessIntPString);
          $("#Guess-p").text(orgGuessPString + "9");
          

            currentComputerLetter = randomLetter();

            remainingGuesses = 9;

        }
      else 
      {
        remainingGuesses--;
        

        
        $("#Guess-p").text(orgGuessPString + remainingGuesses)
        $("#GuessInt-p").append(String.fromCharCode(e.which)+",");

        if (remainingGuesses == 0)
        {
            losses++;
            remainingGuesses = 9;
            $("#Guess-p").text(orgGuessPString + "9");
            
            $("#loss-p").text(orgLossPString + losses);

            $("#GuessInt-p").text(orgGuessIntPString);

            alert ("You lost! Picking another letter...")


            currentComputerLetter = randomLetter();
        }
      }
    });
  });