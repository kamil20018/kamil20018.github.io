imgPath = "../images/gallery/stock"
currImage = 2
imageCount = 5

document.getElementById("left").addEventListener("click", leftClick);
document.getElementById("right").addEventListener("click", rightClick);
image = document.getElementById("image")

function leftClick(){
    currImage = currImage - 1;
    if(currImage < 0) {currImage = imageCount - 1};
    image.src = imgPath + currImage + ".jpg";
}

function rightClick(){
    currImage = (currImage + 1) % 5;
    image.src = imgPath + currImage + ".jpg"
}