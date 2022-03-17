
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, bg_image,
bg_sound

var witch;

var potion1;
var potion2;

var skull;




function preload() {
  bg_image = loadImage('scary_background.jpg');
  witch_img = loadImage('witch.png');
  witch_sound = loadSound('witch_sound.mp3');

}


function setup() {
  createCanvas(800,500);

  witch = new Witch(600, 300, 50, 180);


  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  image(bg_image, 0, 0, width, height);

  witch.show();

  drawSprites();

  Engine.update(engine);
  
}

