
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var binImg,bin;
var dustbin;
var ball;
function preload(){

}


function setup() {
	createCanvas(1600,700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	
	ground = Bodies.rectangle(width / 2,400,width,10,{isStatic: true});
	World.add(world,ground);

	ball= new Ball(200,640);
	ball.debug=true;

	dustbin= new DustBin(1200,650);
	

	ground = new Ground(800,670,1600,20);
	
}


function draw() {
	
  background("white");
  rectMode(CENTER);
  background(0);

  ball.display();
  dustbin.display();
  ground.display();
}

 function keyPressed(){
  if (keyCode === UP_ARROW){
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }	 
 }

 



