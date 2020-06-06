var Employee = /** @class */ (function () {
    function Employee(eid, ename, eDep) {
        this.eid = eid;
        this.ename = ename;
        this.eDep = eDep;
    }
    Employee.prototype.setData = function (id, name, dep) {
        this.eid = id;
        this.ename = name;
        this.eDep = dep;
    };
    Employee.prototype.Show = function () {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.eDep);
    };
    return Employee;
}());
//var obj1 = new Employee();
//var obj2 = new Employee();
// obj1.setData(10,"tscript",5);
// obj1.Show();
// obj1.eid=100;
// obj1.ename="Aamir";
// obj1.eDep=5;
// obj1.Show();
var obj3 = new Employee(10, "tscript", 5);
obj3.Show();
