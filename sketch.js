var pos = 0;
var person;
var hats = [];
var roles = ["designer", "engineer", "foodie", "baking hobbyist", "student"]
var currentRole = 0;
var options = [];
var displayFont;

var changedAlready = false;

function preload(){
  person = loadImage("assets/person.png"); 
  hats.push(["designer", loadImage("assets/designer-hat.png")]);
  hats.push(["engineer",loadImage("assets/engineer-hat.png")]);
  hats.push(["foodie", loadImage("assets/foodie-hat.png")]);
  hats.push(["baking hobbyist", loadImage("assets/baker-hat.png")]);
  hats.push(["student", loadImage("assets/student-hat.png")]);

  print (hats);

  displayFont = loadFont('assets/Narita-Monospace.otf');

}


function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB,100);

  textFont('Rajdhani');
  textAlign(CENTER);
  textSize(48);

}
function touchMoved(){
  return false;
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  // background(183, 223, 255);
  background((62+currentRole*10)%100,30,95);
  var personHeight = height*0.33;
  var personWidth = personHeight*person.width/person.height;
  image(person, width / 2, height - personHeight / 2, personWidth, personHeight);

  image(hats[0][1], pos, height - personHeight, personWidth*2.5, personWidth * 2.5);
  image(hats[1][1], - width/2+pos, height - personHeight, personWidth*2.5, personWidth * 2.5);
  image(hats[2][1], - width+pos, height - personHeight, personWidth*2.5, personWidth * 2.5);
  image(hats[3][1], - 3*width/2 + pos, height - personHeight, personWidth*2.5, personWidth * 2.5);
  image(hats[4][1], - 2*width + pos, height - personHeight, personWidth*2.5, personWidth * 2.5);

  if ((pos % (width / 2) < width * 0.2) && (pos>200) && currentRole >= 0){
    fill(255,0,100);
    text(hats[currentRole][0], width/4, height/3, width/2, height/3);
    //image(hats[currentRole], pos, height - personHeight, personWidth * 1.5, personWidth * 1.5);
  }
  // print(changedAlready);
  print("pos:" + pos);
  currentRole = Math.floor(pos/(width/2)-1)%roles.length;
  // print("(pos+width*0.2)/(width/2):" + (pos+width*0.2)/(width/2));

}

function mouseWheel(event) {
  if ((pos<=width*2.9 && pos >= 0)  || (pos>width*2.9 && event.delta<0) || (pos<0 && event.delta>0)){
    pos += event.delta;
  }
  //uncomment to block page scrolling
  //return false;
}