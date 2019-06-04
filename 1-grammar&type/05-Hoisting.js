// * Hoisting: scanning and getting a preview of what has been seen. JS gets read twice. We don't really use it

console.log(scissors);

scissors ='blue'

console.log(scissors);
var scissors;

b();
console.log(a);

 function b() {
     console.log('this is all hoisted!')
 }

 var a= 'This is not hoisted';

 