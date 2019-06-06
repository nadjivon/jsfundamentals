//* Iterating

//* forEach() methhod executes a rovided function once for each array element.

let food= [ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog']

food.forEach(f => { console.log(f); });
food.forEach((f, number)=>{console.log(number); console.log(f);})
food.forEach((f, number, array)=>{console.log(number); console.log(f); console.log(array)});


let movie = ['The Notebook', 'Aladin', 'Cinderella', 'Beauty and the Beast']

movie.push ('Taken')
movie.splice (4, 1, 'When Harry met Sally']
movie.forEach(x => {console.log(m)})
