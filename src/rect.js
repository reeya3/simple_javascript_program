class Rectangle{
  constructor(height, width) {
    this.myheight = height;
    this.mywidth = width;
  }
  
 
  
}


let rect1 = new Rectangle(5,4);

rect1.myheight = 50;


Rectangle.prototype.getArea= function(){
	 return this.myheight * this.mywidth;

}

 alert(rect1.getArea());


