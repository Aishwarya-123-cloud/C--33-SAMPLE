var snowbackground, snowfall,snowfallImage,snowImage2,snowImage, snowImage3, snow3, snow4,snoeImage4;
var girl, snowgirl;


function preload(){
  snowbackground = loadImage("snow1.jpg");
 // snowgirl = loadImage("snowgirl.jpg");
  snowfallImage = loadImage("snow4.webp");
  snowImage2 = loadImage("snow5.webp");
  snowImage3 = loadImage("snow4.webp");
  snowImage4 = loadImage("snow5.webp");
  


}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snowfall = createSprite(200,200,50,50)
  snowfall.addImage("snow4.webp",snowfallImage);
  snowfall.scale = 0.3;

  snowImage = createSprite(500,100,40,50)
  snowImage.addImage("snow5.webp",snowImage2);
  snowImage.scale = 0.3;

  snow3 = createSprite(600,50,40,50);
  snow3.addImage("snow4.webp", snowImage3);
  snow3.scale = 0.3

  snow4 = createSprite(400,160,40,50);
  snow4.addImage("snow5.webp", snowImage4);
  snow4.scale  = 0.3;

  girl = createSprite(400,400,40,50)
  girl.addImage("snowgirl.jpg", snowgirl);
}

function draw() {
  background(snowbackground);  
  

  
  drawSprites();
}


