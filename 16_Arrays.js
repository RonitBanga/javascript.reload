let arr = [22,33,44,55,null,false,"not given"];
console.log(arr);

console.log(arr[2]);
console.log(arr.length);
console.log(arr[0].length);

arr[7] = 88;
arr[22] = 90;
arr[1] = 99;

console.log(arr);

console.log(typeof(arr[15]));
console.log(typeof(arr));

for(let i of arr) console.log(i);
