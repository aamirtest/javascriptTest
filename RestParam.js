function Greet1(gretting) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return gretting + " " + name.join(", ");
}
console.log(Greet1("Namaste"));
console.log(Greet1("Namaste", "India", "China"));
console.log(Greet1("Namaste", "India", "China", "Namaste", "India", "China"));
