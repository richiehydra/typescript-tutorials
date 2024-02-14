//functions
var greeting;
greeting = function () {
    console.log("Hello World");
};
greeting();
//union in arguments
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(2, 3, 5);
//returns in functions
var addition = function (a, b, c) {
    return a + b;
};
addition(2, 3, 5);
//c is optional
var adding = function (a, b, c) {
    console.log(a + b);
    console.log(c); //c will be undefined if no arguments are passed
};
adding(2, 3);
//function is returning a void
var addi = function (a, b, c) {
    console.log("Hello world");
};
addi(2, 3);
var greet = function (user) {
    console.log("".concat(user, " is Here")); //can pass String or Number
};
greet(9);
// function signatures
//defination-it returns a void
var greets;
//describe the functiom
greets = function (numone, numtwo) {
    console.log(numone + numtwo);
};
greets(112, 3);
//defination-it returns a number
var greetss;
//describe the functiom
greetss = function (numone, numtwo) {
    return (numone + numtwo);
};
greetss(12, 3);
