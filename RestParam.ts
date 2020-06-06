function Greet1(gretting:string,...name:string[])
{
    return gretting+" "+name.join(", ");
}
console.log(Greet1("Namaste"))
console.log(Greet1("Namaste","India","China"))
console.log(Greet1("Namaste","India","China","Namaste","India","China"))