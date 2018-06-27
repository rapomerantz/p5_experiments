console.log('js');
let col = 0; 
let r = 0;
let b = 255; 

function setup() {
    createCanvas(1001, 601); 
}

function draw(){
    r = map(mouseX, 0, 1000, 0, 255); 
    b = map(mouseY, 600, 0, 255, 0); 
    background(r, 0, b); 
    fill(250, 118, 222); 
    ellipse(mouseX, 200, 64, 64);     
}
