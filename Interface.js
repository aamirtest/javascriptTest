var emp = {
    eName: "Aamir",
    eAge: 25,
    aSex: "Male",
    displayDat: function () {
        console.log((this.eName + " " + this.eAge + " " + this.aSex));
    }
};
console.log(emp.displayDat());
