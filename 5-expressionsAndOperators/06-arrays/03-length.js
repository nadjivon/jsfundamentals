// *length

let long= [1,2,3,4,5,6,7,8,9,10]
console.log(long.length)

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']
//console.log(colors) = object
//console.log(color.length)
//console.log(colors.toString())

// console.log (typeof colors)
//console.log colors.toString())

/*
Challenge:
* First check if you are working with an array
* Then flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
* Using a method only, print the values of the newly arranged array
*/

let arr = [1,2,3,4,5];

if (arr instanceof Array) {
  let revArr = arr.reverse()
  revArr.forEach(a => console.log(a))
} else {
  console.log('This is not an array.')
}


