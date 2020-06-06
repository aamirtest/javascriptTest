var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.sub = function () {
        return (this.a + this.b);
    };
    C.prototype.sum = function () {
        return (this.x - this.y);
    };
    return C;
}());
var c = new C();
c.a = 10;
c.b = 20;
c.x = 100;
c.y = 50;
console.log(c.sum());
console.log(c.sub());
