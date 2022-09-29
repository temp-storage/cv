 function cardS()
 {
    if (document.getElementById("card0").style.visibility == "visible" && document.getElementById("cardBase").style.visibility == "visible")
        {
            document.getElementById("card0").style.visibility = "hidden";
            document.getElementById("cardBase").style.visibility = "hidden";
        }
    else
        {
            document.getElementById("card0").style.visibility = "visible";
            document.getElementById("cardBase").style.visibility = "visible";
        }
}
function card0f(num)
{
    document.getElementById("card0").style.visibility = "visible";
    document.getElementById("cardBase").style.visibility = "visible";
    switch(num) 
    {
        case 1:
            const T = new Date();
            let year = T.getFullYear();
            year = year - 1997;
            document.getElementById("card0").innerHTML =
            'Hello, my name is Pyry Vehniäinen. I am a '+ year +' years old software developer. <br> This is my portfolio website. <br> Feel free to look around. <br>';
            break;

        case 2:
            document.getElementById("card0").innerHTML = 'I know how to use Git / Github in my projects. <br> And I have done coding projects using: <ul> <li>C / C++</li> <li>C#</li> <li>JavaScript</li> <li>Python</li> <li>HTML / CSS</li> </ul>'
            break;
        default:
            cardS();
    }
}