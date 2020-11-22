const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Myengine,Myworld;
var Ball;
var object;
function setup() {
  createCanvas(800,400);
  background ("blue");

  Myengine = Engine.create()
  Myworld = Myengine.world;
    var options = {
      isStatic: true
    }
    var BallOptions = {
      restitution: 0.5,
      
    }
  object = Bodies.rectangle(400,400,800,40,options)
  World.add(Myworld,object)
  Ball=Bodies.circle(100,100,30,BallOptions)
  World.add(Myworld,Ball)
  console.log(Ball)
}

function draw() {
  background("blue");  
  Engine.update(Myengine)
  rectMode(CENTER);
  ellipseMode(RADIUS)
  fill("brown")
  rect(object.position.x,object.position.y,800,40)
  ellipse(Ball.position.x,Ball.position.y,30,30)

}
