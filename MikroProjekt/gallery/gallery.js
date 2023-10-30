imgPath = "../images/gallery/"
currImage = 0
imageNames = ["old_town.jpg", "vasa.jpg", "fotografiska.jpg", "skansen.jpg"]
imageDescriptions = [
    ["Stare miasto", "Jest na wyspie Stadsholmen. Początki: XIIIw aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
    ["Muzeum vasa", "Fajny stary statek z XVIIw, prawie w całości oryginalne deski aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
    ["Galeria Fotografiska", "Zdjęcia, sztuka nowoczesna itp. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
    ["Muzeum skansen", "Jak kiedyś szwedzi mieszkali. Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
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