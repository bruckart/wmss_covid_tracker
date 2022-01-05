
let bg;
let deskWidth;
let deskHeight;
let students = [];

function setup() {
  createCanvas(1200,600);
  //bg = loadImage('empty-blackboard.jpg');
  
  deskWidth = width/7;
  deskHeight = height/7;
  
  //first row
  let s1 = new Student(357,130);
  students.push(s1);
  let s2 = new Student(443,130);
  students.push(s2);
  let s3 = new Student(586,130);
  students.push(s3);
  let s4 = new Student(672,130);
  students.push(s4);
  
  //second row
  let s5 = new Student(128,271);
  students.push(s5);
  let s6 = new Student(214,271);
  students.push(s6);
  let s7 = new Student(357,271);
  students.push(s7);
  let s8 = new Student(443,271);
  students.push(s8);
  let s9 = new Student(586,271);
  students.push(s9);
  let s10 = new Student(672,271);
  students.push(s10);
  
  //third row
  let s11 = new Student(128,415);
  students.push(s11);
  let s12 = new Student(214,415);
  students.push(s12);
  let s13 = new Student(357,415);
  students.push(s13);
  let s14 = new Student(443,415);
  students.push(s14);
  let s15 = new Student(586,415);
  students.push(s15);
  let s16 = new Student(672,415);
  students.push(s16);
  
  //fourth row
  let s17 = new Student(128,556);
  students.push(s17);
  let s18 = new Student(214,556);
  students.push(s18);
  let s19 = new Student(357,556);
  students.push(s19);
  let s20 = new Student(443,556);
  students.push(s20);
  let s21 = new Student(586,556);
  students.push(s21);
  let s22 = new Student(672,556);
  students.push(s22);
  
}


function mousePressed(){
  for(let i = 0; i < students.length; i++){
    students[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(255);
  
  //make grid
  for (var x = 0; x < width; x += width / 42) {
    for (var y = 0; y < height; y += height / 21) {
      stroke('white');
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
  
  //hardcoded tables
  fill(165,42,42,191);//brown 75% opaque color
  rect(0,0,deskWidth, deskHeight);//teacher desk
  fill(255,255,255);
  text('Teacher\'s Desk',20, 20);
  
  fill(165,42,42,191);//brown 75% opaque col
  //first row
  rect(315,30,deskWidth, deskHeight);
  rect(543,30,deskWidth, deskHeight);

  //second row
  rect(85,171,deskWidth, deskHeight);
  rect(315,171,deskWidth, deskHeight);
  rect(543,171,deskWidth, deskHeight);


  //third row
  rect(85,315,deskWidth, deskHeight);
  rect(315,315,deskWidth, deskHeight);
  rect(543,315,deskWidth, deskHeight);

  //fourth row
  rect(85,456,deskWidth, deskHeight);
  rect(315,456,deskWidth, deskHeight);
  rect(543,456,deskWidth, deskHeight);
  
  //hardcoded seats
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
    if (this.studentNum == -1){
      text('Empty',this.studentCircleX, this.studentCircleY);
    }
    else {
      text(str(this.studentNum),this.studentCircleX, this.studentCircleY);
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
