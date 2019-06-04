//* Scope: where a variable is defined and aceessible
//*GLobal scope: Where variables to whole program or project
//*local scope variable only availe within function or specific File

// local variables take priority over global vaiable


varTest();
console.log(x);  //12
var x = 12;
function letTest() {
  var x = 33;
  if(true){
    let x = 45;
    console.log(x); //45 
  }
  console.log(x);  //33
}
letTest();
console.log(x);  //12
function constTest() {
  const scope = 1;
  if(true) {
    const scope = 2;
    console.log(scope);  //2
  }
  console.log(scope); //1
}
constTest();