/*What is a variiables are names containers for tstoring data values
WE name the variables so that we can refer to this sata again.
*/

let a =2;
    let   b      =      1;
  /*(1)     (2)    (3)    (4)

1- keyword
2-variable value 
3- assigment operator
4-variable value

*/
console.log(a+b);
/* let, and Const:

Var = 'old' keyword for variables ** we wont be using this as OfflineAudioContextEventMap. If you have prior coding

Let= 'new' keyword for ariables (introduce with ES^ * newe versuib if H=JS) FOr now it is best oractice i to learn to use let
Const= also 'new' declare uncheangeable variables
*/
/*
Decelariokns are the lEft side of a variablesIt is simply the let x
It is on the left side of the assignment operator (=)

Inistialization s arethe right side of a variable Ot set the value of the variableIt incorporates the variable name (x), the assignment operaor (=) and the value (10 => x=10)
*/

let x;
console.log('Declaration:', x) // Decleration: undefined

x = 10;
console.log ('Initialization 1:',x); //Initialization 1 :10

x = 33
console.log('Initialization 2:' ,x);// Initialization 2: 33

let y='Hello';
console.log('Both:', x,y);

/* Const = also 'new'; declare variables meant to remain unchanged
*/

let today = 'Great!';
const elevenfifty= 'Wonderful';
console.log(today, elevenfifty)

today ='lovely!';
console.log(today, elevenfifty);

//elevenfifty  = 'Super'; throws an error, do not do this 
console.log(today, elevenfifty);
