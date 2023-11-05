const canvas = document.getElementById("canvas");
canvas.width = Math.min(window.innerWidth / 2, window.innerHeight * 3 / 5);
canvas.height = canvas.width;
//canvas.style.top = window.innerHeight / 6 + "px";
canvas.style.left = ((window.innerWidth - canvas.width) / 2) + "px";
//canvas.style.position = "absolute";
const ctx = canvas.getContext("2d");

class Tile {
    constructor(image, number) {
        this.image = image;
        this.number = number;
    }
}

canvas.addEventListener('click', function(event) {
    const bb = canvas.getBoundingClientRect();
    var x = event.pageX - bb.left,
        y = event.pageY - bb.top;
    var posX = Math.floor(x / (canvas.width / 3));
    var posY = Math.floor(y / (canvas.width / 3));
    var pos = posX + 3 * posY;

    switchTiles(pos, -1);
    switchTiles(pos, 1);
    switchTiles(pos, 3);
    switchTiles(pos, -3);


    draw();
    sleep(100).then(() => { 
        if(isSolved()){
            alert("Gratulacje!!!");
        } 
    });
}, false);

function inBounds(i){
    return i >= 0 && i < 9;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function switchTiles(pos, i){
    if(inBounds(pos + i) && tiles[pos + i] === undefined){
        console.log("switched");
        tiles[pos + i] = tiles[pos];
        tiles[pos] = undefined;
    }
}


var tiles = [];
for(i = 0; i < 8; i++){
    var image = new Image();
    image.src = '../images/puzzle/image_part_00' + (i + 1) + '.jpg';
    image.onload = draw;
    tiles[i] = new Tile(image, i);
}
tiles[8] = undefined;

function scramble(){
    if(!isSolved()) return;
    for(i = 0; i < 1000; i++){
        var tileNum = Math.floor(Math.random() * 9);
        switchTiles(tileNum, -1);
        switchTiles(tileNum, 1);
        switchTiles(tileNum, 3);
        switchTiles(tileNum, -3);
    }
    draw();
}

function isSolved(){
    for(i = 0; i < 9; i++){
        if(tiles[i] !== undefined){
            if(tiles[i].number != i) return false;
        }
    }
    return true;
}

function draw(){
    for(i = 0; i < 9; i++){
        if(tiles[i] !== undefined){
            ctx.drawImage(tiles[i].image, (i % 3 ) * (canvas.width / 3), Math.floor(i / 3) * (canvas.width / 3), canvas.width / 3, canvas.width / 3);
        } else {
            ctx.fillRect((i % 3 ) * (canvas.width / 3), Math.floor(i / 3) * (canvas.width / 3), canvas.width / 3, canvas.width / 3);
        }
    }
}

window.onload = draw;
window.addEventListener('resize', function(event) {
    canvas.width = window.innerWidth / 2;
    canvas.height = canvas.width;
    //canvas.style.top = window.innerHeight / 6 + "px";
    canvas.style.left = Math.floor((window.innerWidth - canvas.width) / 2) + "px";
    //canvas.style.position = "absolute";
    draw();
}, true);

const button = document.getElementById("button");
button.addEventListener('click', scramble);

