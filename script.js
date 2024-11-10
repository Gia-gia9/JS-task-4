const add = (a,b) => {
    console.log(a+b);
}
add(4,7)





const sxvaoba = function (a,b) {
    return (a-b);
};
console.log(sxvaoba(8,3));





function iseven(num) {
    console.log(num %2 === 0);
    
}
iseven (3);






function multiplication(callback) {
    const numbers1 = 8
    const numbers2 = 5
    return callback(numbers1,numbers2)
    
}
function displaymultip(numbers1,numbers2) {
    return numbers1*numbers2
    
}
console.log(multiplication(displaymultip));






const isPositive = (num) => {
    console.log(num>0);
};
isPositive(-5);






const multiply = function (num) {
    return(num*2)
}
console.log(multiply(5));




function double(callback){
    const number3 = 6
    return callback (number3)
}
function displaydouble (number3) {
    return number3*2
}
console.log(double(displaydouble));




const isDivisibleByThree = (numb1) => {
    console.log(numb1%3 === 0);
}
isDivisibleByThree(6);






function iseven1(callback){
    const ricxvi = 5
    return callback (ricxvi)
}
function displayiseven (ricxvi){
    return ricxvi%2 === 0
}
console.log(iseven1(displayiseven));




const numcube =(numb2) => {
    console.log(numb2**3);
}
numcube(4);





function multiplication(callback) {
    const numbers4 = 5
    const numbers5 = 9
    return callback(numbers4,numbers5)
    
}
function displaymultip(numbers4,numbers5) {
    return numbers4*numbers5
    
}
console.log(multiplication(displaymultip));







const isGreaterThanZero = (num) => {
    console.log(num>0);
};
isGreaterThanZero(45);





const dividebytwo = function (numb3) {
    return(numb3/2)
}
console.log(dividebytwo(10));






function multiplication(callback) {
    const numbers4 = 4
    const numbers5 = 10
    return callback(numbers4,numbers5)
    
}
function displaymultip(numbers4,numbers5) {
    return numbers4+numbers5
    
}
console.log(multiplication(displaymultip));







const square = (numb5) => {
    console.log(numb5**2);
}
square(10);