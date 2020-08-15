
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand,ground;
var block1, block2, block3, block4, block5,block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
var  slingshot;

var backcolor;
var RGB_value

var ball;

var score = 0;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  stand = new Ground(360,265,250,10);
  ground = new Ground(400,390,800,20);
  //level1
  block1 = new Box(270,240,30,40);
  block2 = new Box(300,240,30,40);
  block3 = new Box(330,240,30,40);
  block4 = new Box(360,240,30,40);
  block5 = new Box(390,240,30,40);
  block6 = new Box(420,240,30,40);
  block7 = new Box(450,240,30,40);

  //level2
  block8 = new Box(300,200,30,40);
  block9 = new Box(330,200,30,40);
  block10 = new Box(360,200,30,40);
  block11 = new Box(390,200,30,40);
  block12 = new Box(420,200,30,40);

  //level3
  block13 = new Box(330,160,30,40);
  block14 = new Box(360,160,30,40);
  block15 = new Box(390,160,30,40);

  //level4
  block16 = new Box(360,120,30,40);

  ball = new Ball(55,170,30,30);
  slingshot = new SlingShot(ball.body,{x:100, y:70});
  getTime();

  Engine.run(engine);

}

function draw() {
  Engine.update(engine)
  if(RGB_value){
    background(RGB_value);
  }
  stand.display();
  ground.display();
  
  textFont("Times New Roman")
  textSize(30);
  fill("#F29256")
  text("SCORE : "+score,600,40);
  //fill("#F0BFBD");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();

  //fill("#C7E5E0");
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  
 // fill("#D7DDF5");
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();

  //fill("#A2BCE8");
  block16.display();
  block16.score();

  ball.display();
  slingshot.display();

 
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if(keyCode === 32){

 slingshot.attach(ball.body)

  }

}

 async function getTime(){

var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var j_son = await response.json();
var date_time = j_son.datetime;
var hour = date_time.slice(11,13);
console.log(hour)

if(hour>=6 && hour<=18){
  RGB_value = "#FAE0DE" 
}

else{

  RGB_value = "#2070EF"

}

//backcolor(RGB_value)

}
