const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var triangle1;
var rectangle1;



function setup() {

  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  rectangle1 = new Rectangle(50,400,85,500);
  rectangle2 = new Rectangle(140,500,85,500);
  rectangle3 = new Rectangle(230,600,85,500);
  rectangle4 = new Rectangle(320,600,85,500);
  rectangle5 = new Rectangle(410,500,85,500);
  rectangle6 = new Rectangle(500,400,85,500);

  stroke(0);
  
beginShape();

vertices(20,400);
vertices(90,500);
vertices(130,400);

endShape(CLOSE);

}

function draw() {
  background(0); 

rectangle1.display(); 
rectangle2.display();
rectangle3.display();
rectangle4.display();
rectangle5.display();
rectangle6.display();

  drawSprites();
}