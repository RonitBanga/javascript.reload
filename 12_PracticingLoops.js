let marks = {
    Ronit : 98,
    Banga : 99,
    Shubhi : 66,
    Isheeta : 66
} 

for(let i=0; i<Object.keys(marks).length; i++) {
    console.log(Object.keys(marks)[i] + " has scored " + marks[Object.keys(marks)[i]] + " marks.");
}

for(let key in marks) {
    console.log(key + " has scored " + marks[key] + " marks.");
}

let cn = 4;
let num = 0;
// while(num!=cn) {
//     num = prompt("Enter thr correct number : ");
//     if(num!=cn) console.log("Try again!");
// }
console.log("You have entered a correct number.");

const mean = (a,b,c,d) => {
    return (a+b+c+d)/4;
}
console.log(mean(1,2,3,4));
