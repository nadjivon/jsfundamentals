/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function


*/

function hi() {
    console.log('HI');
    return 'Hi'; // return bring values outdise of the function
}

hi // will do nothing
hi();

console. log(hi());


function  counting () {
    for (i =1; i< 11; i ++) {
        console.log(i)
    }
}
counting();

//given the Array, create a function that lists out the vlues individually.

let arr= [ 'This', 'is', 'really , 'cool'];

function show ( {
    for( a of arr) {    // letter (a) can be named anything.
    console.log(a);
}
show ();

