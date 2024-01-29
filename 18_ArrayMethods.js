let num = [1,2,3,4,5,6,7,8,9];
let numMore = [11,12,13,14,15,16,17,18,19];
let numNewMore = [211,212,213,214,215,216,217,218,219];
console.log(num);
delete num[0];
console.log(num, num.length);

let newArray = num.concat(numMore);
console.log(newArray);
newArray = num.concat(numMore, numNewMore);
console.log(newArray);


let compare =(a,b)=> {
    return a-b;
}

let revCompare =(a,b)=> {
    return b-a;
}

num = [1,2,4,6,5,3,7,8,9,10];
num.sort(); // modifies the orignal array
console.log(num); // sort on the basis of alphabtical order

num.sort(compare);
console.log(num);

num.reverse();
console.log(num);

// Splice and Slice

let deletedValues = num.splice(2,1,1022,1033,1044);
console.log(deletedValues);
console.log(typeof deletedValues);
console.log(num);

console.log(num.slice(1,3));
console.log(num.slice(1));
