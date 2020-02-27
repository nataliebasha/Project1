var state=0;
var stateStatic=0;
var stateCowell=1;
var stateLomo=2;
var stateGleeson=3;
var stateMclaren=4;
var stateUC=5;
let imgMap;
let imgMarker;
let imgCowell;
let imgLomo;
let imgGleeson;
let imgMclaren;
let imgUC;

function preload(){
	imgMap= loadImage('assets/image1.jpg');
	imgMarker=loadImage('https://cdn140.picsart.com/261630460024212.png?to=min&r=640');
	imgCowell= loadImage('assets/image2.jpg');
	imgLomo= loadImage('assets/image3.jpg');
	imgGleeson= loadImage('assets/image4.jpg');
	imgMclaren= loadImage('assets/image5.jpg');
	imgUC= loadImage('assets/image6.jpg');
}

function setup(){
	imageMode(CENTER);
	createCanvas(1024,800);
	background(255);
	smooth();
	input=createInput();
	input.position(20, 65);

	button = createButton('submit');
	button.position(input.x + input.width, 65);
	button.mousePressed(greet);

	greeting = createElement('h2', 'What is your name?');
	greeting.position(20, 5);

	textAlign(CENTER);
	textSize(50);
}

function draw(){
	if(state==stateStatic){
		drawStatic();
	}
	else if(state==stateCowell){
		drawCowell();
	}else if(state==stateLomo){
		drawLomo();
	}else if(state==stateGleeson){
		drawGleeson();
	}else if(state==stateMclaren){
		drawMclaren();
	}else if(state==stateUC){
		drawUC();
	}
}


function drawStatic(){
	image(imgMap, width/2,height/2);

}

function greet(){
  const name = input.value();
  greeting.html('Hello, ' + name + '! Press any key between 1-5 to find out where the bathroom(s) is located! '+
  				'Routes are from Gleeson Plaza!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill((7, 93, 42));
    translate(random(width), random(height));
    rotate(random(2 * PI));
    //text(name, 0, 0);
    pop();
  }
}

function drawCowell(){
	image(imgMarker, width/2-50,height/2+110,30,30);
	image(imgCowell, width/2+200,height/2-150,200,200);
	textAlign(CENTER)
	textSize(50);
	fill(0);
	text('Ground floor, Fourth Floor',width/2,height/2);
}

function drawLomo(){
	image(imgMarker, width/2-90,height/2-215,30,30);
	image(imgLomo, width/2+200,height/2-150,200,250);	
	textAlign(CENTER)
	textSize(45);
	fill(8,9,38);
	text('First Floor, Second Floor(All Gender)',width/2,height/2);
}

function drawGleeson(){
	image(imgMarker, width/2-140,height/2+50,30,30);
	image(imgGleeson, width/2+200,height/2-150,200,250);	
	textAlign(CENTER)
	textSize(45);
	fill(8,9,38);
	text('All Floors!' ,width/2,height/2);
}

function drawMclaren(){
	image(imgMarker, width/2+70,height/2+110,30,30);
	image(imgMclaren, width/2+200,height/2-150,200,250);	
	textAlign(CENTER)
	textSize(45);
	fill(8,9,38);
	text('First Floor' ,width/2,height/2);
}

function drawUC(){
	image(imgMarker, width/2+45,height/2+60,30,30);
	image(imgUC, width/2+200,height/2-150,200,250);	
	textAlign(CENTER)
	textSize(45);
	fill(8,9,38);
	text('First Floor, Second Floor' ,width/2,height/2);
}

function keyPressed(){
	if (key=='1')
		state=stateCowell;
	else if (key=='2')
		state=stateLomo;
	else if (key=='3')
		state=stateGleeson;
	else if (key=='4')
		state=stateMclaren;
	else if (key=='5')
		state=stateUC;
	else
		state=stateStatic;
}
function keyReleased(){
	state=stateStatic;
}

