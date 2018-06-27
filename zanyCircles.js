console.log('js');
let circleX = 0; 
let circleY = 200;
let circleWidth = 80; 
let circleHeight = 80; 
let resizeSpeed = 5; 

var r, g, b;

let timer = 0; 


function setup() {
    createCanvas(1001, 601)
    frameRate(200)
    r = random(255);
    g = random(255);
    b = random(255);
}

function draw(){
    background(250, 250, 100);
    fill(r, g, b)
    noStroke()
    ellipse(circleX, circleY, circleWidth, circleHeight)
    circleX += resizeSpeed; 
    circleWidth += resizeSpeed; 
    circleHeight += resizeSpeed;

    if (timer === 50){
        circleX = random(1000); 
        circleY = random(600);
        circleWidth = 80; 
        circleHeight = 80; 
        resizeSpeed = random(-20, 20)
        mousePressed(); 
        ellipse(circleX - 10, circleY, circleWidth, circleHeight)
        ellipse(circleX, circleY, circleWidth, circleHeight)
        timer = 0; 
    }
    timer ++; 
    console.log(timer);
    
}

function mousePressed(fxn) {
    r = random(255);
    g = random(255);
    b = random(255);
}