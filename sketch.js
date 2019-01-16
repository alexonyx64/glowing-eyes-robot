var xc, yc, F, A, B, b, G, g;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(0);
	
	noStroke();
	
	xc = windowWidth/2;
	yc = windowHeight/2;
	
	ellipseMode(RADIUS);
	
}	
	
function draw() {
	
	F = frameCount%1000;
	A = 255; //this variable exists because i messed up and i didn't feel like going back to clean everything up
	B = 255*((250-F)/250);
	G = 255*((F-250)/250);

//light gray
	fill(200, 200, 200, A);
//faceplate
	ellipse(xc, yc-25, 125, 125);
	
//black
	fill(0, 0, 0, A);
//eye hole
	triangle(xc+1, yc-44, xc+99, yc-44,  xc+35, yc-11);
	
//blue
	fill(175, 200, 255, G);
//eye
	triangle(xc, yc-45, xc+100, yc-45,  xc+35, yc-10);
	
//white
	fill(255, 255, 255, A);
//comm lines
	rect(xc, yc+50-30, 117, 10);
	rect(xc, yc+50+20-15, 97, 10);
//mouth plate
	ellipse(xc, yc+50, 20*1.5, 20*1.5);
	ellipse(xc+24, yc+50+20, 10*1.5, 10*1.5);
	ellipse(xc-24, yc+50+20, 10*1.5, 10*1.5);
//brow plate
	arc(xc, yc-25, 125, 125, .80*PI, (.85*PI)+PI, OPEN);
	arc(xc, yc-25, 125, 125, PI+(PI/3), PI/10, OPEN);
	
//black
	fill(0, 0, 0, A);
//upper vent
	ellipse(xc, yc-100, 55, 25);
	
//white
	fill(255, 255, 255, A);
//inter-vent plate
	ellipse(xc, yc-90, 50, 20);
	
//black
	fill(0, 0, 0, A);
//lower vent
	ellipse(xc, yc-80, 45, 15);
	
//dark gray
	fill(150, 150, 150, A);
//lens plate
	ellipse(xc-101, yc+2, 40, 40);
	ellipse(xc-35, yc-20, 24, 24);
	ellipse(xc-90, yc-95, 45, 45);
	quad(xc-82, yc+37, xc-120, yc-33, xc-61, yc-70, xc-24, yc+2);
	quad(xc-132, yc-78, xc-48, yc-110, xc-12, yc-27, xc-96, yc+5);
//mouth holes
	ellipse(xc, yc+50, 20, 20);
	ellipse(xc+24, yc+50+20, 10, 10);
	ellipse(xc-24, yc+50+20, 10, 10);
	
//red
	//fill(255, 0, 0);
	
//white
	fill(255, 255, 255, A);
//lens rings
	ellipse(xc-101, yc+2, 32, 32);
	ellipse(xc-35, yc-20, 20, 20);
	ellipse(xc-90, yc-95, 32, 32);
	
//light gray
	fill(200, 200, 200, A);
	ellipse(xc-90, yc-95, 26, 26);
	
//white
	fill(255, 255, 255, A);
	ellipse(xc-90, yc-95, 20, 20);
	
//black
	fill(0, 0, 0, A);
//lens holes
	ellipse(xc-101, yc+2, 26, 26);
	ellipse(xc-35, yc-20, 14, 14);
	ellipse(xc-90, yc-95, 14, 14);
	
//blue
	fill(175, 200, 255, G);
//lenses
	ellipse(xc-101, yc+2, 27, 27);
	ellipse(xc-35, yc-20, 15, 15);
	ellipse(xc-90, yc-95, 15, 15);
	
//fade block
	fill(0, 0, 0, B);
	rect(0, 0, 2*xc, 2*yc);
	
}
