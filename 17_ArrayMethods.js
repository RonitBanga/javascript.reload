let num = [1,2,3,4];
let b = num.toString();
console.log(b);

let c = num.join('_');
console.log(c, typeof c);

c = num.join(' and ');
console.log(c, typeof c);

num.pop(); // returns the element poped
console.log(num);

num.push(4); // returns the new array length
console.log(num); 

num.shift(); // returns the number shifted/removed from the beginning
console.log(num);

num.unshift(15); // returns new array length and add the element in the beginning
console.log(num);

