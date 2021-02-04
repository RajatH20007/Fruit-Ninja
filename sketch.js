         
var sword, swordImage,  swordSound;

var fruit,fruit1, fruit2, fruit3, fruit4; 
var monster,monster1, monster2;
var rand,rand2;

var gameOverImage, gameOverSound;

var enemyGroup, fruitGroup;

var PLAY=1;
var END=0;
var gameState=1;

var score;

score=0;

function preload(){
  
 swordImage=loadImage("sword.png");
 fruit1=loadImage("fruit1.png");
 fruit2=loadImage("fruit2.png");
 fruit3=loadImage("fruit3.png");
 fruit4=loadImage("fruit4.png"); 
 gameOverImage=loadImage("gameover.png"); 
 monsterImage=loadAnimation("alien1.png","alien2.png");
 swordSound=loadSound("knifeSwooshSound.mp3") 
 gameOverSound=loadSound("gameover.mp3")
}

function setup(){
  
  createCanvas(600,600);
  
  sword=createSprite(300,300,10,10);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
}


function draw(){

  background("lightblue");
  
  text("Score: "+score,300,25);
  
  if(gameState===PLAY){
    
  sword.x=World.mouseX;
  sword.y=World.mouseY;
  
  fruits();
  Enemy();
  
  
  if (fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach();
  swordSound.play();
  score=score+2;}
       
    if (enemyGroup.isTouching(sword)){
  gameOverSound.play();
  gameState=END;    
  }
    
  }
  
  if(gameState===END){
    fruitGroup.destroyEach();
    enemyGroup.destroyEach(); 
    fruitGroup.velicityX=0;
    enemyGroup.velicityX=0;
    sword.addImage(gameOverImage);
    sword.scale=2;
    sword.x=300;
    sword.y=300;
  }
  drawSprites();
  
}

function fruits(){
  
  if(frameCount%60===0){
    
    fruit=createSprite(600,300,20,20);
    fruit.scale=0.2;
    rand=Math.round(random(1,4))
    
    if(rand==1){
     fruit.addImage(fruit1);
    }
    
    else if(rand==2){
     fruit.addImage(fruit2);
     }
    
    else if(rand==3){
     fruit.addImage(fruit3);
     }
    
    else{
     fruit.addImage(fruit1);
     }
    
    fruit.y=Math.round(random(50,350))
    fruit.velocityX=-7;
    fruit.lifetime=100;
    
    fruitGroup.add(fruit);
    
  }
}

  function Enemy(){
    if (frameCount%100==0){
    monster= createSprite(600,300,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(50,550));
    monster.velocityX=-8;
    monster.lifetime=100;
    
    enemyGroup.add(monster);
    }
  }
