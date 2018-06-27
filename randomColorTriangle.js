console.log('randomColorTriangle');


function setup() {
    createCanvas(1001, 601)
    background(0);
}

function draw(){
    noStroke(); 
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    fill(randomColor); 
    triangle(mouseX, mouseY, 500, 500, 600, 400)
}

function mousePressed() {
    background(0);


}