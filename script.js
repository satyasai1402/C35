var ball;

function setup(){
    createCanvas(500,500);
    ball=createSprite(250,250,10,10);
    ball.shapeColour="red";
}

function draw(){
    background("white");
    if(keyDown("left")){
        changePosition(-1,0);
    } else if(keyDown("right")){
        changePosition(1,0);
    } else if(keyDown("top")){
        changePosition(0,-1);
    } else if(keyDown("left")){
        changePosition(0,1);
    }  
}

function changePosition(x,y){
    ball.x=ball.x + x;
    ball.y=ball.y + y;
}