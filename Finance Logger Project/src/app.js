var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//classes in typescript
var invoice = /** @class */ (function () {
    function invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    invoice.prototype.format = function () {
        return "".concat(this.client, " has amount ").concat(this.amount, " beacuse of ").concat(this.details);
    };
    return invoice;
}());
//DOM in Typescript
var form = document.querySelector('form');
console.log(form);
var output = document.querySelector('.item-list');
console.log(output);
//object creation
var invone = new invoice('keshav', 'worked on website', 200);
var invtwo = new invoice('poojary', 'worked on app', 400);
//class based array
var invoices = [];
// invoices.push(invone);
// invoices.push(invtwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
//Dom in typescript
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var newinvoice = new invoice(toFrom.value, details.value, amount.valueAsNumber);
    invoices.push(newinvoice);
    renderinvoice(newinvoice, type.value);
    type.value = 'invoice';
    toFrom.value = '';
    details.value = '';
    amount.value = '';
});
//adding item to list
function renderinvoice(inv, value) {
    var listitem = document.createElement('li');
    listitem.textContent = "".concat(value, " ").concat(inv.format());
    console.log(value);
    output.append(listitem);
}
var person = {
    name: "Keshav",
    age: 20,
    speak: function (a) {
        console.log(a);
    },
    spend: function (num) {
        return num;
    }
};
console.log(person.name, person.age, person.spend(5));
//generics(templates)
var addIds = function (obj) {
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
console.log(addIds({ name: "Keshav", age: 20 }));
//SAME code can be used for diferent datatypes
var adduIds = function (obj) {
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
//specially need object means
// const adduIds=<T extends object>(obj:T)={}
//specially need object with name(string) && age(number)
// const adduIds=<T extends {name:string,age:number}>(obj:T)=>{}
console.log(adduIds("Keshav"));
console.log(adduIds({ name: "Keshav", age: 20 }));
//enums
var Days;
(function (Days) {
    Days[Days["sunday"] = 0] = "sunday";
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
})(Days || (Days = {}));
var printDay = function (a) {
    if (a == Days.friday) {
        console.log("This is Friday");
    }
    else {
        console.log("This is not a friday");
    }
};
printDay(Days.saturday);
