
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var myWorld,myEngine;



var roof,bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
    roof = new Roof(500,100,500,50);
	bob1 = new Bob(500,500,50);
	bob2 = new Bob(400,500,50);
	bob3 = new Bob(300,500,50);
	bob4 = new Bob(600,500,50);
	bob5 = new Bob(700,500,50);
	chain1 = new Chain(bob1.body,roof.body,-100*2,0);
	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 // drawSprites();
 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 chain1.display();
}



