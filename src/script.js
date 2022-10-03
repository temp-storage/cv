 function cardS()
 {
    document.title = "Homepage";
    document.body.style.backgroundImage = "url(src/bg_gif2.gif)"
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
            document.title = "Homepage -- Welcome";
            document.body.style.backgroundImage = "url(src/bg_gif3.gif)";
            const T = new Date();
            let year = T.getFullYear();
            year = year - 1997;
            document.getElementById("card0").innerHTML =
            'Hello, my name is Pyry Vehniäinen. <br> I am a '+ year +' years old software developer. <br> This is my portfolio website. <br> Feel free to look around. <br>';
            break;

        case 2:
            document.title = "Homepage -- Experience and skills";
            document.body.style.backgroundImage = "url(src/bg_gif4.gif)";
            document.getElementById("card0").innerHTML = 
            'I know how to use Git / GitHub in my projects. <br> And I have done coding projects using: <ul> <li>C / C++</li> <li>C#</li> <li>JavaScript</li> <li>Python</li> <li>HTML / CSS</li> <li>Bootstrap</li> </ul> <br> My personal projects include: <ul> <li>Games</li> <li>Android apps</li> <li>Arduino controlled devices, some with custom 3D printed parts</li> <li>Software delopement with and without 3rd party libraries</li> <li>Web developement</li> </ul>'
            break;

        case 3:
            document.title = "Homepage -- Personality and interests";
            document.body.style.backgroundImage = "url(src/bg_gif5.gif)";
            document.getElementById("card0").innerHTML = 
            'I have always had an interest towards technology. <br> My source of motivation is my curiosity towards different technological applications and what can be achieved using technology as a tool. <br> I am a problem solver and I aim to better myself and constantly improve my skillset with research and practise. <br> I am also relatively easy to work with. I am an introvert but always eager to help others if I can. <br> My greatest weakness is self-doubt.'
            break;

        default:
            cardS();
    }
}