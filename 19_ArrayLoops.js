let num = [3,4,5,2,1];

for(let i=0; i<num.length; i++) {
    console.log(num[i]);
}

// forEach
num.forEach((element)=>{
    console.log(element*element);
});

// Array.from
let name = "Ronit";
let arr = Array.from(name);
console.log(arr);
console.log(typeof arr);

//for...of
for(let i of num) console.log(i);

//for...in
for(let i in num) console.log(num[i]);
