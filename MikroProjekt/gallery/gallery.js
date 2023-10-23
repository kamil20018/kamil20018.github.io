imgPath = "../images/gallery/"
currImage = 2
imageNames = ["old_town.jpg", "vasa.jpg", "fotografiska.jpg", "skansen.jpg"]
imageCount = imageNames.length
document.getElementById("left").addEventListener("click", leftClick);
document.getElementById("right").addEventListener("click", rightClick);
image = document.getElementById("image");
image.src = getImagePath();

function leftClick(){
    currImage = currImage - 1;
    if(currImage < 0) {currImage = imageCount - 1};
    image.src = getImagePath();
}

function rightClick(){
    currImage = (currImage + 1) % imageCount;
    image.src = getImagePath();
}

function getImagePath(){
    return imgPath + imageNames[currImage];
}