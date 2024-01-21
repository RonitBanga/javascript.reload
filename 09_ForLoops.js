let sum = 0;
// let n = prompt("Enter the value of n")
let n = "10";
n = Number.parseInt(n);
for(let i=0; i<n+1; i++) {
  sum += i;
}

console.log(sum);

function fib(n)
{
    let a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for(i = 2; i <= n; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
}

console.log(fib(6));

let obj = {
  Ronit: 90,
  Shubh: 45,
  Abhi: 86,
  Isheeta: 56  
};

for(let a in obj) {
  console.log(a + " scored " + obj[a] + " marks."); 
}

for(let a of "Banga") {
  console.log(a);
}

// for of works only for iterable objects like arrays, strings etc.