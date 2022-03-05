const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone,rubber,hammer,iron;
var plane

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    stone = new Stone(1180,320,50,900);
    rubber = new Rubber(700,320,70,100);
    hammer = new Hammer(700,320,70,100);
    iron = new Iron(4,100);
    plane = new Plane(600,height,10000,40);
    
    
    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    stone.display();
    rubber.display();
    hammer.display();
    iron.display();
    plane.display();
    
    

 
}
