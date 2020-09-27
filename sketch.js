var car,wall; 
var speed, weight;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(60,85)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
}
 
function draw(){ 
  background(255,255,255); 
  car.velocityX = speed;
  wall.shapeColor=color(80,80,80)
       isTouching()
       
       
     
    
  drawSprites();
}


function isTouching(){
  if(wall.x-car.x < (car.width+wall.width)/2)
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;  
    if(deformation<100)
  {
      car.shapeColor=green(0,255,0);

  }
  if(deformation>100 && deformation<180)
  {
    car.shapeColor="yellow"(230,230,0)
  }
  if(deformation>180)
  car.shapeColor="red"(255,0,0)

    
  }