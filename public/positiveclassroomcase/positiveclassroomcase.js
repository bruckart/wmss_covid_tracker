
let bg;
let deskWidth;
let deskHeight;
let students = [];

function setup() {
  createCanvas(1200,600);
  bg = loadImage('empty-blackboard.jpg');
  
  deskWidth = width/7;
  deskHeight = height/7;
  
  //Make students in class
  //first row
  let s1 = new Student(357,130);
  s1.setStudentNumber(generateRandomStudentNum());
  students.push(s1);
  let s2 = new Student(443,130);
  s2.setStudentNumber(generateRandomStudentNum());
  students.push(s2);
  let s3 = new Student(586,130);
  s3.setStudentNumber(generateRandomStudentNum());
  students.push(s3);
  let s4 = new Student(672,130);
  s4.setStudentNumber(generateRandomStudentNum());
  students.push(s4);
  
  //second row
  let s5 = new Student(128,271);
  s5.setStudentNumber(generateRandomStudentNum());
  students.push(s5);
  let s6 = new Student(214,271);
  s6.setStudentNumber(generateRandomStudentNum());
  students.push(s6);
  let s7 = new Student(357,271);
  s7.setStudentNumber(generateRandomStudentNum());
  students.push(s7);
  let s8 = new Student(443,271);
  s8.setStudentNumber(generateRandomStudentNum());
  students.push(s8);
  let s9 = new Student(586,271);
  s9.setStudentNumber(generateRandomStudentNum());
  students.push(s9);
  let s10 = new Student(672,271);
  s10.setStudentNumber(generateRandomStudentNum());
  students.push(s10);
  
  //third row
  let s11 = new Student(128,415);
  s11.setStudentNumber(generateRandomStudentNum());
  students.push(s11);
  let s12 = new Student(214,415);
  s12.setStudentNumber(generateRandomStudentNum());
  students.push(s12);
  let s13 = new Student(357,415);
  s13.setStudentNumber(generateRandomStudentNum());
  students.push(s13);
  let s14 = new Student(443,415);
  s14.setStudentNumber(generateRandomStudentNum());
  students.push(s14);
  let s15 = new Student(586,415);
  s15.setStudentNumber(generateRandomStudentNum());
  students.push(s15);
  let s16 = new Student(672,415);
  s16.setStudentNumber(generateRandomStudentNum());
  students.push(s16);
  
  //fourth row
  let s17 = new Student(128,556);
  s17.setStudentNumber(generateRandomStudentNum());
  students.push(s17);
  let s18 = new Student(214,556);
  s18.setStudentNumber(generateRandomStudentNum());
  students.push(s18);
  let s19 = new Student(357,556);
  s19.setStudentNumber(generateRandomStudentNum());
  students.push(s19);
  let s20 = new Student(443,556);
  s20.setStudentNumber(generateRandomStudentNum());
  students.push(s20);
  let s21 = new Student(586,556);
  s21.setStudentNumber(generateRandomStudentNum());
  students.push(s21);
  let s22 = new Student(672,556);
  s22.setStudentNumber(generateRandomStudentNum());
  students.push(s22);
  
}

function generateRandomStudentNum(){
  return int(random(1000000,9999999));
}

function mousePressed(){
  for(let i = 0; i < students.length; i++){
    students[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(bg);
  
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
    this.circleWidth = 30;//1 square on the grid
    this.studentNum = -1;
    this.infected = false;
    this.exposed = false;
  }
  
  show(){
    fill(0,0,255,191);//blue 75% opaque color
    circle(this.studentCircleX, this.studentCircleY, this.circleWidth);
    fill(255,255,255);
    //Put student number on circle
    if (this.studentNum == -1){
      text('Empty',this.studentCircleX, this.studentCircleY);
    }
    else {
      text(str(this.studentNum),this.studentCircleX, this.studentCircleY);
    }
    //Make red circle infected area if this student is positive
    /*Algorithm for diameter of red circle:
      1 square on grid = 1 foot = 30 pixels
      From the infected student radius has to be 6 feet = 6 squares = 6*30 pixels
      and diameter = 2* radius, so diameter of red circle = 2*6*30 = 360 pixels
      Since the diameter of the blue student circle is 1 square (30 pixels),
      diameter of the red circle is 2*6* this.circleWidth */
      
    if (this.infected){
       fill(255,0,0,200);
       circle(this.studentCircleX, this.studentCircleY, this.circleWidth * 12);
    }
  }
  
  clicked(px,py){
    let d = dist(px, py, this.studentCircleX, this.studentCircleY);
    if (d < this.circleWidth){
      console.log("Student infected!!!");
      this.infected = true;
    }
  }
  
  setStudentNumber(n){
    this.studentNum = n;
  }
}
