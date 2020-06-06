var fruits1:string[]=["Apple","Mango","Pea"]  //Array declare and initialization
console.log(fruits1)

var fruits2:Array<string> // Array declaration
fruits2 =["Mango","Banana","PineApple"]
console.log(fruits2)


//MultiType Array

var fruits3:(string | number)[]=["Mango","Orange","Apple",100,200]
console.log(fruits3)

var fruits4:Array<string | number>
fruits4 = ["Mango","Orange","Apple",100,200,300,400,500]

//1st way
for(var i=0; i<fruits4.length; i++)
console.log(fruits4[i])

//2nd way
for(var j in fruits3)
console.log(fruits3[j])