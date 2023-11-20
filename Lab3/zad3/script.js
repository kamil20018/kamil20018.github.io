const frameInterval = 100;
const zombieImageW = 200;
const zombieImageH = 312;
const spawnRate = 10 // measured in frames passed
const pointsPerKill = 10;
const pointsPerMiss = -3;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const maxLives = 3;
const heartSize = 100;
var lives = 3;
var speedMin = 20;
var speedMax = 50;
var score = 30;
var zombieImage = new Image();
zombieImage.src = "images/walkingdead.png";
var emptyHeartImage = new Image();
emptyHeartImage.src = "images/empty_heart.png";
var fullHeartImage = new Image();
fullHeartImage.src = "images/full_heart.png";
canvas.style.cursor = "url('images/aim.png'), auto";

class Zombie{
    constructor(x, y, speed, scale){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.scale = scale;
        this.animationFrame = 0;
        this.scaledW = this.scale * zombieImageW;
        this.scaledH = this.scale * zombieImageH;
        this.alive = true;
    }

    move(){
        this.animationFrame += 1;
        this.animationFrame = this.animationFrame % 10;
        this.x -= this.speed;
    }

    getAnimationPos(){
        return this.animationFrame * zombieImageW;
    }

    wasClicked(x, y){
        var clicked = this.x < x && x < this.x + this.scaledW && this.y < y && y < this.y + this.scaledH;
        this.alive = !clicked;
        return clicked;
    }
}

var zombies = [];
var framesPassed = 0;
var lastSpawned = -100;
function draw() {
    ctx.canvas.width  = window.innerWidth - 100;
    ctx.canvas.height = window.innerHeight - 100;
    if(lives > 0){
            
        if(framesPassed - lastSpawned > spawnRate){
            zombies.push(new Zombie(ctx.canvas.width, getRandomInt(0, ctx.canvas.height - 200), getRandomInt(speedMin, speedMax), Math.random() + 0.2));
            lastSpawned = framesPassed;
        }

        for(var i = 0; i < zombies.length; i++){
            if(!zombies[i].alive){
                score += pointsPerKill;
            }
        }

        zombies = zombies.filter((zombie)=> zombie.alive);
        const aliveZombies = zombies.filter((zombie) => zombie.x > -200);
        const deadZombiesCount = zombies.length - aliveZombies.length;
        zombies = aliveZombies;
        lives -= deadZombiesCount;
        if(lives <= 0){
            console.log("dead");
            canvas.removeEventListener('click', canvasClick, false);
        }

        if(score < 0){
            canvas.removeEventListener('click', canvasClick, false);
        }

        for(var i = 0; i < zombies.length; i++){
            zombies[i].move();
            ctx.drawImage(zombieImage, zombies[i].getAnimationPos(), 0, 200, 312, zombies[i].x, zombies[i].y, zombies[i].scaledW, zombies[i].scaledH);    
        }

        var heartOffset = 0;

        for(var i = 0; i < lives; i++){
            ctx.drawImage(fullHeartImage, 0, 0, 433, 433, heartOffset + 10, 10, heartSize, heartSize);
            heartOffset += heartSize + 10;
        }

        for(var i = 0; i < maxLives - lives; i++){
            ctx.drawImage(emptyHeartImage, 0, 0, 1197, 1197, heartOffset + 10, 10, heartSize, heartSize);
            heartOffset += heartSize + 10;
        }
        ctx.font = "90px serif";
        ctx.fillStyle = "white";
        ctx.textAlign = "right";
        ctx.fillText(score, ctx.canvas.width, 100);

        framesPassed += 1
    } else {
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = "90px serif";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Score: " + score, ctx.canvas.width/2, ctx.canvas.height/2);
        ctx.fillText("Click anywhere to try again", ctx.canvas.width / 2, ctx.canvas.height/2 -100);
        canvas.addEventListener('click', restart, false);
    }
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

canvas.addEventListener('click',canvasClick , false);
function canvasClick(event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.pageX - rect.left,
    y = event.pageY - rect.top;
    var clicked = false;
    for(var i = 0; i < zombies.length; i++){
        if(zombies[i].wasClicked(x, y)){clicked = true};
    }
    if(!clicked){
        score += pointsPerMiss;
    }
}

function restart(event){
    lives = 3;
    score = 30;
    zombies = [];
    canvas.addEventListener('click', canvasClick, false);
    canvas.removeEventListener('click', restart, false);
}

const interval = setInterval(function() {
    draw();
}, frameInterval);