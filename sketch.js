var bullet,wall;

var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

 speed=random(55,90)
 weight=random(400,1500)
 thickness=random(22,83)

 bullet=createSprite(50, 200, 50, 50);

 bullet.velocityx = speed;

 bullet.shapeColor=color(255)


 
 wall=createSprite(1200, 200, thickness, height/2);
 wall.shapeColor=color(80,80,80)

}

function draw() {
  background(200,258,155);
  
   

  if(hasCollided(bullet,wall))
  {
    bullet.velocityx=0;
    var damage=0.5 * weight * speed* speed/(thicknes *thickness *thickness);
    if(damage>10)
    {
      wall.shapeColor=color(225,0,0)
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
    
  }

  drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bbulletRightEddge>=wallLeftEdge)
  {
        return true
  }
  return false;
}