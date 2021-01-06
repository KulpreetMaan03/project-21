var bullet,wall,thickness;
var speed,weight;

function setup(){
  createCanvas(1600,400)

  thickness=random(22,83);

bullet=createSprite(50,200,50,5);
bullet.shapeColor="white";
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="white";

speed=random(55,90);
weight=random(400,1500);
bullet.velocityX=speed;

}

function draw(){
background("black");

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
  wall.shapeColor=color(225,0,0);
  }
  if(damage<10){
  wall.shapeColor=color(0,225,0);
  }
  if (damage>10) {
    thickness=40;
  }
  if (damage<10) {
    thickness=70;
  }
  }
  

drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
    return false;
      
}
