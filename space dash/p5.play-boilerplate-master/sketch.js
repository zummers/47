var spacebackground
var space
var boundaries_top
var boundaries_bottom

var astronaunt
var gear

var planet1
var planet2
var planet3
var planets1 
var planets2
var planets3

var planetImage
var planetImage2
var planetImage3

var gameState='play'

function preload(){
spacebackground=loadImage("space.jpg")
planetImage=loadImage("planet1.png")
planetImage2=loadImage("planet_2.png")
planetImage3=loadImage("planet3.png")

gear=loadImage("space man1.png")
}

function setup() {
  createCanvas(1200,500);

  boundaries_top=createSprite(600,0,1200,10)
  boundaries_bottom=createSprite(600,500,1200,10)
  
  astronaunt=createSprite(50, 250, 50, 50);
  astronaunt.addImage(gear)
  astronaunt.scale=0.2

  planets1=new Group()
  planets2=new Group()
  planets3=new Group()
}

function draw() {
  background(spacebackground);
  if(gameState=='play'){
  if(keyDown("up")){
    astronaunt.y=astronaunt.y-10
  }

  if(keyDown("down")){
    astronaunt.y=astronaunt.y+10
  }

  createEdgeSprites()
  astronaunt.bounceOff(boundaries_bottom)
  astronaunt.bounceOff(boundaries_top)
 
  spawnPlanets();

  
  if(astronaunt.collide(planets1)|| astronaunt.collide(planets2)|| astronaunt.collide(planets3)){
    gameState='end'
  }
}
    if(gameState=='end'){
    astronaunt.destroy();
    planets1.destroyEach();
    planets2.destroyEach();
    planets3.destroyEach();

    planets1.setVelocityXEach(0)
    planets2.setVelocityXEach(0)
    planets3.setVelocityXEach(0)
    textSize(50)
    text("Game Over",600,250)
    }

 
  drawSprites();

}

function spawnPlanets(){
  if(frameCount%100===0){
    planet1=createSprite(1200,random(50,470),20,20)
    planet1.addImage(planetImage)
    planet1.scale=0.2
    planet1.velocityX=-3
    planet1.lifetime=400
    planets1.add(planet1)
  }

  if(frameCount%200===0){
    planet2=createSprite(1200,random(200,400),20,20)
    planet2.addImage(planetImage2)
    planet2.scale=0.2
    planet2.velocityX=-5
    planet2.lifetime=350
    planets2.add(planet2)
  }

  if(frameCount%300===0){
    planet3=createSprite(1200,random(100,490),20,20)
    planet3.addImage(planetImage3)
    planet3.scale=0.2
    planet3.velocityX=-7
    planet3.lifetime=300
    planets3.add(planet3)
  }

  
}
