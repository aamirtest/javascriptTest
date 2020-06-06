var y=100;
var  first= function eFun()
{
if(true){
    var x=200;
    console.log("calling inside if block"+x);
}
console.log("calling outside if block"+x)
}
console.log(first());
console.log("global variable"+y);