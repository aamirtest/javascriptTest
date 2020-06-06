function Greet(firstName:string, secondName:string):string
{

    return firstName+"  "+secondName;
}
console.log(Greet("Welcome", "Aamir"));

//Optional Paramters
function sum(first:string, second?:string):string
{
    return first+"  "+second;
}
console.log(sum("Learnig TS", "Chennai"));
console.log(sum("TypeScript"));
//console.log(sum("TypeScript","hello","optionalParam"));

//Default params
function Greeting(name:string, greet:string="welcome"):string
{
    return name+"  "+greet;
}

console.log(Greeting("type","script"));
console.log(Greeting("type"))
