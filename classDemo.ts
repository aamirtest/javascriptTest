class Employee{

    eid :number;
    ename: string;
    eDep : number;

    constructor(eid:number,ename:string,eDep:number){
        this.eid=eid;
        this.ename=ename;
        this.eDep=eDep;

    }

    setData(id:number,name:string,dep:number):void
    {
        this.eid=id;
        this.ename=name;
        this.eDep=dep;
    }

    Show():void{
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.eDep);
    }

}
//var obj1 = new Employee();
//var obj2 = new Employee();

// obj1.setData(10,"tscript",5);
// obj1.Show();

// obj1.eid=100;
// obj1.ename="Aamir";
// obj1.eDep=5;
// obj1.Show();
var obj3 = new Employee(10,"tscript",5);
obj3.Show();

