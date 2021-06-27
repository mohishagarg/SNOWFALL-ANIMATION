const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snow=[];
var maxsnow=100;
var snowImg;
var backgroundImg;

function preload(){
  backgroundImg=loadImage("snow3.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1200,600);

}



function draw() {
  Engine.update(engine);
  background(backgroundImg); 
  
  if(frameCount%5===0) {
    snow.push(new Snow(random(0, 1200), 30, 30))
    
  }
  for(var i = 0; i<snow.length; i++) {
    snow[i].display()
  }

  drawSprites();
}

