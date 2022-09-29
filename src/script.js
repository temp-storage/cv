function card1f() 
{
    if (document.getElementById("card1").style.visibility == "visible")
    {
        document.getElementById("card1").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("card2").style.visibility = "hidden";
        document.getElementById("card1").style.visibility = "visible";
    }
}

function card2f() 
{
    if (document.getElementById("card2").style.visibility == "visible")
    {
        document.getElementById("card2").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("card1").style.visibility = "hidden";
        document.getElementById("card2").style.visibility = "visible";
    }
}