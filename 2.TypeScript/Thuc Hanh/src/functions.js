"use strict";
exports.__esModule = true;
// ============================================
// @ts-ignore
var lib_1 = require("husky/lib");
function square(num) {
    return num * num;
}
console.log(square(5));
Expected: 25;
// ============================================
// Function expression
var squareFE = function (num) {
    return num * num;
};
console.log(squareFE(9));
// Expected:
//     81
//     ============================================
//     // Higher-order function
//     function add(a: number): Function {
//         return function(b: number): number {
//             return a + b;
//         }
//     }
var addWith5 = (0, lib_1.add)(5);
console.log(addWith5(3));
console.log(addWith5(15));
// Expected:
//     8
// 20
