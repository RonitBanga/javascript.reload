let n = "10";
// let n = prompt("Enter the value of n : ");
let i = 0;
let sum = 0;
while(i <= n) {
    sum += i;
    i++;
}
console.log(sum);

i = 0;
sum = 0;
do{
    // console.log(i);
    sum += i; 
    i++;
} while (i<=n)
console.log(sum);