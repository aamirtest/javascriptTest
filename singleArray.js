var fruits1 = ["Apple", "Mango", "Pea"]; //Array declare and initialization
console.log(fruits1);
var fruits2; // Array declaration
fruits2 = ["Mango", "Banana", "PineApple"];
console.log(fruits2);
//MultiType Array
var fruits3 = ["Mango", "Orange", "Apple", 100, 200];
console.log(fruits3);
var fruits4;
fruits4 = ["Mango", "Orange", "Apple", 100, 200, 300, 400, 500];
for (var i = 0; i < fruits4.length; i++)
    console.log(fruits4[i]);
for (var j in fruits3)
    console.log(fruits3[j]);
