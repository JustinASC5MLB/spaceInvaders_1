function setup(){
    createCanvas(1350, 787);
    bx = playershipx;
    by = playershipy;
}
let playershipx = 650;
let playershipy = 700;
let bullet = false;
let bx,by; //bulletx, bullety
function checkForCollision(){
    const enemyx = 20;
    const enemyy = 20;
    
}


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

    if (dist(200, 100, bx, by) <= 35) {
        console.log("hi")
    }




    if (keyIsDown(LEFT_ARROW)) {
        playershipx -= 5;
    }
 
    if (keyIsDown(RIGHT_ARROW)) {
        playershipx += 5;
    }  
if (playershipx <= 0) {
    playershipx = -playershipx
}
if (playershipx >= 1300){
    playershipx = -playershipx
}
fill(255, 0, 0);
rect(playershipx, playershipy, 50, 50);
    if (bullet === true){
        fill("pink")
        by = by - 20;
        rect (bx, by, 20, 20)
    } 
}
function keyPressed(){
    if (keyCode === 32){
        bullet = true;
        bx = playershipx + 25;
        by = playershipy - 50;
    }
}