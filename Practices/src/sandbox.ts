

//functions

let greeting:Function;

greeting=()=>{
    console.log("Hello World")
}
greeting();

//union in arguments
const add=(a:number,b:number,c:number|boolean)=>{
    console.log(a+b);
    console.log(c);
}

add(2,3,5)

//returns in functions
const addition=(a:number,b:number,c:number|boolean):number=>{
    return a+b;
}

addition(2,3,5)


//c is optional
const adding=(a:number,b:number,c?:number|boolean)=>{
    console.log(a+b);
    console.log(c); //c will be undefined if no arguments are passed
}
adding(2,3)

//function is returning a void
const addi=(a:number,b:number,c?:number|boolean):void=>{
console.log("Hello world");
}
addi(2,3)











//aliasing-->Reduce code Duplications

type StringorNum=string | number;

const greet=(user:StringorNum)=>{
    console.log(`${user} is Here`);  //can pass String or Number
}

greet(9)









// function signatures


//defination-it returns a void
let greets:(a:number,b:number)=>void;

//describe the functiom
greets=(numone:number,numtwo:number)=>{
    console.log(numone+numtwo);
}

greets(112,3);


//defination-it returns a number
let greetss:(a:number,b:number)=>number;

//describe the functiom
greetss=(numone:number,numtwo:number)=>{
    return (numone+numtwo);
}

greetss(12,3);






