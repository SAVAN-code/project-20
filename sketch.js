
var car,wall;

var speed,weight;

function setup() {
  createCanvas(600,200);
  

  car= createSprite(0,100,50,50);
  car.velocityX= 30;
  wall=createSprite(600,100,50,height/2);
}




function draw() {
  background("black");  
speed=random(55,90);
weight=random(400,1500);

if(car.isTouching(wall)){
  car.velocityX = 0;
 
}


  drawSprites();
}