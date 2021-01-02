var hypnoticBall, database;
var position;


function setup(){
  database = firebase.database();
  //console.log(database);
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallPosition = database.ref('ball/Position');
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  
 if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(+1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
}
}

function writePosition(p,q){
  database.ref('ball/Position').set({
    'x': position.x + p ,
    'y': position.y + q
  })
}

function readPosition(data){
  position = data.val();
  console.log(data.val);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}