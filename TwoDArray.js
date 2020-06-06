var myArray = [[10, 20], [20, 30], [30, 40]];
console.log(myArray);
var DArray = [[1, "Hello"], [2, "World"], [3, "Testing"], [4, "2dArray"]];
console.log(DArray);
for (var k in DArray) {
    for (var j in DArray[k]) {
        console.log(DArray[k][j]);
    }
}
