

let num = prompt("enter the number", " ");

let fact = [factorize(num)];
let result = fact.toString();

 //for finding factor of given number
 function factorize(num){
 let factors =[] , i ;
  for(i=1; i<=num; i++) {
  	console.log(i);
    if (num%i==0){

    	factors.push(i);

    }
   }
   console.log(factors);
return factors;

}

console.log(`the factor of ${num} is ${result}`);


if (result.includes(3 || 5 || 7))
	alert("pling");
else if (result.includes(5 || 3 ||7))
	alert("plung");
else if (result.includes(7 || 5 | 3)) {
	alert("plong");
}
else{
	console.log(` ${result}`)
}
