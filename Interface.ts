interface IEmployee
{

    eName:string;
    eAge:number;
    aSex:String;
    displayDat:()=>void
}
var emp: IEmployee=
{
    eName:"Aamir",
    eAge:25,
    aSex:"Male",
    displayDat():void{
        console.log((this.eName+" "+this.eAge+" "+this.aSex))

}
}
console.log(emp.displayDat());

