    $('body').click(function(event) {

    var target = $(event.target);
    var targetID = event.target.id;

    for (i=0; i<gifDivList.size(); i++)
    {
        if (targetID = gifDivList[i].attr("src"))
        {
            if (gifDivList[i].attr("data-state")=="still")
            {
                gifDivList[i].attr("data-state","animate");
            }
            else 
            {
                gifDivList[i].attr("data-state","still");
            }
        }
    }
})