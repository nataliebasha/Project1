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
let imgDot;

function preload(){
	imgMap= loadImage('assets/image1.jpg');
	imgMarker=loadImage('https://cdn140.picsart.com/261630460024212.png?to=min&r=640');
	imgCowell= loadImage('assets/image2.jpg');
	imgLomo= loadImage('assets/image3.jpg');
	imgGleeson= loadImage('assets/image4.jpg');
	imgMclaren= loadImage('assets/image5.jpg');
	imgUC= loadImage('assets/image6.jpg');
	imgDot= loadImage('assets/image8.jpg');
}

function setup(){
	imageMode(CENTER);
	createCanvas(1024,800);
	background(255);
	smooth();
	/*input=createInput();
	input.position(20, 65);

	button = createButton('submit');
	button.position(input.x + input.width, 65);
	button.mousePressed(greet);


	greeting = createElement('h2', 'still figuring this out lmao?');
	greeting.position(20, 5);

	textAlign(CENTER);
	textSize(50);*/
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
	textAlign(CENTER)
	textSize(20);
	fill(0);
	text('Press any key to discover a restroom on campus!',width/2,50);
	text('1= Cowell, 2= Lone Mountain, 3= Gleeson Library, 4= Mclaren & 5= University Center',width/2,75);
}

/*function greet(){
  const name = input.value();
  greeting.html('Hello, ' + name + '! Press any key! 1=Cowell,2=Lone Mountain, 3=Gleeson Library, 4=Mclaren & 5= University Center'+
  				' Routes are from Gleeson Plaza!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill((7, 93, 42));
    translate(random(width), random(height));
    rotate(random(2 * PI));
    pop();
  }
}
*/
function drawCowell(){
	image(imgDot,width/2-140,height/2+50,15,15);
	image(imgDot,width/2-120,height/2+50,15,15);
	image(imgDot,width/2-100,height/2+50,15,15);
	image(imgDot,width/2-80,height/2+50,15,15);
	image(imgDot,width/2-80,height/2+70,15,15);
	image(imgDot,width/2-80,height/2+90,15,15);
	image(imgDot,width/2-80,height/2+110,15,15);
	image(imgDot,width/2-60,height/2+110,15,15);
	image(imgMarker, width/2-50,height/2+110,30,30);
	textAlign(LEFT);
	textSize(15);
	fill(0);
	text('1 minute walk!', 300,430)
	textSize(50);
	fill(255);
	var w= textWidth('Ground Floor, Fourth Floor');
	rect(300,555,w,50);
	fill(0);
	text('Ground Floor, Fourth Floor',300,600);
}

function drawLomo(){
	image(imgDot,width/2-140,height/2+50,15,15);
	image(imgDot,width/2-140,height/2+30,15,15);
	image(imgDot,width/2-140,height/2+10,15,15);
	image(imgDot,width/2-140,height/2-10,15,15);
	image(imgDot,width/2-140,height/2-30,15,15);
	image(imgDot,width/2-140,height/2-50,15,15);
	image(imgDot,width/2-140,height/2-70,15,15);
	image(imgDot,width/2-140,height/2-90,15,15);
	image(imgDot,width/2-140,height/2-110,15,15);
	image(imgDot,width/2-140,height/2-130,15,15);
	image(imgDot,width/2-140,height/2-150,15,15);
	image(imgDot,width/2-120,height/2-150,15,15);
	image(imgDot,width/2-100,height/2-150,15,15);
	image(imgDot,width/2-100,height/2-170,15,15);

	image(imgMarker, width/2-90,height/2-215,30,30);
	//image(imgLomo, width/2+200,height/2-150,200,250);	
	textAlign(CENTER)
	textSize(15);
	fill(0);
	text('6 minute walk!', 330,height/2-215);
	textSize(45);
	fill(255);
	var w= textWidth('First Floor, Second Floor(All Gender) ');
	rect(130,515,w,50);
	fill(8,9,38);
	text('First Floor, Second Floor(All Gender)',width/2,550);

}

function drawGleeson(){
	image(imgMarker, width/2-140,height/2+50,30,30);	
	textAlign(CENTER)
	textSize(15);
	fill(0);
	text('0 minute walk!', 350,430);
	textSize(45);
	fill(255);
	var w= textWidth('All Floors!');	
	rect(410,height/2-40,w,50);
	fill(8,9,38);
	text('All Floors!' ,width/2,height/2);
}

function drawMclaren(){
	//image(imgMclaren, width/2+200,height/2-150,200,250);	
	image(imgDot,width/2-140,height/2+50,15,15);
	image(imgDot,width/2-120,height/2+50,15,15);
	image(imgDot,width/2-100,height/2+50,15,15);
	image(imgDot,width/2-80,height/2+50,15,15);
	image(imgDot,width/2-80,height/2+70,15,15);
	image(imgDot,width/2-80,height/2+90,15,15);
	image(imgDot,width/2-80,height/2+110,15,15);
	image(imgDot,width/2-60,height/2+110,15,15);
	image(imgDot,width/2-40,height/2+110,15,15);
	image(imgDot,width/2-20,height/2+110,15,15);
	image(imgDot,width/2,height/2+110,15,15);
	image(imgDot,width/2+20,height/2+110,15,15);
	image(imgDot,width/2+40,height/2+110,15,15);
	image(imgDot,width/2+60,height/2+110,15,15);

	image(imgMarker, width/2+70,height/2+110,30,30);
	textAlign(LEFT);
	textSize(15);
	fill(0);
	text('3 minute walk!', 400,430);
	textSize(45);
	fill(255);
	var w= textWidth('Ground Floor, Fourth Floor');
	rect(300,555,w,50);
	fill(0);
	text('Ground Floor, Fourth Floor',300,600);

}

function drawUC(){
	//image(imgUC, width/2+200,height/2-150,200,250);	
	image(imgDot,width/2-140,height/2+50,15,15);
	image(imgDot,width/2-140,height/2+30,15,15);
	image(imgDot,width/2-120,height/2+30,15,15);
	image(imgDot,width/2-100,height/2+30,15,15);
	image(imgDot,width/2-80,height/2+30,15,15);
	image(imgDot,width/2-60,height/2+30,15,15);
	image(imgDot,width/2-40,height/2+30,15,15);
	image(imgDot,width/2-20,height/2+30,15,15);
	image(imgDot,width/2,height/2+30,15,15);
	image(imgDot,width/2+20,height/2+30,15,15);
	image(imgDot,width/2+40,height/2+30,15,15);
	image(imgDot,width/2+40,height/2+50,15,15);
	image(imgMarker, width/2+45,height/2+60,30,30);
	textAlign(LEFT);
	textSize(15);
	fill(0);
	text('5 minute walk!', 650,430);
	textSize(45);
	fill(255);
	var w= textWidth('First Floor, Second Floor');
	rect(300,555,w,50);
	fill(0);
	text('First Floor, Second Floor',300,600);
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

