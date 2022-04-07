
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var alien1,alien1_img,alien2,alien2_img,alien3,alien3_img,alien4_img,gameover,shooter,shooter_img

function preload()
{
	alien1_img = loadImage("assets/alien1.png")
	alien2_img = loadImage("assets/alien2.png")
	alien3_img = loadImage("assets/alien3.png")
	alien4_img = loadImage("assets/alien4.png")
	gameover = loadImage("assets/GameOver.jpg")
	shooter_img = loadImage("assets/Shooter.png")
}

function setup() {
	createCanvas(800, 700);

	alien1 = createSprite(400,400,10,10);
	alien1.addImage(alien1_img);


	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.
    

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



