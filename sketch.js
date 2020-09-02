var fixedRect, movingRect, sprite1, sprite2;

function setup() {
  createCanvas(1200,800);
  sprite1 = createSprite(100, 600, 50, 50);
  sprite1.shapeColor = "green";
  sprite2 = createSprite(1100, 600, 50, 50);
  sprite2.shapeColor = "red";
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "orange";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  sprite1.velocityX = +5;
  sprite2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
Bounceoff(sprite1, sprite2);
Bounceoff(sprite1, fixedRect);
Bounceoff(sprite1, movingRect);
Bounceoff(sprite2, fixedRect);
Bounceoff(sprite2, movingRect);
Bounceoff(movingRect, fixedRect);


drawSprites();
}