/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas*/

let list =  [  'item1',   'item2',    'item3'];
console.log(typeof list);

let groceryList = ['oranges', 'bananas', 'oreos'];
console.log(groceryList[2])

let students =[ 'Tony', 'MArshall', 'Thys', 'Ray', 23, true, 'Cory', 'Garrett, 'Brian']

//console.log(typeof students); // object
   console.log(u=student instanceof Array)


   
   let name =students[6]
   console.log('HEllo', name[2], 'you look nice today'[6])



   //* Populating and Referring

   let food = ['PEcan pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

   fod.push('Pizza');
   food.splice(1, 1, 'Bananas') // this is used to replace an item.
   food.pop () ;
   food.shift()
   food.unshift ()

   for (f of food) {
       console.log(f)      
   }