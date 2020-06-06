function Greet(firstName, secondName) {
    return firstName + "  " + secondName;
}
console.log(Greet("Welcome", "Aamir"));
//Optional Paramters
function sum(first, second) {
    return first + "  " + second;
}
console.log(sum("Learnig TS", "Chennai"));
console.log(sum("TypeScript"));
//console.log(sum("TypeScript","hello","optionalParam"));
//Default params
function Greeting(name, greet) {
    if (greet === void 0) { greet = "welcome"; }
    return name + "  " + greet;
}
console.log(Greeting("type", "script"));
console.log(Greeting("type"));
