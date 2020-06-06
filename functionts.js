//named function
function display() {
    console.log("welcome to typeScript");
}
display();
function sums(x, y) {
    return x + y;
}
console.log(sums(10, 20));
var val = sums(20, 30);
console.log(val);
console.log("******************");
//Anonymous function
var greeting = function () {
    console.log("Welcome to TS");
};
greeting();
var Sum = function (x, y) {
    return x + y;
};
console.log(Sum(50, 50));
function displaying() {
    console.log("this is function");
}
displaying();
