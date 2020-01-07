class Rectangle{
  constructor(height, width) {
    this.myheight = height;
    this.mywidth = width;
  }
  
  getArea(){
   return this.myheight * this.mywidth;
 }
  
}
let rect1 = new Rectangle(5,4);

rect1.myheight = 50;


//Rectangle.prototype.getArea();

 alert(rect1.getArea());


