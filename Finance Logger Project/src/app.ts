
//classes in typescript
class invoice{
   client :string;
   details:string;
   amount :number;

   constructor(c:string,d:string,a:number){
    this.client=c;
    this.details=d;
    this.amount=a;
   }

    format(){
        return `${this.client} has amount ${this.amount} beacuse of ${this.details}`;
    }
}




//DOM in Typescript
const form=document.querySelector('form') as HTMLFormElement;
console.log(form);

const output=document.querySelector('.item-list') as HTMLUListElement;


console.log(output)

//object creation
const invone=new invoice('keshav','worked on website',200);
const invtwo=new invoice('poojary','worked on app', 400);


//class based array
let invoices:invoice[]=[];

// invoices.push(invone);
// invoices.push(invtwo);

invoices.forEach(inv=>{
console.log(inv.client,inv.amount,inv.format())
})


//Dom in typescript
const type=document.querySelector('#type') as HTMLSelectElement;
const toFrom=document.querySelector('#tofrom') as HTMLInputElement;
const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let newinvoice=new invoice(toFrom.value,details.value,amount.valueAsNumber);
    invoices.push(newinvoice)
    renderinvoice(newinvoice,type.value);
    type.value = 'invoice';
    toFrom.value = '';
    details.value = '';
    amount.value = '';
})

//adding item to list
function renderinvoice(inv:invoice,value:string){
    let listitem=document.createElement('li');
    listitem.textContent=`${value} ${inv.format()}`;
    console.log(value);
    output.append(listitem);
}



//interfaces
interface isPerson{
   name:string,
   age:number,
   speak(a:string):void;
   spend(amount:number):number;
}

const person:isPerson={
  name:"Keshav",
  age:20,
  speak(a:string):void{
    console.log(a);
  },

  spend(num:number):number{
    return num;
  }

}

console.log(person.name,person.age,person.spend(5))


//generics(templates)
const addIds=(obj:object)=>{
    let id=Math.floor(Math.random()*100);
    return {...obj,id};
}

console.log(addIds({name:"Keshav",age:20}))

//SAME code can be used for diferent datatypes
const adduIds=<T>(obj:T)=>{
    let id=Math.floor(Math.random()*100);
    return {...obj,id};
}

//specially need object means
// const adduIds=<T extends object>(obj:T)={}
//specially need object with name(string) && age(number)
// const adduIds=<T extends {name:string,age:number}>(obj:T)=>{}

console.log(adduIds("Keshav"))
console.log(adduIds({name:"Keshav",age:20}))


//enums
enum Days { 
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
}

let printDay=(a:Days)=>{
    if(a==Days.friday){
        console.log("This is Friday")
    }else{
        console.log("This is not a friday");
    }
}

printDay(Days.saturday);


//tuples

let arr:[string,number]; //intiakization

arr=['Keshav',12]//declaration


//both initialization && declaration
let data:[string,number]=['Keshav',18]

//destructing
const [names,age]=data;
console.log(names,age);

