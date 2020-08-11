var dog, happyDog;
var dogIMG,happyDogIMG;
var database;
var foodS, foodStock;

function preload(){
   dogIMG = loadImage("Dog.png")
   happyDogIMG = loadImage("happydog.png")
}
function setup() {
  createCanvas(1000,500);

database = firebase.database();
foodStock = database.ref('Food');
foodStock.on("value", readStock);

  dog = createSprite(450,300,50,50);
  dog.addImage(dogIMG); 
  dog.scale = 0.2; 
}


function draw() {  
  background(46,189,37);

  fill("black");
  textSize(20);
  text("Food Remaining : " + foodS , 300,200);
  text("NOTE : Press UP_ARROW key to feed Drago the milk",300,30);

  

  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
    if(x<=0){
      x = 0;
    }else{
      x = x - 1;
    } 
  database.ref('/').update({
     Food:x
  })
}



