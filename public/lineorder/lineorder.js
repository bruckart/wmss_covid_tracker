let bg;
let students = [];

function setup() {
  createCanvas(1400,600);
  bg = loadImage('grass.jpg');
  
  //Create 22 students all in a line (same y posistion)
  for (let i = 50; i < 1210; i +=55){
    let s = new Student (i, 300);
    students.push(s);
  }
}

//When mouse is pressed anywhere
function mousePressed(){
  for(let i = 0; i < students.length; i++){
    //Check each student if they were pressed
    students[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(bg);
  
  fill(255,255,255);
  textSize(40);
  text('Line Order', 40,40);
  
  strokeWeight(6);
  line(30,400,1250,400);
  
  //Draw each student circle in a line
  for (let i = 0; i < students.length; i++){
    students[i].show();
  }
}

class Student{
  constructor(x,y){
    this.studentCircleX=x;
    this.studentCircleY=y;
    this.circleWidth = 30;
    this.studentNum = -1;
  }
  
  show(){
    fill(0,0,255,191);//blue 75% opaque color
    circle(this.studentCircleX, this.studentCircleY, this.circleWidth);
    fill(255,255,255);
    textSize(12);
    //Show student number on the student circle
    if (this.studentNum == -1){
      text('Empty',this.studentCircleX-15, this.studentCircleY-15);
    }
    else {
      text(str(this.studentNum),this.studentCircleX-15, this.studentCircleY-15);
    }
  }
  
  clicked(px,py){
    let d = dist(px,py,this.studentCircleX, this.studentCircleY);
    if (d < this.circleWidth){
      //Open box to enter student number
      var sn = prompt("Enter Student Number");
      //make sure a valid number was entered
      if (int(sn) >= 1){
          this.setStudentNumber(int(sn));
      }
    }
  }
  
  setStudentNumber(n){
    this.studentNum = n;
  }
}
