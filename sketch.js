
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var Ground;
function preload()
{

}

function setup() {
	createCanvas(800, 700);

	var balls_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(300,20,10,balls_options);
	World.add(world, ball);
	//Create the Bodies Here.
	Ground = new ground(-100, 600, 100000, 5);
	left = new ground(500, 600, 50, 200);
	right = new ground(800, 600, 50, 200);
	Engine.run(engine);
  
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0}, {x:0, y:-.1});
	}	
	if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0}, {x:.1, y:0});
	}
	if(keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0}, {x:-.1, y:0});
	}
}
function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  Ground.display();
  left.display();
  right.display();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,100);
  drawSprites();
 
}

