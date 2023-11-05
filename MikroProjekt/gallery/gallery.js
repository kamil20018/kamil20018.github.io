imgPath = "../images/gallery/"
currImage = 0
imageNames = ["old_town.jpg", "vasa.jpg", "fotografiska.jpg", "skansen.jpg"]
imageDescriptions = [
    ["Stare miasto", "Stare miasto (Gamla Stan) to najstarsza część Sztokholmu. Początkowo ten obszar odpowiadał całemu miastu i dopiero potem zaczął się rozrastać poza jego granice. Niestety niewiele pozostało z murów i fortyfikacji które kiedyś je otoczały. Gamla Stan zajmuje cały obszar wyspy Stadsholmen. Klimatyczne wąskie uliczki, sklepy i restauracje sprawiają, że jest to obowiązkowy punkt wycieczkowy dla zwiedzających Sztokholm."],
    ["Muzeum vasa", "Okręt Vasa przewrócił się i zatonął w Sztokholmie w czasie swojej pierwszej podróży w 1628 roku. Po 333 latach na dnie morza potężny okręt wojenny został uratowany i jego podróż mogła być kontynuowana. Dzisiaj Vasa jest najpiękniej zachowanym XVII-wiecznym okrętem na świecie i można go oglądać w specjalnie dla niego wybudowanym muzeum w Sztokholmie. Vasa jest jedynym w swoim rodzaju skarbem sztuki. 98% statku jest wykonane z oryginalnych części, a zdobią go setki rzeźb."],
    ["Galeria Fotografiska", "Imponująca galeria fotografii w Sztokholmie. Bardzo ciekawe wystawy i mnóstwo pozycji albumowych do zakupienia lub choćby przeglądnięcia. Jest w niej także restauracja"],
    ["Muzeum skansen", "Sztokholmski Skansen powstał w 1891 roku z inicjatywy Artura Hazeliusa jako pierwsze muzeum na świeżym powietrzu na świecie. To jedna z ciekawszych atrakcji stolicy Szwecji. Jest to najstarsze na świecie muzeum na świeżym powietrzu, w którym zobaczymy historyczną zabudowę oraz występujące na terenie Skandynawii dzikie zwierzęta."]
]
imageCount = imageNames.length
document.getElementById("left").addEventListener("click", leftClick);
document.getElementById("right").addEventListener("click", rightClick);
image = document.getElementById("image");
title = document.getElementById("title");
description = document.getElementById("description");

image.src = getImagePath();
setImageCaptions();

function leftClick(){
    currImage = currImage - 1;
    if(currImage < 0) {currImage = imageCount - 1};
    image.src = getImagePath();
    setImageCaptions();
}

function rightClick(){
    currImage = (currImage + 1) % imageCount;
    image.src = getImagePath();
    setImageCaptions();
}

function setImageCaptions(){
    title.innerHTML = imageDescriptions[currImage][0];
    description.innerHTML = imageDescriptions[currImage][1];
}

function getImagePath(){
    return imgPath + imageNames[currImage];
}