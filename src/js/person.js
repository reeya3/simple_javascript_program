class Person {

  constructor(height,width) {
    this.height = height;
    this.width =  width;
   
  }
}

let person1 = new Person(5.6 ,2);

console.log(person1.height);
console.log(person1.width);

person1.height = 20;
person1.width = 30;

console.log(person1.height);
console.log(person1.width);
