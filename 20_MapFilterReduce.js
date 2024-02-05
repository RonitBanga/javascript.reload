let arr = [11, 33, 88, 45, 23, 21];
// these functions does not modify the array create a new one
// Array map method
let a = arr.map((value, index, array)=>{   //same with for each
    console.log(value+index, array);
    return value+index;
});
console.log(a);

// Filter in arr  
let a2 = arr.filter((a)=>{
    return a<30;
});
console.log(a2);

let arr2 = [1, 3, 5, 7, 2];
let a3 = arr2.reduce((h1, h2)=>{
    console.log(h1, h2);
    return h1+h2;
});
console.log(a3);

const reduce_func = (h1,h2) => {
    return h1+h2;
}
let a4 = arr2.reduce(reduce_func);
console.log(a4);