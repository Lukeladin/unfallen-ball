const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var ballObj, string;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;

  ballObj = new Ball(200,300,100);
  string = new String(ballObj.body,{x:400,y:200});
}

function draw() {
  background("#DC143C");  
  ballObj.display();
  string.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ballObj.body, {x: mouseX , y: mouseY});
}