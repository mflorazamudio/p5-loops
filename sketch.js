function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    strokeWeight(4);
    stroke(255);
    
    var x = 0;
    while(x<650){
        fill(0, 255, 0)
        ellipse(x,255, 25, 25);
        x = x + 50
    }
    
    for(var x = 0; x < 650; x = x + 50){
        fill(255, 0, 200);
        ellipse(x,100, 25, 25);
    }
    
    for(var x = 0; x < 650; x = x + 50){
        fill(62, 180, 137);
        rect(x,150, 25, 25);
    }
    
    var x = 0;
    while(x<650){
        fill(0, 52, 112)
        rect(x, 300, 37, 25);
        x = x + 65
    }
    
    for (var i = 0; i < 650; i+=73) {
	fill(62, 180, 137);
    triangle(30+i, 75, 58+i, 20, 86+i, 75);
    }
    
}



/*for(var x = 0; x < 650; x = x + 50){
        fill(62, 180, 137);
        triangle(30, 75, 58, 20, 86, 75);
    }
    */