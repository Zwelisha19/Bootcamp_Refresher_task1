//Exercise 1
let number = 10;
let float = 2.89;

let addition,subtraction,multiplication,division,modulus,exponentiation;

addition = number + float;
subtraction = number - float;
multiplication = number * float;
division = number / float;
modulus = Math.floor(number % float);
exponentiation = number ** float;


console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(modulus);
console.log(exponentiation);

//Execise 2

let isTrue = true;
let isFalse = false;


let x = 8;
let y = 12;

if(x > y){
    console.log(isFalse)
}
else if(x <= y){
    console.log(isTrue)
}
else if(x == y){
    console.log(isFalse)
}else if(x != y){
    console.log(isTrue)
}

let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log( !a);

let p = 10;

console.log(p += 10)
console.log(p -= 5)
console.log(p *= 3)
console.log(p /= 2)
console.log(p %= 3)