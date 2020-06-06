class Person
{
    name:string;

    constructor(name:string){
        this.name=name;

    }
}
class Employees extends Person
{
    enumber:number;

    constructor(enumber:number,name:string){

        super(name);
        this.enumber=enumber;  
    }
    displayData():void{
        console.log(this.enumber);
        console.log(this.name);
    }

}
var obj = new Employees(100,"Aamir");
obj.displayData();

