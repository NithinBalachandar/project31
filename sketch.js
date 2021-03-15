const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];
function setup(){
    var canvas = createCanvas(1200,700);
    
    division1 = new division (200,600,10,400);
    division2 = new division (400,600,10,400);
    division3 = new division (600,600,10,400);
    division4 = new division (800,600,10,400);
    Plinko = new plinko (200,200,10);
    particle1= new particle (200,200,50);
  }

function draw(){
 
 division1.display();
 division2.display();
 division3.display();
division4.display();
particle1.display();
}


for(var k = 0; k<=this.width; k=k +80){
  divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight));
}

for(var j = 40; j <=this.width; j=k+50){
  plinkos.push(new Plinko(j,75));
}
 
for (var j = 15;j <=this.width-10; j=j+50  ){
    plinkos.push(new Plinko(j,175));
}

for(var k = 0; k < particles.length; k++){
  particles[k].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
}

for(var j = 0; j < particles.length; j++){
  particles[j].display();
}
