function setup(){
    createCanvas(1350, 787);
}
const playershipx = 650;
const playershipy = 700;
let a = 50;
let b = 250;
let va = 2.5;
let bulletx = 650;
let bullety = 700;
let bulletspeed = 0;

function draw() {
    background("black");
    fill ("white")
    rect(200, 100, 50, 50)
    rect(300, 100, 50, 50)
    rect(400, 100, 50, 50)
    rect(500, 100, 50, 50)
    rect(600, 100, 50, 50)
    rect(700, 100, 50, 50)
    rect(800, 100, 50, 50)
    rect(900, 100, 50, 50)
    rect(1000, 100, 50, 50)
    rect(1100, 100, 50, 50)
    rect(200, 200, 50, 50)
    rect(300, 200, 50, 50)
    rect(400, 200, 50, 50)
    rect(500, 200, 50, 50)
    rect(600, 200, 50, 50)
    rect(700, 200, 50, 50)
    rect(800, 200, 50, 50)
    rect(900, 200, 50, 50)
    rect(1000, 200, 50, 50)
    rect(1100, 200, 50, 50)
 

    if (keyIsDown(LEFT_ARROW)) {
        playershipx -= 5;
    }
 
    if (keyIsDown(RIGHT_ARROW)) {
        playershipx += 5;
    }  
if (playershipx <= 0) {
    playershipx = -playershipx

if (playershipx >= 1300){
    playershipx = -playershipx
}
fill(255, 0, 0);
rect(playershipx, playershipy, 50, 50);
}
function keyPressed(){
    if (){}
a += va;
if(a >= 1300){
    va = -va;
    fill('white')
    }
if(a <= 5){
    va = -va;
    fill('white') 
}    

    rect(200, 100, 50, 50)
    rect(300, 100, 50, 50)
    rect(400, 100, 50, 50)
    rect(500, 100, 50, 50)
    rect(600, 100, 50, 50)
    rect(700, 100, 50, 50)
    rect(800, 100, 50, 50)
    rect(900, 100, 50, 50)
    rect(1000, 100, 50, 50)
    rect(1100, 100, 50, 50)
    rect(200, 200, 50, 50)
    rect(300, 200, 50, 50)
    rect(400, 200, 50, 50)
    rect(500, 200, 50, 50)
    rect(600, 200, 50, 50)
    rect(700, 200, 50, 50)
    rect(800, 200, 50, 50)
    rect(900, 200, 50, 50)
    rect(1000, 200, 50, 50)
    rect(1100, 200, 50, 50)
}
