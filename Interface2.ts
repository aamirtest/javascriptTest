interface I1
{
    a:number;
    b:number;
    sum():void
}
interface I2
{
    x:number;
    y:number;
    sub():void
}
class C implements I2{
    a:number;
    b:number;
    x:number;
    y:number;
    sub():number{
        return(this.a+this.b)
    }
    sum():number{
        return(this.x-this.y)
    }
}
var c = new C();
c.a=10;
c.b=20;
c.x=100;
c.y=50;

console.log(c.sum());
console.log(c.sub());
