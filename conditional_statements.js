//Exercise 1

let tempature = 50;


if (tempature < 0){
    console.log("It's freezing")
}
else if(tempature >=0 && tempature <=15){
    console.log("It's cold")
}
else if(tempature > 15 && tempature <=25){
    console.log("It's mild")
}
else{
    console.log("It's warm")
}


switch(true) {
    case tempature < 0:
        console.log("It's freezing");
        break;
    case tempature >= 0 && tempature <= 15:
        console.log("It's cold");
        break;
    case tempature > 15 && tempature <= 25:
        console.log("It's mild");
        break;
    case tempature > 25: 
        console.log("It's warm");
        break;
}

let myNum = 12;


if(myNum % 2 === 0 && myNum % 3 ===0){
    console.log("Divisible by both")
}
else if(myNum % 2 !==0 && myNum % 3 ===0){
    console.log("Divisible by 3")
}
else if(myNum % 2 === 0 && myNum % 3 !== 0){
    console.log("Divisible by 2")
}
else{
    console.log("Not divisible by 2 or 3")
}


switch(true){
    case myNum % 2 === 0 && myNum % 3 ===0:
        console.log("Divisible by both");
        break;
    case myNum % 2 !==0 && myNum % 3 ===0:
        console.log("Divisible by 3");
        break;
    case myNum % 2 === 0 && myNum % 3 !== 0:
        console.log("Divisible by 2");
        break;
    case myNum % 2 !== 0 && myNum % 3 !== 0:
        console.log("Not divisible by 2 or 3");
}

//exercise 3

for(let x=1;x<=10;x++){
    console.log(x)
}

for(let x=1;x<=20;x++){
    if(x % 2 === 0){
        console.log(x)
    }
}

let Loop_sum=0;
for(let x=1;x<=100;x++){
    Loop_sum+=x;
}
console.log(Loop_sum)

const numbers=[1,2,3,4,5];

for(let i =0;i<numbers.length;i++){
    console.log(numbers[i])
}

const numbersArr = [3, 7, 2, 5, 10, 6];
let largeNum=0;
for(let i=0;i<numbersArr.length;i++){

    if(numbersArr[i]>largeNum){
        largeNum=numbersArr[i];
    }
}
console.log("large number is " + largeNum)

//Exercise 4

let i=1;

while(i<=10){
    console.log(i);
    i++;
}

let j=1;

while(j<=20){
    if(j % 2 === 0){
        console.log(j);   
    }
     j++;
}

let f=1;
let totCount=0;


while(f <= 100)
    {
    totCount+=f;
    f++;
}
console.log("Total for count " + totCount);

let multiples=5;

while(multiples<=50){
    if(multiples % 5 ===0){
        console.log(multiples)
    }
    multiples++;
}


//Execise 5

let nums=1;

do{
    console.log(nums)
    nums++;
}while(nums<=10);

let k=1;
let sum_from_1_To_100=0;

do{
    sum_from_1_To_100+=k;
    k++;
}while(k<=100);

console.log("Sum from 1 to 100 is "+sum_from_1_To_100);


let validNum;

do{
    validNum=Number(window.prompt("Enter a number greater than 10")); 
}while(validNum<10);



let guessNumber;

do{
    guessNumber=Number(window.prompt("Guess a number between 1 and 10"));
}while(guessNumber < 1 || guessNumber > 10)



