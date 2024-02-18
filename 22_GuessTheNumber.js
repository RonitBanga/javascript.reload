let num;
let ranNum = Math.floor(Math.random()*100);
do{
    num = prompt("Enter a number : ");
    if(num==ranNum) console.log("Hurreyy!! :D");
    else if(num>ranNum) console.log("Number is greater than num.");
    else console.log("Number is less than num.");
}while(num!=ranNum)