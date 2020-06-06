var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees(enumber, name) {
        var _this = _super.call(this, name) || this;
        _this.enumber = enumber;
        return _this;
    }
    Employees.prototype.displayData = function () {
        console.log(this.enumber);
        console.log(this.name);
    };
    return Employees;
}(Person));
var obj = new Employees(100, "Aamir");
obj.displayData();
