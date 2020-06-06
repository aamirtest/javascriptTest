// Fat Arrow function  - with parameters

var sum1=(x:number, y:number)=>
{
    return x+y;
}
console.log(sum1(10,10))

//Parametersless function
var print1=()=> console.log("TypeScript")
print1();

var sum2=(x:number, y:number)=>x+y;
console.log(sum2(30,20));

